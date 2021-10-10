package com.fpp.code.core.filebuilder.definedfunction;

import com.fpp.code.common.Utils;
import com.fpp.code.core.filebuilder.TimeoutRegexCharSequence;
import com.fpp.code.core.domain.DefinedFunctionDomain;
import com.fpp.code.core.template.TableInfo;

import java.util.regex.Matcher;
import java.util.regex.Pattern;
import java.util.stream.Collectors;
import java.util.stream.Stream;

/**
 * 方法参数解析规则
 * @author fpp
 * @version 1.0
 * @date 2020/7/13 9:28
 */
public class FunctionParamDefinedFunctionResolverRule implements DefinedFunctionResolverRule {

    protected static final Pattern rule=Pattern.compile("(?<=\\()(?<paramContent>.*)(?=\\)\\s*\\{?)");

    @Override
    public String doRule(DefinedFunctionDomain definedFunctionDomain) {
        String definedValue=definedFunctionDomain.getDefinedValue();
        String representFactor=definedFunctionDomain.getRepresentFactor();
        String srcFunctionBody=definedFunctionDomain.getTemplateFunction();
        TableInfo tableInfo=definedFunctionDomain.getTableInfo();
        //解析方法体中的参数
        String lowerRepresentFactor= Utils.firstLowerCase(Utils.underlineToHump(representFactor));
        Matcher matcher=rule.matcher(srcFunctionBody);
        while(matcher.find()){
            String paramContent=matcher.group("paramContent");
            if(Pattern.compile(lowerRepresentFactor, Pattern.CASE_INSENSITIVE).matcher(paramContent).find()) {
                Matcher matcher2=Pattern.compile("(?<paramPrefix>.*?)\\s+"+lowerRepresentFactor+"\\s*", Pattern.CASE_INSENSITIVE).matcher(paramContent);
                try {
                    if(matcher2.find()) {
                        String paramPrefix = matcher2.group("paramPrefix");
                        String[] valueS=paramPrefix.split("\\s");
                        String paramPrefixReal=Stream.of(valueS).limit(valueS.length-1).collect(Collectors.joining());
                        String newParamContent = Stream.of(definedValue.split(",")).map(s->Utils.firstLowerCase(Utils.underlineToHump(s))).map(s -> Utils.isEmpty(paramPrefixReal) ?getJavaType(s,tableInfo)+" " + s : paramPrefixReal.replaceAll(lowerRepresentFactor,s) + " " +getJavaType(s,tableInfo) +" "+ s).collect(Collectors.joining(","));
                        srcFunctionBody = srcFunctionBody.replace(paramContent, newParamContent);
                    }
                }catch (Exception e){

                }
            }
        }
        return srcFunctionBody;
    }

    public String getJavaType(String columnName, TableInfo tableInfo) {
        if(null!=tableInfo){
             return tableInfo.getColumnList().stream().filter(item->item.getName().equals(columnName)).map(TableInfo.ColumnInfo::getJavaType).findFirst().orElse("String");
        }else{
            return "String";
        }
    }

    public static Matcher createMatcherWithTimeout(String stringToMatch, String regularExpression, int timeoutMillis) {
        Pattern pattern = Pattern.compile(regularExpression);
        return createMatcherWithTimeout(stringToMatch, pattern, timeoutMillis);
    }

    public static Matcher createMatcherWithTimeout(String stringToMatch, Pattern regularExpressionPattern, int timeoutMillis) {
        CharSequence charSequence = new TimeoutRegexCharSequence(stringToMatch, timeoutMillis, stringToMatch,
                regularExpressionPattern.pattern());
        return regularExpressionPattern.matcher(charSequence);
    }

    public static void main(String[] args) {
        boolean b = Pattern.compile("ab", Pattern.CASE_INSENSITIVE).matcher("ABc").find();
        System.out.println(b);
    }
}

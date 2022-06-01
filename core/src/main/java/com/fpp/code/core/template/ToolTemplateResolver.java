package com.fpp.code.core.template;

import com.fpp.code.core.config.Environment;
import com.fpp.code.util.Utils;

import java.util.*;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

/**
 * @author fpp
 * @version 1.0
 * @date 2020/6/12 17:49
 */
public class ToolTemplateResolver extends AbstractTemplateLangResolver{

    private static TableInfo tableInfo;
    private static TemplateResolver templateResolver;

    private static String mendLastStr;
    private static String mendFirstStr;

    public ToolTemplateResolver() {
        super();
        this.resolverName=LANG_NAME;
    }

    /**
     * 工具类方法枚举
     */
    private enum Function{
        /**
         * 首字母大写
         */
        FISER_UPPER("firstUpper"){
            @Override
            String done(String src) {
                return Utils.firstUpperCase(src);
            }
        },
        /**
         * 大写
         */
        UPPER("upper"){
            @Override
            String done(String src) {
                return src.toUpperCase();
            }
        },
        /**
         * 首字母小写
         */
        FISER_LOWER("firstLower") {
            @Override
            String done(String src) {
                return Utils.firstLowerCase(src);
            }
        },
        /**
         * 小写
         */
        LOWER("lower") {
            @Override
            String done(String src) {
                return src.toLowerCase();
            }
        },
        /**
         * 当前系统时间
         */
        CURRENT_DATE_TIME("currentDateTime"){
            @Override
            String done(String src) {
                return Utils.getCurrentDateTime();
            }
        },
        /**
         * 当前用户
         */
        AUTHOR("author"){
            @Override
            String done(String src) {
                String result=System.getProperty("user.name");
                if(templateResolver instanceof AbstractTemplateResolver&&null!=((AbstractTemplateResolver) templateResolver).getEnvironment()) {
                    Environment environment = ((AbstractTemplateResolver) templateResolver).getEnvironment();
                    String author = environment.getProperty("project-author");
                    result=Utils.isEmpty(author)?result:author;
                }
                return result;
            }
        },
        /**
         * 上一级路径 比如包名 com.zzd 的上一级就是 com,com/zzd 为 com
         */
        UP_LEVEL_PATH("upLevelPath"){
            @Override
            String done(String src) {
                String result="";
                if(src.indexOf(".")>0){
                    result=src.substring(0,src.lastIndexOf("."));
                }else if(src.indexOf("/")>0){
                    result=src.substring(0,src.lastIndexOf("/"));
                }
                return result;
            }
        },
        /**
         * 获取表的所有SQL字段
         */
        ALL_SQL_COLUMN("allSqlColumn"){
            @Override
            String done(String src) {
                StringBuilder stringBuilder=new StringBuilder();
                int a = 0;
                int currentCount = 0;
                for (TableInfo.ColumnInfo columnInfo : tableInfo.getColumnList()) {
                    if (a == 0) {
                        stringBuilder.append("\"");
                    }
                    String columnName = columnInfo.getName();
                    if (columnName.indexOf("_") > 0) {
                        columnName = columnName + " as " + Utils.getFirstLowerCaseAndSplitLine(columnName);
                    }
                    if (!columnName.contains("_") && columnName.substring(0, 1).toUpperCase().equals(columnName.substring(0, 1))) {
                        columnName = columnName + " as " + columnInfo.getDomainPropertyName();
                    }
                    if (currentCount == tableInfo.getColumnList().size() - 1) {
                        stringBuilder.append(" ").append(columnName);
                    } else {
                        stringBuilder.append(" ").append(columnName).append(",");
                    }
                    a++;
                    currentCount++;
                    if (a == 5 || currentCount == tableInfo.getColumnList().size()) {
                        if (currentCount == tableInfo.getColumnList().size()) {
                            stringBuilder.append(" \",");
                        } else {
                            stringBuilder.append(" \","+mendFirstStr);
                            a = 0;
                        }
                    }

                }
                return stringBuilder.toString();
            }
        }

        ;

        private String value;
        public String getValue() {
            return value;
        }
        Function(String value) {
            this.value = value;
        }
        abstract String done(String src);
    }

    private static final String LANG_NAME="tool";
    private static final Pattern templateFunctionBodyPattern= Pattern.compile("(\\s*"+AbstractTemplateResolver.TEMPLATE_VARIABLE_PREFIX+"\\s*"+LANG_NAME+"\\s*\\.(?<function>.*?)\\(\\s*(?<title>.*?)\\s*\\)\\s*"+AbstractTemplateResolver.TEMPLATE_VARIABLE_SUFFIX+"\\s*)", Pattern.DOTALL);
    protected static final Pattern templateGrammarPatternSuffix= Pattern.compile("(\\s*"+LANG_NAME+"\\s*\\.(?<function>.*?)\\(\\s*(?<title>.*?)\\s*)", Pattern.DOTALL);
    private Set<Pattern> excludeVariablePatten=new HashSet<>(Arrays.asList(templateGrammarPatternSuffix));

    public ToolTemplateResolver(TemplateResolver templateResolver) {
        super(templateResolver);
        this.resolverName=LANG_NAME;
    }

    /**
     * 获取 模板排除某些正则key 这些正则key是模板中语言的 类型 的set
     *
     * @return
     */
    @Override
    public Set<Pattern> getExcludeVariablePatten() {
        return excludeVariablePatten;
    }

    @Override
    public boolean matchLangResolver(String srcData) {
        return templateFunctionBodyPattern.matcher(srcData).find();
    }

    /**
     * 模板语言解析方法
     *
     * @param srcData         需要解析的模板数据
     * @param replaceKeyValue 模板中的变量数据
     */
    @Override
    public String langResolver(String srcData, Map<String, Object> replaceKeyValue) throws TemplateResolveException {
        tableInfo= (TableInfo) replaceKeyValue.get("tableInfo");
        templateResolver=this.getTemplateResolver();
        Matcher matcher=templateFunctionBodyPattern.matcher(srcData);
        String result="";
        while(matcher.find()){
            String title = matcher.group("title");
            String function = matcher.group("function");
            String all=matcher.group(0);
            Matcher matcherTitle=AbstractTemplateResolver.templateVariableKeyPattern.matcher(title);
            StringBuilder titleBuilder=new StringBuilder();
            while(matcherTitle.find()){
                String titleGroup=matcherTitle.group();
                Object objectTarget;
                try {
                    objectTarget = Utils.getTargetObject(replaceKeyValue,titleGroup);
                } catch (IllegalAccessException e) {
                    throw new TemplateResolveException(e);
                }
                String realTitle;
                if(objectTarget instanceof String){
                    realTitle= (String) objectTarget;
                } else if(isMatchDependTemplate(titleGroup)){
                    realTitle = getDependTemplateResolver().langResolver(title,replaceKeyValue);
                }else {
                    realTitle = getLangBodyResult(objectTarget, title, titleGroup.split("\\.")[0]);
                }
                titleBuilder.append(realTitle);
            }
            title=titleBuilder.length()==0?title:titleBuilder.toString();
            Function functionTemp=checkFunction(function);
            mendLastStr=Utils.getLastNewLineNull(all);
            mendFirstStr=Utils.getFirstNewLineNull(all);
            String bodyResult=functionTemp.done(title);
            bodyResult=mendFirstStr+bodyResult+mendLastStr;
            result = Utils.isEmpty(result) ? srcData.replace(all, bodyResult) : result.replace(all, bodyResult);
        }
        return Utils.isEmpty(result)?srcData:result;
    }

    private DependTemplateResolver getDependTemplateResolver(){
        final AbstractTemplateResolver templateResolver = (AbstractTemplateResolver)getTemplateResolver();
        return templateResolver.getTemplateLangResolverList()
                .stream().filter(s->s instanceof DependTemplateResolver)
                .map(s->(DependTemplateResolver)s)
                .findFirst().orElse(null);
    }

    private boolean isMatchDependTemplate(String title){
        final DependTemplateResolver dependTemplateResolver = getDependTemplateResolver();
        if(null==dependTemplateResolver){
            return false;
        }
        return dependTemplateResolver.getExcludeVariablePatten().stream().anyMatch(s->s.matcher(title).find());
    }

    private Function checkFunction(String functionName) {
        //校验工具方法是否存在
        Function result=null;
        for(Function function: Function.values()){
            if(function.getValue().equals(functionName)){
                result=function;
            }
        }
        Objects.requireNonNull(result,functionName+"在"+LANG_NAME+"中不存在");
        return result;
    }

}

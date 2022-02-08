package com.fpp.code.core.factory;

import com.alibaba.fastjson.JSONObject;
import com.alibaba.fastjson.annotation.JSONField;
import com.alibaba.fastjson.parser.DefaultJSONParser;
import com.alibaba.fastjson.parser.deserializer.ObjectDeserializer;
import com.fpp.code.core.template.PatternTemplateFilePrefixNameStrategy;
import com.fpp.code.core.template.TemplateFilePrefixNameStrategy;
import com.fpp.code.core.template.TemplateFilePrefixNameStrategyFactory;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import java.lang.reflect.Type;
import java.util.Objects;
import java.util.Set;

/**
 * @author fpp
 */
public class RootTemplateDefinition extends AbstractTemplateDefinition {

    @JSONField(alternateNames = {"fileSuffixName"})
    private String templateFileSuffixName;

    private Boolean isHandleFunction;

    @JSONField(deserializeUsing = RootTemplateDefinitionDeserializer.class,alternateNames = {"filePrefixNameStrategy"})
    private TemplateFilePrefixNameStrategy templateFilePrefixNameStrategy;

    @JSONField(defaultValue = "[]")
    private Set<String> dependTemplates;


    public RootTemplateDefinition() {
    }


    @Override
    public String getTemplateFileSuffixName() {
        return templateFileSuffixName;
    }

    public void setTemplateFileSuffixName(String templateFileSuffixName) {
        this.templateFileSuffixName = templateFileSuffixName;
    }

    @Override
    public boolean isHandleFunction() {
        return isHandleFunction;
    }

    public void setDependTemplates(Set<String> dependTemplates) {
        this.dependTemplates = dependTemplates;
    }

    @Override
    public Set<String> getDependTemplates() {
        return dependTemplates;
    }


    public void setHandleFunction(Boolean handleFunction) {
        isHandleFunction = handleFunction;
    }

    @Override
    public TemplateFilePrefixNameStrategy getTemplateFilePrefixNameStrategy() {
        return templateFilePrefixNameStrategy;
    }

    public void setTemplateFilePrefixNameStrategy(TemplateFilePrefixNameStrategy templateFilePrefixNameStrategy) {
        this.templateFilePrefixNameStrategy = templateFilePrefixNameStrategy;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        if (!super.equals(o)) return false;
        RootTemplateDefinition that = (RootTemplateDefinition) o;
        return isHandleFunction == that.isHandleFunction &&
                templateFileSuffixName.equals(that.templateFileSuffixName) &&
                templateFilePrefixNameStrategy.equals(that.templateFilePrefixNameStrategy) &&
                dependTemplates.equals(that.dependTemplates);
    }

    @Override
    public int hashCode() {
        return Objects.hash(super.hashCode(), templateFileSuffixName, isHandleFunction, templateFilePrefixNameStrategy, dependTemplates);
    }

    public static class RootTemplateDefinitionDeserializer implements ObjectDeserializer{
        private static Logger logger= LogManager.getLogger(RootTemplateDefinitionDeserializer.class);

        TemplateFilePrefixNameStrategyFactory templateFilePrefixNameStrategyFactory=new TemplateFilePrefixNameStrategyFactory();

        @Override
        public <T> T deserialze(DefaultJSONParser parser, Type type, Object fieldName) {
            JSONObject jsonObject = parser.parseObject();
            try {
                int value = jsonObject.getInteger("value");
                String pattern = jsonObject.getString("pattern");
                TemplateFilePrefixNameStrategy filePrefixNameStrategy = templateFilePrefixNameStrategyFactory.getTemplateFilePrefixNameStrategy(value);
                if (filePrefixNameStrategy instanceof PatternTemplateFilePrefixNameStrategy) {
                    ((PatternTemplateFilePrefixNameStrategy) filePrefixNameStrategy).setPattern(pattern);
                }
                return (T) filePrefixNameStrategy;
            }catch (Exception e){
                logger.error("RootTemplateDefinitionDeserializer error {},{},{}",e,e.getMessage(),jsonObject);
                return null;
            }
        }

        @Override
        public int getFastMatchToken() {
            return 0;
        }
    }
}

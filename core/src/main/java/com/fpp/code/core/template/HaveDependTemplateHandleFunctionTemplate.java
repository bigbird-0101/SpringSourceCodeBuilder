package com.fpp.code.core.template;

import com.alibaba.fastjson.annotation.JSONType;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import java.util.Set;

/**
 * 有依赖模板的项目模板
 */
@JSONType(serializer = AbstractTemplate.TemplateSerializer.class)
public class HaveDependTemplateHandleFunctionTemplate extends DefaultHandleFunctionTemplate {
    private static Logger logger= LogManager.getLogger(HaveDependTemplateHandleFunctionTemplate.class);

    private Set<String> dependTemplates;

    public Set<String> getDependTemplates() {
        return dependTemplates;
    }

    public void setDependTemplates(Set<String> dependTemplates) {
        this.dependTemplates = dependTemplates;
    }

    public HaveDependTemplateHandleFunctionTemplate(){
    }
}

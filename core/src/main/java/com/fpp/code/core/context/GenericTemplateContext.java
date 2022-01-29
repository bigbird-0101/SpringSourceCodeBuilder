package com.fpp.code.core.context;

import com.fpp.code.core.config.Environment;
import com.fpp.code.core.exception.CodeConfigException;
import com.fpp.code.core.factory.DefaultListableTemplateFactory;
import com.fpp.code.core.factory.config.MultipleTemplateDefinition;
import com.fpp.code.core.factory.config.TemplateDefinition;

import java.io.IOException;

/**
 * @author fpp
 * @version 1.0
 * @date 2021/1/7 11:35
 */
public class GenericTemplateContext extends AbstractTemplateContext {
    private DefaultListableTemplateFactory defaultListableTemplateFactory;
    public GenericTemplateContext(Environment environment) throws CodeConfigException, IOException {
        super(environment);
        this.defaultListableTemplateFactory=new DefaultListableTemplateFactory();
        this.defaultListableTemplateFactory.setEnvironment(environment);
        this.refresh();
    }

    /**
     * 获取模板工厂
     *
     * @return
     */
    @Override
    public final DefaultListableTemplateFactory getTemplateFactory() {
        return defaultListableTemplateFactory;
    }

    @Override
    public void registerMultipleTemplateDefinition(String multipleTemplateDefinitionName, MultipleTemplateDefinition multipleTemplateDefinition) {
        getTemplateFactory().registerMultipleTemplateDefinition(multipleTemplateDefinitionName,multipleTemplateDefinition);
    }

    @Override
    public MultipleTemplateDefinition getMultipleTemplateDefinition(String multipleTemplateDefinitionName) {
        return getTemplateFactory().getMultipleTemplateDefinition(multipleTemplateDefinitionName);
    }

    @Override
    public void registerTemplateDefinition(String templateName, TemplateDefinition templateDefinition) {
        getTemplateFactory().registerTemplateDefinition(templateName, templateDefinition);
    }

    @Override
    public TemplateDefinition getTemplateDefinition(String templateName) {
        return getTemplateFactory().getTemplateDefinition(templateName);
    }

}

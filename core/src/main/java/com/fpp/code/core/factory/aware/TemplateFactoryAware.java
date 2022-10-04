package com.fpp.code.core.factory.aware;

import com.fpp.code.core.factory.config.TemplateFactory;

/**
 * 感知 templateFactory
 * @author bigbird-0101
 * @version 1.0.0
 * @since 2022-10-04 19:27:36
 */
public interface TemplateFactoryAware {
    /**
     * 感知 templateFactory
     * @param templateFactory
     * @return
     */
    void setTemplateFactory(TemplateFactory templateFactory);
}

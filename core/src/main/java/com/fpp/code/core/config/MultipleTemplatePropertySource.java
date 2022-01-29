package com.fpp.code.core.config;

import com.fpp.code.core.template.MultipleTemplate;

/**
 * @author fpp
 * @version 1.0
 * @date 2021/1/6 14:21
 */
public class MultipleTemplatePropertySource extends PropertySource<MultipleTemplate>{
    public MultipleTemplatePropertySource(String name, MultipleTemplate source) {
        super(name, source);
    }
}

package com.fpp.code.fxui.event;

import com.fpp.code.core.event.TemplateEvent;
import com.fpp.code.core.template.Template;
import com.fpp.code.fxui.fx.controller.TemplatesOperateController;

/**
 * @author bigbird-0101
 * @version 1.0.0
 * @since 2022-09-21 22:21:40
 */
public class DoGetTemplateAfterEvent extends TemplateEvent {
    private TemplatesOperateController templatesOperateController;

    public DoGetTemplateAfterEvent(Template template,TemplatesOperateController templatesOperateController) {
        super(template);
        this.templatesOperateController=templatesOperateController;
    }

    public Template getTemplate(){
        return (Template) getSource();
    }

    public TemplatesOperateController getTemplatesOperateController() {
        return templatesOperateController;
    }
}

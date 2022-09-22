package com.fpp.code.fxui.event;

import com.fpp.code.core.event.SimpleEventMulticaster;
import com.fpp.code.core.template.HaveDependTemplateHandleFunctionTemplate;
import com.fpp.code.fxui.fx.controller.TemplatesOperateController;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

/**
 * @author bigbird-0101
 * @version 1.0.0
 * @since 2022-09-22 22:14:36
 */
public class DoGetTemplateAfterListenerTest {

    @Test
    void onTemplateEvent() {
        SimpleEventMulticaster simpleEventMulticaster=new SimpleEventMulticaster();
        simpleEventMulticaster.addListener(new DoGetTemplateAfterListener());
        Assertions.assertThrows(NullPointerException.class,()-> simpleEventMulticaster.multicastEvent(new
                DoGetTemplateAfterEvent(new HaveDependTemplateHandleFunctionTemplate(),
                new TemplatesOperateController())));
    }
}
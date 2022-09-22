package com.fpp.code.fxui.event;

import cn.hutool.core.util.ObjectUtil;
import cn.hutool.log.StaticLog;
import com.fpp.code.core.event.TemplateListener;
import com.fpp.code.core.template.Template;
import com.fpp.code.fxui.fx.controller.TemplatesOperateController;
import javafx.scene.Node;
import javafx.scene.control.CheckBox;
import javafx.scene.layout.AnchorPane;

import java.util.List;
import java.util.Set;

import static java.util.stream.Collectors.toList;

/**
 * @author bigbird-0101
 * @version 1.0.0
 * @since 2022-09-21 22:21:19
 */
public class DoGetTemplateAfterListener extends TemplateListener<DoGetTemplateAfterEvent> {
    @Override
    protected void onTemplateEvent(DoGetTemplateAfterEvent doGetTemplateAfterEvent) {
        StaticLog.info("onTemplateContextEvent {}",doGetTemplateAfterEvent);
        //找到对应的模板checkbox
        final TemplatesOperateController templatesOperateController = doGetTemplateAfterEvent.getTemplatesOperateController();
        final Template template = doGetTemplateAfterEvent.getTemplate();
        if(ObjectUtil.isAllNotEmpty(templatesOperateController,template)) {
            Set<Node> nodes = templatesOperateController.getTemplates().lookupAll("AnchorPane");
            List<CheckBox> collect = nodes.stream().map(node -> (AnchorPane) node)
                    .map(anchorPane -> anchorPane.lookup("CheckBox"))
                    .map(node -> (CheckBox) node)
                    .filter(checkBox -> checkBox.getUserData().equals(template.getTemplateName()))
                    .collect(toList());
            CheckBox checkBoxTarget = collect.stream().findFirst().orElse(null);
            if (null != checkBoxTarget) {
                AnchorPane anchorPane = (AnchorPane) checkBoxTarget.getParent().getParent().getParent();
                //重新设置模板值但不持久化
                templatesOperateController.doSetTemplate(template, anchorPane);
            } else {
                StaticLog.warn("checkBoxTarget not get {}", template.getTemplateName());
            }
        }
    }
}

package com.fpp.code.core.template;

/**
 * 模板配置定义
 * @author Administrator
 */
public class TemplateConfigDomain {

    private String fileName;
    private String url;
    private String name;
    private String path;
    /**
     * 文件名前缀策略
     */
    private int filePrefixNameStrategyType;
    /**
     * 文件名后缀
     */
    private String fileSuffixName;
    private int isHandleFunction;
    private String parent;

    public String getFileName() {
        return fileName;
    }

    public void setFileName(String fileName) {
        this.fileName = fileName;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPath() {
        return path;
    }

    public void setPath(String path) {
        this.path = path;
    }

    public int getFilePrefixNameStrategyType() {
        return filePrefixNameStrategyType;
    }

    public void setFilePrefixNameStrategyType(int filePrefixNameStrategyType) {
        this.filePrefixNameStrategyType = filePrefixNameStrategyType;
    }

    public String getFileSuffixName() {
        return fileSuffixName;
    }

    public void setFileSuffixName(String fileSuffixName) {
        this.fileSuffixName = fileSuffixName;
    }

    public int getIsHandleFunction() {
        return isHandleFunction;
    }

    public void setIsHandleFunction(int isHandleFunction) {
        this.isHandleFunction = isHandleFunction;
    }

    public String getParent() {
        return parent;
    }

    public void setParent(String parent) {
        this.parent = parent;
    }

    public TemplateConfigDomain(String fileName,String url,String name, String path, int filePrefixNameStrategyType, String fileSuffixName, int isHandleFunction, String parent) {
        this.fileName = fileName;
        this.url=url;
        this.name = name;
        this.path = path;
        this.filePrefixNameStrategyType = filePrefixNameStrategyType;
        this.fileSuffixName = fileSuffixName;
        this.isHandleFunction = isHandleFunction;
        this.parent = parent;
    }

    public TemplateConfigDomain() {
    }

    @Override
    public String toString() {
        return "TemplateConfigDomain{" +
                "fileName='" + fileName + '\'' +
                ", url='" + url + '\'' +
                ", name='" + name + '\'' +
                ", path='" + path + '\'' +
                ", filePrefixNameStrategyType=" + filePrefixNameStrategyType +
                ", fileSuffixName='" + fileSuffixName + '\'' +
                ", isHandleFunction=" + isHandleFunction +
                ", parent='" + parent + '\'' +
                '}';
    }
}

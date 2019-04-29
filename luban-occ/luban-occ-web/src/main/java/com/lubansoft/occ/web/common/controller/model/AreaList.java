package com.lubansoft.occ.web.common.controller.model;

import java.util.List;

/**
 * 当前企业各个区域的中的deptids
 * @author liuli
 * @date 2019/2/21 20:55
 */
public class AreaList {
    /**
     * 东北区的deptids
     */
    List<String> dongbeiList;
    /**
     * 华东区的deptids
     */
    List<String> huadongList;
    /**
     * 华北区的deptids
     */
    List<String> huabeiList;
    /**
     * 华中区的deptids
     */
    List<String> huazhongList;
    /**
     * 华南区的deptids
     */
    List<String> huananList;
    /**
     * 西南区的deptids
     */
    List<String> xinanList;
    /**
     * 西北区的deptids
     */
    List<String> xibeiList;

    public List<String> getDongbeiList() {
        return dongbeiList;
    }

    public void setDongbeiList(List<String> dongbeiList) {
        this.dongbeiList = dongbeiList;
    }

    public List<String> getHuadongList() {
        return huadongList;
    }

    public void setHuadongList(List<String> huadongList) {
        this.huadongList = huadongList;
    }

    public List<String> getHuabeiList() {
        return huabeiList;
    }

    public void setHuabeiList(List<String> huabeiList) {
        this.huabeiList = huabeiList;
    }

    public List<String> getHuazhongList() {
        return huazhongList;
    }

    public void setHuazhongList(List<String> huazhongList) {
        this.huazhongList = huazhongList;
    }

    public List<String> getHuananList() {
        return huananList;
    }

    public void setHuananList(List<String> huananList) {
        this.huananList = huananList;
    }

    public List<String> getXinanList() {
        return xinanList;
    }

    public void setXinanList(List<String> xinanList) {
        this.xinanList = xinanList;
    }

    public List<String> getXibeiList() {
        return xibeiList;
    }

    public void setXibeiList(List<String> xibeiList) {
        this.xibeiList = xibeiList;
    }
}

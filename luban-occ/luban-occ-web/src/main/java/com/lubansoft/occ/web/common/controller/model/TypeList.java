package com.lubansoft.occ.web.common.controller.model;

import java.util.List;

/**
 * @author liuli
 * @date 2019/2/26 16:03
 */
public class TypeList {
    /**
     * 房建deptIds
     */
    private List<String> FJ_deptList;
    /**
     * 市政deptIds
     */
    private List<String> SZ_deptList;

    public List<String> getFJ_deptList() {
        return FJ_deptList;
    }

    public void setFJ_deptList(List<String> FJ_deptList) {
        this.FJ_deptList = FJ_deptList;
    }

    public List<String> getSZ_deptList() {
        return SZ_deptList;
    }

    public void setSZ_deptList(List<String> JJ_deptList) {
        this.SZ_deptList = JJ_deptList;
    }

    public TypeList(List<String> FJ_deptList, List<String> JJ_deptList) {
        this.FJ_deptList = FJ_deptList;
        this.SZ_deptList = JJ_deptList;
    }

    public TypeList() {
    }
}

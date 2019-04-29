package com.lubansoft.occ.admin.common.model;

public class SpinnerModel {
    /**
     * 下拉列表模型
     */
    private Integer id;//主键id
    private Integer value;//对应id
    private Integer type;//对应类型id
    private String name;//对应名称
    private Integer epid;//企业id
    private Integer sort;//排序

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getValue() {
        return value;
    }

    public void setValue(Integer value) {
        this.value = value;
    }

    public Integer getType() {
        return type;
    }

    public void setType(Integer type) {
        this.type = type;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getEpid() {
        return epid;
    }

    public void setEpid(Integer epid) {
        this.epid = epid;
    }

    public Integer getSort() {
        return sort;
    }

    public void setSort(Integer sort) {
        this.sort = sort;
    }

    public SpinnerModel(Integer id, Integer value, Integer type, String name, Integer epid, Integer sort) {
        this.id = id;
        this.value = value;
        this.type = type;
        this.name = name;
        this.epid = epid;
        this.sort = sort;
    }

    public SpinnerModel() {
    }
}

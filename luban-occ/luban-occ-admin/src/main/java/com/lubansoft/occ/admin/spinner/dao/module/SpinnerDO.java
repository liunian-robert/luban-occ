package com.lubansoft.occ.admin.spinner.dao.module;



public class SpinnerDO{
    private String id;
    private Integer epid;
    private Integer value;
    private Integer type;
    private String key;
    private String name;
    private Integer sort;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public Integer getEpid() {
        return epid;
    }

    public void setEpid(Integer epid) {
        this.epid = epid;
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

    public String getKey() {
        return key;
    }

    public void setKey(String key) {
        this.key = key;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getSort() {
        return sort;
    }

    public void setSort(Integer sort) {
        this.sort = sort;
    }

    public SpinnerDO(String id, Integer epid, Integer value, Integer type, String key, String name, Integer sort) {
        this.id = id;
        this.epid = epid;
        this.value = value;
        this.type = type;
        this.key = key;
        this.name = name;
        this.sort = sort;
    }

    public SpinnerDO() {
    }
}

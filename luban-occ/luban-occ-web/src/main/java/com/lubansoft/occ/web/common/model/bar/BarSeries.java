package com.lubansoft.occ.web.common.model.bar;

import java.util.List;

/**
 * 柱状图 series 对象
 * @author liuli
 * @date 2019/2/20 20:15
 */
public class BarSeries<T> {
    private String name;
    private String type;
    private List<T> data;
    private String color;
    public void setName(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getType() {
        return type;
    }

    public void setData(List<T> data) {
        this.data = data;
    }

    public List<T> getData() {
        return data;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }
}

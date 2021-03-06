package com.lubansoft.occ.web.common.model.bar;

import java.util.List;

/**
 * 柱状图 y轴对象
 * @author liuli
 * @date 2019/2/20 20:15
 */
public class BarYAxis<T> {
    private List<T> data;

    public void setData(List<T> data) {
        this.data = data;
    }

    public List<T> getData() {
        return data;
    }
}

package com.lubansoft.occ.web.common.model.pictorial;

import java.util.List;

/**
 * 象形图 series对象
 *
 * @author liuli
 * @param <T>
 * @date 2019/2/20 22:20
 */
public class PictorialSeries<T> {


    private String type;
    private List<T> data;

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
}

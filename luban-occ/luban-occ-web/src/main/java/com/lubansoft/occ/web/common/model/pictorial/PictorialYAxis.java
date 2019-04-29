package com.lubansoft.occ.web.common.model.pictorial;

import java.util.List;

/**
 * 象形图Y轴对象
 *
 * @author liuli
 * @date 2019/2/20 22:15
 */
public class PictorialYAxis {


    private String type;
    private List<String> data;

    public void setType(String type) {
        this.type = type;
    }

    public String getType() {
        return type;
    }

    public void setData(List<String> data) {
        this.data = data;
    }

    public List<String> getData() {
        return data;
    }

}

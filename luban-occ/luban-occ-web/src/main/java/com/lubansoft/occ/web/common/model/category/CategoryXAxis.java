package com.lubansoft.occ.web.common.model.category;

import java.util.List;

/**
 * 折线图的 x轴对象
 *
 * @author liuli
 * @date 2019/2/21 9:16
 */
public class CategoryXAxis {

    private String type;

    private boolean boundaryGap;

    private List<String> data;

    public void setData(List<String> data) {
        this.data = data;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public boolean isBoundaryGap() {
        return boundaryGap;
    }

    public void setBoundaryGap(boolean boundaryGap) {
        this.boundaryGap = boundaryGap;
    }

    public List<String> getData() {

        return data;
    }
}

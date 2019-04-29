package com.lubansoft.occ.web.common.model.pie;

import java.util.List;

/**
 * 饼形图series对象
 *
 * @author liuli
 * @date 2019/2/20 21:27
 */
public class PieSeries {

    private String title;
    private List<String> colorStart;
    private List<String> colorEnd;
    private String type;
    private List<PieData> data;

    public void setTitle(String title) {
        this.title = title;
    }

    public String getTitle() {
        return title;
    }

    public List<String> getColorStart() {
        return colorStart;
    }

    public void setColorStart(List<String> colorStart) {
        this.colorStart = colorStart;
    }

    public List<String> getColorEnd() {
        return colorEnd;
    }

    public void setColorEnd(List<String> colorEnd) {
        this.colorEnd = colorEnd;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getType() {
        return type;
    }

    public void setData(List<PieData> data) {
        this.data = data;
    }

    public List<PieData> getData() {
        return data;
    }

}

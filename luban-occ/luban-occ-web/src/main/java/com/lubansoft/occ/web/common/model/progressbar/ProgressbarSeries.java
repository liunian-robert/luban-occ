
package com.lubansoft.occ.web.common.model.progressbar;

import java.util.List;

/**
 * 进度条series 对象
 * @author liuli
 * @date 2019/2/21 10:03
 */
public class ProgressbarSeries<T>  {

    private String type;

    private List<T> data;

    private T total;

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public List<T> getData() {
        return data;
    }

    public void setData(List<T> data) {
        this.data = data;
    }

    public T getTotal() {
        return total;
    }

    public void setTotal(T total) {
        this.total = total;
    }

}

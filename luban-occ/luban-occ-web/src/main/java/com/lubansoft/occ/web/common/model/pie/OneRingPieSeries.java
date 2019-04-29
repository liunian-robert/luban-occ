package com.lubansoft.occ.web.common.model.pie;

import java.util.List;

/**
 * @description 一环饼形图series对象
 * @author cuizq
 * @date 2019-02-23 17:02:11
 */
public class OneRingPieSeries<M,N> {
    private M total;
    private String type;
    private List<PieData<N>> data;
	public M getTotal() {
		return total;
	}
	public void setTotal(M total) {
		this.total = total;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public List<PieData<N>> getData() {
		return data;
	}
	public void setData(List<PieData<N>> data) {
		this.data = data;
	}
	@Override
	public String toString() {
		return "OneRingPieSeries [total=" + total + ", type=" + type + ", data=" + data + "]";
	}
}

package com.lubansoft.occ.web.common.model.pie;

import java.util.List;

/**
 * @description 一环饼状图模型
 * @author cuizq
 * @date 2019-02-23 17:04:15
 */
public class OneRingPieModle<M,N> {
	private String title;
	private List<OneRingPieSeries<M,N>> series;
	
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public List<OneRingPieSeries<M,N>> getSeries() {
		return series;
	}
	public void setSeries(List<OneRingPieSeries<M,N>> series) {
		this.series = series;
	}
	
	@Override
	public String toString() {
		return "OneRingPieModle [title=" + title + ", series=" + series + "]";
	}
}

package com.lubansoft.occ.web.common.model.bar;

import java.util.List;

import com.lubansoft.occ.web.common.model.bar.BarSeries;
import com.lubansoft.occ.web.common.model.bar.BarXAxis;

/**
 * @description 柱状图返回模型
 * @author cuizq
 * @date 2019-02-20 22:17:42
 */
public class BarModle<M,N> {
	private String title;
	private List<BarXAxis<M>> xAxis;
	private List<BarSeries<N>> series;
	
	public List<BarXAxis<M>> getxAxis() {
		return xAxis;
	}
	public void setxAxis(List<BarXAxis<M>> xAxis) {
		this.xAxis = xAxis;
	}
	public List<BarSeries<N>> getSeries() {
		return series;
	}
	public void setSeries(List<BarSeries<N>> series) {
		this.series = series;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	
	@Override
	public String toString() {
		return "BarModle [title=" + title + ", xAxis=" + xAxis + ", series=" + series + "]";
	}
}

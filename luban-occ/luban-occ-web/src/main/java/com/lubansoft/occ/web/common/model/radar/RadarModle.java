package com.lubansoft.occ.web.common.model.radar;

import java.util.List;

import com.lubansoft.occ.web.common.model.pictorial.PictorialSeries;

/**
 * @description 雷达图返回模型
 * @author cuizq
 * @date 2019-02-20 22:17:42
 */
public class RadarModle<M,N> {
	private String title;
	private List<RadarIndicator<M>> indicator;
	private List<PictorialSeries<N>> series;
	
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public List<RadarIndicator<M>> getIndicator() {
		return indicator;
	}
	public void setIndicator(List<RadarIndicator<M>> indicator) {
		this.indicator = indicator;
	}
	public List<PictorialSeries<N>> getSeries() {
		return series;
	}
	public void setSeries(List<PictorialSeries<N>> series) {
		this.series = series;
	}
	
	@Override
	public String toString() {
		return "RadarModle [title=" + title + ", indicator=" + indicator + ", series=" + series + "]";
	}
}

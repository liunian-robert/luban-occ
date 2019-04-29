package com.lubansoft.occ.web.common.model.progressbar;

import java.util.List;

public class ProgressModle<T> {
	private String title;
	private List<ProgressbarSeries<T>> series;
	
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public List<ProgressbarSeries<T>> getSeries() {
		return series;
	}
	public void setSeries(List<ProgressbarSeries<T>> series) {
		this.series = series;
	}
	
	@Override
	public String toString() {
		return "ProgressModle [title=" + title + ", series=" + series + "]";
	}
}

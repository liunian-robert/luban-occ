package com.lubansoft.occ.web.common.model.radar;

/**
 * @description 雷达图indicator属性对象
 * @author cuizq
 * @date 2019-02-22 15:16:18
 */
public class RadarIndicator<T> {
	private String name;
	private T max;
	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public T getMax() {
		return max;
	}
	public void setMax(T max) {
		this.max = max;
	}
	
	@Override
	public String toString() {
		return "RadarIndicator [name=" + name + ", max=" + max + "]";
	}
}

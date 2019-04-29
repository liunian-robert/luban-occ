package com.lubansoft.occ.web.common.model.pie;

/**
 * 饼状图 data对象
 * @author liuli
 * @date 2019/2/20 21:29
 */
public class PieData<T> {

    private T value;
    private String name;
    
	public T getValue() {
		return value;
	}
	public void setValue(T value) {
		this.value = value;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}

}
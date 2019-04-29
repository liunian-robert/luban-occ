package com.lubansoft.occ.common.model;

import java.io.Serializable;

/**
 * 排序模型
 * @author xiaotao.song
 *
 */
public class OrderModel implements Serializable {
	private static final long serialVersionUID = 3481250298235057968L;
	
	/**
	 * 列名（各个模块自定义）
	 */
	private String column;
	/**
	 * 排序类型（asc/desc）
	 */
	private String type;
	
	
	public String getColumn() {
		return column;
	}
	public void setColumn(String column) {
		this.column = column;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
}

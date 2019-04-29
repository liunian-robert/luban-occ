package com.lubansoft.occ.common.util;

public enum SpinnerModule {
	QUALITY("质量评比情况",2),
	CIVILIZATION("文明评比情况",1),
	PURCHASE_TYPE("采购方式",5),
	SCIENCE_LEVEL("科研课题等级",6);
	
	private String description;
	private int type;
	
	SpinnerModule(String description,int type){
		this.description = description;
		this.type = type;
	}
	
	public String getDescription() {
		return description;
	}
	public int getType() {
		return type;
	}
}

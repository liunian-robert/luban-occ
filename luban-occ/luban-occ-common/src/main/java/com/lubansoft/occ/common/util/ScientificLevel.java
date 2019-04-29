package com.lubansoft.occ.common.util;

import java.util.ArrayList;
import java.util.List;

public enum ScientificLevel {
	
	COUNTRY("国家级课题",1),
	PROVIENCE("省市级课题",2),
	ENTERPRISE("企业级课题",3);
	
	private String name;
	private Integer type;
	
	ScientificLevel(String name,Integer type) {
		this.name = name;
		this.type = type;
	}
	public String getName() {
		return name;
	}
	public Integer getType(){
		return type;
	}
	public static List<ScientificLevel> getDefaultOrder(){
		List<ScientificLevel> order = new ArrayList<ScientificLevel>(3);
		order.add(COUNTRY);
		order.add(PROVIENCE);
		order.add(ENTERPRISE);
		return order;
	}
}

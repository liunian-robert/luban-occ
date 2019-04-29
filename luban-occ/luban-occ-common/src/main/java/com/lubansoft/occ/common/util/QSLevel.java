package com.lubansoft.occ.common.util;

import java.util.ArrayList;
import java.util.List;

public enum QSLevel {
	
	QS_HIGH("优秀",1),
	QS_QUALIFIED("合格",2),
	QS_OTHER("其他",3);
	
	private String name;
	private int type;
	
	QSLevel(String name,int type) {
		this.name = name;
		this.type = type;
	}
	public String getName() {
		return name;
	}
	public int getType(){
		return type;
	}
	public static List<QSLevel> getDefaultOrder(){
		List<QSLevel> order = new ArrayList<QSLevel>(3);
		order.add(QS_HIGH);
		order.add(QS_QUALIFIED);
		order.add(QS_OTHER);
		return order;
	}
}

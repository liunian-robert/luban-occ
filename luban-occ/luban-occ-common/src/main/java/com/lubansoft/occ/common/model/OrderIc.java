package com.lubansoft.occ.common.model;


public interface OrderIc {
	
	/*final static String ASC = "asc";
	final static String DESC = "desc";*/
	
	static enum OrderType {ASC, DESC};
	
    String getName();
	String getColumn();
	String getType();
}

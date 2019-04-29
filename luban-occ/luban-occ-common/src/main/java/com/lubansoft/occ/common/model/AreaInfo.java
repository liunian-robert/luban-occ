package com.lubansoft.occ.common.model;

/**
 * @description 中国七大区域对应码
 * @author cuizq
 * @date 2019-03-02 15:12:28
 */
public enum AreaInfo {
	
    DONGBEI("东北",1),
    HUADONG("华东",2),
    HUABEI("华北",3),
    HUAZHONG("华中",4),
    HUANAN("华南",5),
    XINAN("西南",6),
    XIBEI("西北",7);
	
    private String description;
    private int code;
    AreaInfo(String description,int code){
    	this.description = description;
    	this.code = code;
    }
	public String getDescription() {
		return description;
	}
	public int getCode() {
		return code;
	}
}

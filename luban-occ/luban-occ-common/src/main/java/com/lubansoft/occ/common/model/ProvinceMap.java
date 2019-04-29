package com.lubansoft.occ.common.model;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class ProvinceMap {

	public  static final String  DONGBEI="东北";
    public  static final int  DONGBEI_CODE = 1;
    public  static final String  HUADONG="华东";
    public  static final int  HUADONG_CODE = 2;
    public  static final String  HUABEI="华北";
    public  static final int  HUABEI_CODE = 3;
    public  static final String  HUAZHONG="华中";
    public  static final int  HUAZHONG_CODE = 4;
    public  static final String  HUANAN ="华南";
    public  static final int  HUANAN_CODE = 5;
    public  static final String  XINAN="西南";
    public  static final int  XINAN_CODE = 6;
    public  static final String  XIBEI="西北";
    public  static final int  XIBEI_CODE = 7;
    private ProvinceMap(){

    }


    //东北（黑龙江省、吉林省、辽宁省）；

    //华东（上海市、江苏省、浙江省、安徽省、福建省、江西省、山东省、台湾省）；

    //华北（北京市、天津市、山西省、河北省、内蒙古自治区）；

    //华中（河南省、湖北省、湖南省）；

    //华南（广东省、广西壮族自治区、海南省、香港特别行政区、澳门特别行政区）；

    //西南（四川省、贵州省、云南省、重庆市、西藏自治区）；

    //西北（陕西省、甘肃省、青海省、宁夏回族自治区、新疆维吾尔自治区）

    public static Map<String,String>  getProvinceMap() {
        Map<String,String> keyMaps = new HashMap<String,String>();
        //东北（黑龙江省、吉林省、辽宁省）；
        keyMaps.put("黑龙江省",DONGBEI);
        keyMaps.put("吉林省",DONGBEI);
        keyMaps.put("辽宁省",DONGBEI);

        //华东（上海市、江苏省、浙江省、安徽省、福建省、江西省、山东省、台湾省）
        keyMaps.put("上海市",HUADONG);
        keyMaps.put("江苏省",HUADONG);
        keyMaps.put("浙江省",HUADONG);
        keyMaps.put("安徽省",HUADONG);
        keyMaps.put("福建省",HUADONG);
        keyMaps.put("江西省",HUADONG);
        keyMaps.put("山东省",HUADONG);
        keyMaps.put("台湾省",HUADONG);

        //华北（北京市、天津市、山西省、河北省、内蒙古自治区）；
        keyMaps.put("北京市",HUABEI);
        keyMaps.put("天津市",HUABEI);
        keyMaps.put("山西省",HUABEI);
        keyMaps.put("河北省",HUABEI);
        keyMaps.put("内蒙古自治区",HUABEI);

        //华中（河南省、湖北省、湖南省）；
        keyMaps.put("河南省",HUAZHONG);
        keyMaps.put("湖北省",HUAZHONG);
        keyMaps.put("湖南省",HUAZHONG);

        //华南（广东省、广西壮族自治区、海南省、香港特别行政区、澳门特别行政区）；
        keyMaps.put("广东省",HUANAN);
        keyMaps.put("广西壮族自治区",HUANAN);
        keyMaps.put("海南省",HUANAN);
        keyMaps.put("香港特别行政区",HUANAN);
        keyMaps.put("澳门特别行政区",HUANAN);

        //西南（四川省、贵州省、云南省、重庆市、西藏自治区）；
        keyMaps.put("四川省",XINAN);
        keyMaps.put("贵州省",XINAN);
        keyMaps.put("云南省",XINAN);
        keyMaps.put("重庆市",XINAN);
        keyMaps.put("西藏自治区",XINAN);

        //西北（陕西省、甘肃省、青海省、宁夏回族自治区、新疆维吾尔自治区）
        keyMaps.put("陕西省",XIBEI);
        keyMaps.put("甘肃省",XIBEI);
        keyMaps.put("青海省",XIBEI);
        keyMaps.put("宁夏回族自治区",XIBEI);
        keyMaps.put("新疆维吾尔自治区",XIBEI);

        return keyMaps;
    }
    
    public static Map<String,Integer>  getProvinceCodeMap() {
        Map<String,Integer> keyMaps = new HashMap<String,Integer>();
        //东北（黑龙江省、吉林省、辽宁省）
        keyMaps.put("黑龙江省",DONGBEI_CODE);
        keyMaps.put("吉林省",DONGBEI_CODE);
        keyMaps.put("辽宁省",DONGBEI_CODE);

        //华东（上海市、江苏省、浙江省、安徽省、福建省、江西省、山东省、台湾省）
        keyMaps.put("上海市",HUADONG_CODE);
        keyMaps.put("江苏省",HUADONG_CODE);
        keyMaps.put("浙江省",HUADONG_CODE);
        keyMaps.put("安徽省",HUADONG_CODE);
        keyMaps.put("福建省",HUADONG_CODE);
        keyMaps.put("江西省",HUADONG_CODE);
        keyMaps.put("山东省",HUADONG_CODE);
        keyMaps.put("台湾省",HUADONG_CODE);

        //华北（北京市、天津市、山西省、河北省、内蒙古自治区）；
        keyMaps.put("北京市",HUABEI_CODE);
        keyMaps.put("天津市",HUABEI_CODE);
        keyMaps.put("山西省",HUABEI_CODE);
        keyMaps.put("河北省",HUABEI_CODE);
        keyMaps.put("内蒙古自治区",HUABEI_CODE);

        //华中（河南省、湖北省、湖南省）；
        keyMaps.put("河南省",HUAZHONG_CODE);
        keyMaps.put("湖北省",HUAZHONG_CODE);
        keyMaps.put("湖南省",HUAZHONG_CODE);

        //华南（广东省、广西壮族自治区、海南省、香港特别行政区、澳门特别行政区)
        keyMaps.put("广东省",HUANAN_CODE);
        keyMaps.put("广西壮族自治区",HUANAN_CODE);
        keyMaps.put("海南省",HUANAN_CODE);
        keyMaps.put("香港特别行政区",HUANAN_CODE);
        keyMaps.put("澳门特别行政区",HUANAN_CODE);

        //西南（四川省、贵州省、云南省、重庆市、西藏自治区)
        keyMaps.put("四川省",XINAN_CODE);
        keyMaps.put("贵州省",XINAN_CODE);
        keyMaps.put("云南省",XINAN_CODE);
        keyMaps.put("重庆市",XINAN_CODE);
        keyMaps.put("西藏自治区",XINAN_CODE);

        //西北（陕西省、甘肃省、青海省、宁夏回族自治区、新疆维吾尔自治区）
        keyMaps.put("陕西省",XIBEI_CODE);
        keyMaps.put("甘肃省",XIBEI_CODE);
        keyMaps.put("青海省",XIBEI_CODE);
        keyMaps.put("宁夏回族自治区",XIBEI_CODE);
        keyMaps.put("新疆维吾尔自治区",XIBEI_CODE);

        return keyMaps;
    }

    public static String getValue(String key) {
        return getProvinceMap().get(key);
    }
    
    public static List<AreaInfo> getAreaOrder() {
    	List<AreaInfo> areaOrder = new ArrayList<AreaInfo>();
    	areaOrder.add(AreaInfo.DONGBEI);
    	areaOrder.add(AreaInfo.HUABEI);
    	areaOrder.add(AreaInfo.HUADONG);
    	areaOrder.add(AreaInfo.HUANAN);
    	areaOrder.add(AreaInfo.HUAZHONG);
    	areaOrder.add(AreaInfo.XIBEI);
    	areaOrder.add(AreaInfo.XINAN);
        return areaOrder;
    }

}

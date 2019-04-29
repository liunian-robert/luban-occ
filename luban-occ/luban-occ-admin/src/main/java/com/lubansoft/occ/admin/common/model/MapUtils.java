package com.lubansoft.occ.admin.common.model;

import java.util.HashMap;
import java.util.Map;

public class MapUtils {

    public static Map<Integer,String> getScientificLevelMap() {
        Map<Integer,String> keyMaps = new HashMap<Integer,String>();

        keyMaps.put(1,"国家级课题");
        keyMaps.put(2,"省市级课题");
        keyMaps.put(3,"企业级课题");
        return keyMaps;
    }

    public static String getScientificLevelValue(Integer key) {
        return getScientificLevelMap().get(key);
    }
}

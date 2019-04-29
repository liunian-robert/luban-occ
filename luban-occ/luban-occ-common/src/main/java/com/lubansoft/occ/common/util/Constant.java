package com.lubansoft.occ.common.util;

/**
 * <h1>系统常量</h1>
 */
public class Constant {

    /**
     * 采集端session在Redis中的key
     */
    public static final String LUBAN_SUMMARY_REDIS_SESSION_KEY = "lubansummary-session:sessions:";

    /**
     * 采集端失效token在redis中的KEY
     */
    public static final String LUBAN_SUMMARY_EXPIRE_TOKEN_KEY = "lubansummary-token:expire";


    /**
     * 大屏失效token在redis中的KEY
     */
    public static final String LUBAN_GO_EXPIRE_TOKEN_KEY = "lubango-token:expire";

    /**
     * 大屏session在Redis中的key
     */
    public static final String LUBAN_GO_REDIS_SESSION_KEY = "lubango-session:sessions:";

    public static final String SESSION_FILTER_KEY = "expires";

    /**
     * 用户在Redis中的key
     */
    public static final String REDIS_SESSION_USER_KEY = "sessionAttr:loginInfo";

    /**
     * 用户在session中的key
     */
    public static final String SESSION_USER_KEY = "loginInfo";


    public static final String HTTP_JSON_CONTENT_TYPE = "application/json;charset=UTF-8";

    /**
     * token在http header中的key
     */
    public static final String TOKEN_HEADER_NAME = "x-token";

    /**
     * User-Agent在http header中的key
     */
    public static final String USER_AGENT_HEADER_NAME = "User-Agent";

    /**
     * work code在http header中key
     */
    public static final String WORK_CODE_HEADER_NAME = "x-work-code";

    /**
     * token验证超时秒数
     */
    public static final Integer TOKEN_VALIDATION_TIMEOUT = 3;

    /**
     * 用户ID在session中的key
     */
    public static final String USERID_SESSION_KEY = "__USER_ID__";

    /**
     * token在session中的key
     */
    public static final String TOKEN_SESSION_KEY = "X-TOKEN";

    /**
     * 默认分页参数
     */
    public static final Integer DEFAULT_PAGE_NUM = 1;

    public static final Integer DEFAULT_PAGE_SIZE = 4;

    /**
     * @description 企业运营指挥中心【大屏】产品id
     */
    public static final int LUBAN_OCC_WEB_PRODUCT_ID = 88;

    /**
     * @description 企业运营指挥中心【采集端】产品id
     */
    public static final Integer LUBAN_OCC_ADMIN_PRODUCT_ID = 89;

    /**
     * 定时同步数据时,同步人员名称
     */
    public static final String LUBAN_OCC_SYSTEM_ROBOT = "system";


    /**
     * 初始化职称map 中的 专科 key
     */
    public static final int SPECIALTY_KEY = 1;

    /**
     * 初始化职称map 中的 本科 key
     */
    public static final int UNDERGRADUATE_KEY = 2;

    /**
     * 初始化职称map 中的 本科以上 key
     */
    public static final int OVER_UNDERGRADUATE_KEY = 3;

    /**
     * 初始化职称map 中的 其他职称 key
     */
    public static final int OTHER_DIPLOMA_KEY = 4;

    /**
     * 东北地区 location_type
     */
    public static final int LOCATION_TYPE_DONGBEI = 1;

    /**
     * 华北地区 location_type
     */
    public static final int LOCATION_TYPE_HUADONG = 2;

    /**
     * 华北地区 location_type
     */
    public static final int LOCATION_TYPE_HUABEI = 3;

    /**
     * 华中地区 location_type
     */
    public static final int LOCATION_TYPE_HUAZHONG = 4;

    /**
     * 华南地区 location_type
     */
    public static final int LOCATION_TYPE_HUANAN = 5;

    /**
     * 西南地区 location_type
     */
    public static final int LOCATION_TYPE_XINAN = 6;

    /**
     * 西北地区 location_type
     */
    public static final int LOCATION_TYPE_XIBEI = 7;

}

package com.lubansoft.occ.common.disconf.component;

import com.baidu.disconf.client.common.annotations.DisconfFile;
import com.baidu.disconf.client.common.annotations.DisconfFileItem;
import org.springframework.stereotype.Component;


@Component
@DisconfFile(filename = "application-common-config.properties")
public class ApplicationCommonConfig {
    private String appkey;//京东万象获取天气接口appkey

    @DisconfFileItem(associateField = "appkey",name = "appkey")
    public String getAppkey() {
        return appkey;
    }

    public void setAppkey(String appkey) {
        this.appkey = appkey;
    }

    @Override
    public String toString() {
        final StringBuffer sb = new StringBuffer("ApplicationCommonConfig{");
        sb.append("appkey='").append(appkey).append('\'');
        sb.append('}');
        return sb.toString();
    }
}

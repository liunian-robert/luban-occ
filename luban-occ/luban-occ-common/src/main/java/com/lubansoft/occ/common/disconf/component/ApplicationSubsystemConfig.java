package com.lubansoft.occ.common.disconf.component;

import com.baidu.disconf.client.common.annotations.DisconfFile;
import com.baidu.disconf.client.common.annotations.DisconfFileItem;
import org.springframework.stereotype.Component;


@Component
@DisconfFile(filename = "application-subsystem-config.properties")
public class ApplicationSubsystemConfig {
    private String pdsdocUrl;
    private String pdsdocInnerUrl;
    private String feedBackUrl;
    @DisconfFileItem(associateField = "pdsdocUrl",name = "pdsdoc_url")
    public String getPdsdocUrl() {
        return pdsdocUrl;
    }

    public void setPdsdocUrl(String pdsdocUrl) {
        this.pdsdocUrl = pdsdocUrl;
    }
    @DisconfFileItem(associateField = "pdsdocUrl",name = "pdsdoc_inner_url")
    public String getPdsdocInnerUrl() {
        return pdsdocInnerUrl;
    }

    public void setPdsdocInnerUrl(String pdsdocInnerUrl) {
        this.pdsdocInnerUrl = pdsdocInnerUrl;
    }

    @DisconfFileItem(associateField="feedBackUrl",name="FeedBack_url")
    public String getFeedBackUrl() {
        return feedBackUrl;
    }

    public void setFeedBackUrl(String feedBackUrl) {
        this.feedBackUrl = feedBackUrl;
    }

    @Override
    public String toString() {
        final StringBuilder sb = new StringBuilder("ApplicationSubsystemConfig{");
        sb.append("pdsdocUrl='").append(pdsdocUrl).append('\'');
        sb.append(", pdsdocInnerUrl='").append(pdsdocInnerUrl).append('\'');
        sb.append(", feedBackUrl='").append(feedBackUrl).append('\'');
        sb.append('}');
        return sb.toString();
    }
}

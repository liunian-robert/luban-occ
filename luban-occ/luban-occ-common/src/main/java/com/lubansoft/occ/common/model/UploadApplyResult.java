package com.lubansoft.occ.common.model;

public class UploadApplyResult {
    private Boolean isQuick;
    private String uploadUrl;

    public Boolean getQuick() {
        return isQuick;
    }

    public void setQuick(Boolean quick) {
        isQuick = quick;
    }

    public String getUploadUrl() {
        return uploadUrl;
    }

    public void setUploadUrl(String uploadUrl) {
        this.uploadUrl = uploadUrl;
    }

    @Override
    public String toString() {
        final StringBuilder sb = new StringBuilder("UploadApplyResult{");
        sb.append("isQuick=").append(isQuick);
        sb.append(", uploadUrl='").append(uploadUrl).append('\'');
        sb.append('}');
        return sb.toString();
    }
}

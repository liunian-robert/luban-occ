package com.lubansoft.occ.admin.login.controller.model.response;

public class EnterpriseInfo {
    private int epId;
    private String epName;
    private String logo;


    public int getEpId() {
        return epId;
    }

    public void setEpId(int epId) {
        this.epId = epId;
    }

    public String getEpName() {
        return epName;
    }

    public void setEpName(String epName) {
        this.epName = epName;
    }

    public String getLogo() {
        return logo;
    }

    public void setLogo(String logo) {
        this.logo = logo;
    }


    @Override
    public String toString() {
        final StringBuffer sb = new StringBuffer("EnterpriseInfo{");
        sb.append("epId=").append(epId);
        sb.append(", epName='").append(epName).append('\'');
        sb.append(", logo='").append(logo).append('\'');
        sb.append('}');
        return sb.toString();
    }
}

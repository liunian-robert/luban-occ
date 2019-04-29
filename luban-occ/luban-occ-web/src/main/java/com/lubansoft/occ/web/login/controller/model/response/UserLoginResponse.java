package com.lubansoft.occ.web.login.controller.model.response;


public class UserLoginResponse {
    /**
     * 返回对象
     */
    private String userId;
    private String userName;
    private String token;
    private String roleName;
    private String logo;
    private EnterpriseInfo epInfo;

    public UserLoginResponse(String userId, String userName, String token, String logo, EnterpriseInfo epInfo, String roleName) {
        this.userId = userId;
        this.userName = userName;
        this.token = token;
        this.logo = logo;
        this.epInfo = epInfo;
        this.roleName = roleName;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public String getLogo() {
        return logo;
    }

    public void setLogo(String logo) {
        this.logo = logo;
    }

    public EnterpriseInfo getEpInfo() {
        return epInfo;
    }

    public void setEpInfo(EnterpriseInfo epInfo) {
        this.epInfo = epInfo;
    }

    public String getRoleName() {
        return roleName;
    }

    public void setRoleName(String roleName) {
        this.roleName = roleName;
    }

    @Override
    public String toString() {
        final StringBuffer sb = new StringBuffer("UserLoginResponse{");
        sb.append("userId='").append(userId).append('\'');
        sb.append(", userName='").append(userName).append('\'');
        sb.append(", token='").append(token).append('\'');
        sb.append(", roleName='").append(roleName).append('\'');
        sb.append(", logo='").append(logo).append('\'');
        sb.append(", epInfo=").append(epInfo);
        sb.append('}');
        return sb.toString();
    }
}

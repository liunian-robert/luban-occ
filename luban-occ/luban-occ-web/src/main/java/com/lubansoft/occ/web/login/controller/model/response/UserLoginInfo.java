package com.lubansoft.occ.web.login.controller.model.response;

import java.io.Serializable;

public class UserLoginInfo implements Serializable {
    private String userId;
    private String username;
    private String password;
    private String roleId;
    private String roleName;
    private int epid;
    private String epName;
    private String token;
    private int isOffine = 0;


    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getRoleId() {
        return roleId;
    }

    public void setRoleId(String roleId) {
        this.roleId = roleId;
    }

    public String getRoleName() {
        return roleName;
    }

    public void setRoleName(String roleName) {
        this.roleName = roleName;
    }

    public int getEpid() {
        return epid;
    }

    public void setEpid(int epid) {
        this.epid = epid;
    }

    public String getEpName() {
        return epName;
    }

    public void setEpName(String epName) {
        this.epName = epName;
    }

    public int getIsOffine() {
        return isOffine;
    }

    public void setIsOffine(int isOffine) {
        this.isOffine = isOffine;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    @Override
    public String toString() {
        final StringBuilder sb = new StringBuilder("UserLoginInfo{");
        sb.append("userId='").append(userId).append('\'');
        sb.append(", username='").append(username).append('\'');
        sb.append(", password='").append(password).append('\'');
        sb.append(", roleId='").append(roleId).append('\'');
        sb.append(", roleName='").append(roleName).append('\'');
        sb.append(", epid=").append(epid);
        sb.append(", epName='").append(epName).append('\'');
        sb.append(", token='").append(token).append('\'');
        sb.append(", isOffine=").append(isOffine);
        sb.append('}');
        return sb.toString();
    }
}

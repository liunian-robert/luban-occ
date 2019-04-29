package com.lubansoft.occ.web.login.controller.model.request;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

public class UserLoginRequest {

    /**
     * 接受参数对象
     */
    @NotBlank(message = "参数username不能为空")
    private String username;
    @NotBlank(message = "参数password不能为空")
    private String password;
    @NotNull(message = "参数epid不能为空")
    private Integer epid;

    public UserLoginRequest() {
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

    public Integer getEpid() {
        return epid;
    }

    public void setEpid(Integer epid) {
        this.epid = epid;
    }

    @Override
    public String toString() {
        final StringBuffer sb = new StringBuffer("UserLoginRequest{");
        sb.append("username='").append(username).append('\'');
        sb.append(", password='").append(password).append('\'');
        sb.append(", epid='").append(epid).append('\'');
        sb.append('}');
        return sb.toString();
    }
}

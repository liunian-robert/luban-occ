package com.lubansoft.occ.web.login.controller.model.request;

import javax.validation.constraints.NotBlank;

public class UserCompanyRequest {

    /**
     * 接受参数对象
     */
    @NotBlank(message = "参数username不能为空")
    private String username;
    @NotBlank(message = "参数password不能为空")
    private String password;

    public UserCompanyRequest() {
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
}

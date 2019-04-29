package com.lubansoft.occ.web.login.controller.model.response;

public class RoleInfo {
    private String roleId;
    private String roleName;

    public String getRoleId() {
        return roleId;
    }

    public void setRoleId(String roleId) {
        this.roleId = roleId;
    }

    @Override
    public String toString() {
        final StringBuffer sb = new StringBuffer("RoleInfo{");
        sb.append("roleId='").append(roleId).append('\'');
        sb.append(", roleName='").append(roleName).append('\'');
        sb.append('}');
        return sb.toString();
    }
}

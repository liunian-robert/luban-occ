package com.lubansoft.occ.web.login.dao.model;


import com.lubansoft.occ.common.model.TBaseModel;

public class UserDO extends TBaseModel {

	private String userId;
	private String username;
	private String password;
	private String token;


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

	public String getToken() {
		return token;
	}

	public void setToken(String token) {
		this.token = token;
	}
}

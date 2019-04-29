package com.lubansoft.occ.web.login.service.model;


import com.lubansoft.occ.common.model.BaseModel;

public class UserDTO extends BaseModel {
	private static final long serialVersionUID = 6679162293887347871L;

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

	@Override
	public String toString() {
		final StringBuffer sb = new StringBuffer("UserDTO{");
		sb.append("userId='").append(userId).append('\'');
		sb.append(", username='").append(username).append('\'');
		sb.append(", password='").append(password).append('\'');
		sb.append(", token='").append(token).append('\'');
		sb.append('}');
		return sb.toString();
	}
}

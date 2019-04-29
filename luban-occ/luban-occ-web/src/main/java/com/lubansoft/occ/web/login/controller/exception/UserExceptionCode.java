package com.lubansoft.occ.web.login.controller.exception;

import com.lubansoft.occ.common.exception.Code;
import com.lubansoft.occ.common.exception.Desc;
import com.lubansoft.occ.common.exception.IExceptionCode;

public enum UserExceptionCode implements IExceptionCode {

	@Desc("用户名为空")
	@Code(4001)
	NAME_NULL,
	
	@Desc("密码为空")
	@Code(4002)
	PASSWORD_NULL,
	
	@Desc("帐号或密码错误")
	@Code(4003)
	NAME_OR_PASSWOR_ERROR,
	
	@Desc("帐号不存在")
	@Code(4004)
	USER_NOT_FOUNT,

	@Desc("企业不能为空")
	@Code(4005)
	ENTEPPRISE_NULL,

	@Desc("企业不存在")
	@Code(4006)
	ENTEPPRISE_NOT_EXIST,

	@Desc("无项目授权不能登录!")
	@Code(4007)
	DEPT_AUTH_NULL,
	
	@Desc("无客户端权限不能登录!")
	@Code(4008)
	CLIENT_AUTH_NULL,

	@Desc("登录账户异常!")
	@Code(4009)
	USER_LOGIN_ERROR;

}

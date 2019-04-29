package com.lubansoft.occ.admin.common.controller.exception;

import com.lubansoft.occ.common.exception.Code;
import com.lubansoft.occ.common.exception.Desc;
import com.lubansoft.occ.common.exception.IExceptionCode;

public enum SessionExceptionCode implements IExceptionCode {

	@Desc("用户未登录")
	@Code(4001)
	NO_LOGIN;

}

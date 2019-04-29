package com.lubansoft.occ.web.common.controller.exception;

import com.lubansoft.occ.common.exception.Code;
import com.lubansoft.occ.common.exception.Desc;
import com.lubansoft.occ.common.exception.IExceptionCode;

public enum SessionExceptionCode implements IExceptionCode {

	@Desc("用户未登录")
	@Code(4001)
	NO_LOGIN,
	
	@Desc("企业下无子机构,无数据")
	@Code(4002)
	NO_DATA,
	
	@Desc("当前组织节点id为空")
	@Code(4003)
	CURRENT_ORG_ID_NULL,
	
	@Desc("当前组织节点类型为空")
	@Code(4004)
	CURRENT_ORG_TYPE_NULL,
	
	@Desc("当前组织节点类型非法")
	@Code(4005)
	CURRENT_ORG_TYPE_ILLEGAL;

}

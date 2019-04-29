package com.lubansoft.occ.common.exception;

import com.lubansoft.occ.common.exception.Code;
import com.lubansoft.occ.common.exception.Desc;

public enum BaseExceptionCode implements IExceptionCode {
	
	@Desc("未知异常")
	@Code(-1)
	UNKNOWN_EXCEPTION,

	
	@Desc("JSON转换出错!")
	@Code(4001)
	JSON_TRANS_ERROR,

	@Desc("分公司不存在")
	@Code(5001)
	ORG_NOT_FOUND,

	@Desc("项目部不存在")
	@Code(5002)
	DEPT_NOT_FOUND,

	@Desc("无项目部权限")
	@Code(5003)
	DEPT_NOT_AUTH,

	@Desc("无分公司权限")
	@Code(5004)
	ORG_NOT_AUTH, 
	
	@Desc("组织数据未保存")
	@Code(5005)
	ORG_NOT_SAVE;
	
}


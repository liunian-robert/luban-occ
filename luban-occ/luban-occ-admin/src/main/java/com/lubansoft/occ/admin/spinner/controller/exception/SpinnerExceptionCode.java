package com.lubansoft.occ.admin.spinner.controller.exception;

import com.lubansoft.occ.common.exception.Code;
import com.lubansoft.occ.common.exception.Desc;
import com.lubansoft.occ.common.exception.IExceptionCode;

public enum SpinnerExceptionCode implements IExceptionCode {

    @Desc("项目部ID为空")
    @Code(4001)
    DEPT_ID_NULL,

    @Desc("企业ID为空")
    @Code(4002)
    EP_ID_NULL,

    @Desc("数据不存在")
    @Code(4003)
    DATA_NOT_FOUND,

    @Desc("参数异常")
    @Code(4004)
    PARAM_IS_NULL,

    @Desc("分公司ID为空")
    @Code(4005)
    ORG_IS_NULL;


}

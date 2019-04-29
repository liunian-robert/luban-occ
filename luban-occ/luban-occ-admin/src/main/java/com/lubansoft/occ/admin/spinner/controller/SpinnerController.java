package com.lubansoft.occ.admin.spinner.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.lubansoft.occ.admin.common.controller.ResponseEntity;
import com.lubansoft.occ.admin.common.controller.SessionController;
import com.lubansoft.occ.admin.common.interceptor.LoginRequired;
import com.lubansoft.occ.admin.spinner.controller.exception.SpinnerExceptionCode;
import com.lubansoft.occ.admin.spinner.service.SpinnerService;
import com.lubansoft.occ.admin.spinner.service.model.SpinnerDTO;
import com.lubansoft.occ.common.exception.ServiceException;

@RestController
@EnableAutoConfiguration
@RequestMapping("/spinner")
public class SpinnerController extends SessionController {

    @Autowired
    private SpinnerService spinnerService;

    /**
     * @api {GET} /spinner/type 下拉列表接口
     * @apiGroup 下拉列表模块
     * @apiVersion 1.0.0
     * @apiDescription 获取下拉列表数据
     * @apiParam {Integer} type 下拉类型 1:工地评比情况, 2:质量合格情况, 3:学历, 4:职称, 5:采购方式, 6:课题级别
     * @apiParamExample 请求样例:
     * ?type=1
     * @apiSuccess (200) {String} message 信息
     * @apiSuccess (200) {Integer} code 200代表无错误   500代表有错误
     * @apiSuccess (200) {String} status success代表成功   fail代表失败
     * @apiSuccessExample {json} 返回样例:
     * {
     * "code":200,
     * "status":"success",
     * "message":"成功",
     * "data":{
     * "dropDownList":[
     * {
     * "id":1,
     * "value":序号,
     * "type":对应类型(1:工地评比情况, 2:质量合格情况, 3:学历, 4:职称, 5:采购方式, 6:课题级别),
     * "name":"对应名称",
     * "epid":企业id(默认为0),
     * "sort":排序
     * },
     * {
     * "id":2,
     * "value":2,
     * "type":1,
     * "name":"普通工地",
     * "epid":0,
     * "sort":2
     * }
     * ]
     * }
     * }
     * @apiError (500) {String} message 查询下拉列表信息错误
     * @apiError (500) {Integer} code 200代表无错误 500代表有错误
     * @apiError (500) {String} status success代表成功 fail代表失败
     * @apiErrorExample {json} 错误样例:
     * {
     * "code":500,
     * "status":"fail",
     * "message":"获取数据失败！",
     * "data":false
     * }
     */
    //获取工地评比情况下拉列表数据接口 type:1:工地评比情况 2:质量合格情况 3:学历 4:职称 5:采购方式 6:课题级别
    @GetMapping("/type")
    @LoginRequired
    public ResponseEntity<?> getDropDownListByType(HttpServletRequest request,
                                                   HttpServletResponse response,
                                                   @RequestParam("type") Integer type
    ) throws Exception {

        if (type == null) {
            throw new ServiceException(SpinnerExceptionCode.PARAM_IS_NULL);
        }
        List<SpinnerDTO> spinner = spinnerService.getDropDownListByType(type);
        return ResponseEntity.success(spinner);
    }

}

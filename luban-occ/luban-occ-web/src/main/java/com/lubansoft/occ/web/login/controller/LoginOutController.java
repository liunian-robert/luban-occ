package com.lubansoft.occ.web.login.controller;


import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.lang3.StringUtils;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.auth0.jwt.JWT;
import com.lubansoft.occ.common.util.JsonConvertUtils;
import com.lubansoft.occ.web.common.handler.ResponseEntity;

@RestController
@EnableAutoConfiguration
@RequestMapping("/web")
public class LoginOutController {


    /**
     * @api {POST} /web/loginout 退出登录接口
     * @apiGroup 登录模块
     * @apiVersion 1.0.0
     * @apiDescription 用于用户登出
     * @apiSuccess (200) {String} message 信息
     * @apiSuccess (200) {Integer} code 200代表无错误   500代表有错误
     * @apiSuccess (200) {String} status success代表成功   fail代表失败
     * @apiSuccessExample {json} 返回样例:
     *  {
     *      "code":200,
     *      "status":"success",
     *      "message":"成功",
     *      "data":true
     *      }
     * @apiError (500) {String} message 登出错误
     * @apiError (500) {Integer} code 200代表无错误 500代表有错误
     * @apiError (500) {String} status success代表成功 fail代表失败
     * @apiErrorExample {json} 错误样例:
     *  {
     *      "code":500,
     *      "status":"fail",
     *      "message":"登出错误！",
     *       "data":false
     *  }
     * @param request
     * @param response
     * @return
     */
    @PostMapping("/loginout")
    public ResponseEntity<?> loginOut(HttpServletRequest request,
                                      HttpServletResponse response) throws Exception{
        String token = request.getHeader("token");
        if (StringUtils.isEmpty(token)) {
            token = request.getParameter("token");
        }

        if (StringUtils.isEmpty(token)) {
            response.setStatus(HttpStatus.UNAUTHORIZED.value());
            response.setContentType("application/json;chartset=UTF-8");
            response.getWriter().print(JsonConvertUtils.toJson(ResponseEntity.errorToken()));
        }
        request.getSession().invalidate();
        return ResponseEntity.success(Boolean.TRUE);
    }
}

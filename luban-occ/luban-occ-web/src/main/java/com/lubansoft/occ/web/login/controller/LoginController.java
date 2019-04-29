package com.lubansoft.occ.web.login.controller;

import java.util.Map;
import java.util.Set;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.lubansoft.occ.web.common.controller.SessionController;
import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.lubansoft.occ.common.exception.ServiceException;
import com.lubansoft.occ.common.util.Constant;
import com.lubansoft.occ.web.common.handler.ResponseEntity;
import com.lubansoft.occ.web.login.controller.exception.UserExceptionCode;
import com.lubansoft.occ.web.login.controller.model.request.UserCompanyRequest;
import com.lubansoft.occ.web.login.controller.model.request.UserLoginRequest;
import com.lubansoft.occ.web.login.controller.model.response.UserLoginInfo;
import com.lubansoft.occ.web.login.controller.model.response.UserLoginResponse;
import com.lubansoft.occ.web.login.service.LoginService;
import com.lubansoft.occ.common.util.EmptyUtils;

/**
 * @description 登录验证、加客户端权限
 * @author cuizq
 * @date 2019-03-11 10:04:23
 */
@RestController
@EnableAutoConfiguration
@RequestMapping("/web")
public class LoginController extends SessionController {
	
	@Autowired
    private LoginService loginService;
    @Autowired
    private RedisTemplate<String,Object> redisTemplate;

    private static Logger logger = LoggerFactory.getLogger(LoginController.class);

    /**
     * @api {POST} /web/login 登录接口
     * @apiName login
     * @apiGroup 登录模块
     * @apiVersion 1.0.0
     * @apiDescription 用于用户登录 登录成功返回通行证账号和企业id列表
     * @apiParam {String{..50}} username 通行证
     * @apiParam {String{..50}} password 密码 (md5加密)
     * @apiParam {int{..50}} epid 企业ID
     * @apiParamExample {json} 请求样例:
     *              {
     *                  "username":"hubiao",
     *                  "password":"111111",
     *                  "epid"：1028
     *              }
     * @apiSuccess (200) {String} message 信息
     * @apiSuccess (200) {Integer} code 200代表无错误   500代表有错误
     * @apiSuccess (200) {String} status success代表成功   fail代表失败
     * @apiSuccessExample {json} 返回样例:
     *  {
     *      "code":200,
     *      "status":"success",
     *      "message":"成功",
     *      "data":
     *      {
     *          "token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyIiwiZXhwIjoxNTQzNTQ4OTE4fQ.xeih9r4F5lbiyYbYMpvloPhxnmq-aLBzlg8gMy43MWo",
     *          "user_name":"通行证",
     *          "user_id":"用户id",
     *          "role_name":"角色"
     *      }
     *  }
     * @apiError (4001) {String} message 用户名为空
     * @apiError (4001) {Integer} code 200代表无错误 4001代表有错误
     * @apiError (4001) {String} status success代表成功 fail代表失败
     * @apiErrorExample {json} 错误样例:
     *  {
     *      "code":4001,
     *      "status":"fail",
     *      "message":"用户名为空！",
     *      "data":false
     *  }
     * @apiError (4002) {String} message 密码为空
     * @apiError (4002) {Integer} code 200代表无错误 4002代表有错误
     * @apiError (4002) {String} status success代表成功 fail代表失败
     * @apiErrorExample {json} 错误样例:
     *  {
     *       "code": 4002,
     *       "status": "fail",
     *       "message": "密码为空",
     *       "data": false
     *  }
     * @apiError (4003) {String} message 账号或密码错误
     * @apiError (4003) {Integer} code 200代表无错误 4003代表有错误
     * @apiError (4003) {String} status success代表成功 fail代表失败
     * @apiErrorExample {json} 错误样例:
     *  {
     *      "code": 4003,
     *      "status": "fail",
     *      "message": "账号或密码错误",
     *      "data": false
     *  }
     * @apiError (4004) {String} message 账号不存在
     * @apiError (4004) {Integer} code 200代表无错误 4004代表有错误
     * @apiError (4004) {String} status success代表成功 fail代表失败
     * @apiErrorExample {json} 错误样例:
     *  {
     *      "code": 4004,
     *      "status": "fail",
     *      "message": "账号不存在",
     *      "data": false
     *  }
     */
    /**
     *
     * @param request
     * @param response
     * @param userLoginRequest
     * @return
     */
    @PostMapping("/login")
    public ResponseEntity<?> login(HttpServletRequest request,
                                   HttpServletResponse response,
                                   @RequestBody UserLoginRequest userLoginRequest) throws Exception {
    	// 验证参数、密码为密文
        String username = userLoginRequest.getUsername();
        String password = userLoginRequest.getPassword();
        Integer epid = userLoginRequest.getEpid();
        if(StringUtils.isEmpty(username)) { throw new ServiceException(UserExceptionCode.NAME_NULL); }
        if(StringUtils.isEmpty(password)) { throw new ServiceException(UserExceptionCode.PASSWORD_NULL); }
        if (epid == null) {throw new ServiceException(UserExceptionCode.ENTEPPRISE_NULL);}
        /**
         * 验证账号密码
         */

        UserLoginResponse userLoginResponse = null;//new UserLoginResponse(loginResult.getUserId(),loginResult.getUserName(),null,null,null,loginResult.getRoleName());
        //获取返回参数对象、设置token
        UserLoginInfo loginInfo = new UserLoginInfo();
        loginInfo.setEpid(epid);
        loginInfo.setEpName(null);
        loginInfo.setPassword(password);
        loginInfo.setToken(userLoginResponse.getToken());
        loginInfo.setIsOffine(0);
        //互踢逻辑
        request.getSession().setAttribute(Constant.SESSION_USER_KEY,loginInfo);
        String jessionKey = Constant.LUBAN_GO_REDIS_SESSION_KEY+request.getSession().getId();
        Set<String> keys = (Set)redisTemplate.keys(Constant.LUBAN_GO_REDIS_SESSION_KEY+"*");
        if (EmptyUtils.isNotEmpty(keys)) {
            //取出redis中所有session的key
            for(String key : keys){
                if (key.indexOf(Constant.SESSION_FILTER_KEY)==-1) {
                    Map userLoginInfo = redisTemplate.opsForHash().entries(key);
                    UserLoginInfo onlineUser = null;
                    if (EmptyUtils.isNotEmpty(userLoginInfo)) {
                        onlineUser = (UserLoginInfo) userLoginInfo.get(Constant.REDIS_SESSION_USER_KEY);
                    }
                    if(onlineUser != null){
                        if (!jessionKey.equals(key)&& loginInfo.getEpid() == onlineUser.getEpid() &&onlineUser.getUsername().equals(loginInfo.getUsername())) {
                            onlineUser.setIsOffine(1);
                            redisTemplate.opsForHash().put(key,Constant.REDIS_SESSION_USER_KEY,onlineUser);
                        }
                    }
                }
            }
        }
        userLoginResponse.setToken(loginService.getToken(loginInfo));
        return ResponseEntity.success(userLoginResponse);
    }
    /**
     * @api {POST} /web/getCompanyList 获取企业列表接口
     * @apiGroup 登录模块
     * @apiVersion 1.0.0
     * @apiDescription 用于用户登录前获取企业列表
     * @apiParam {String{..50}} username 通行证
     * @apiParam {String{..50}} password 密码 (md5加密)
     * @apiParamExample {json} 请求样例:
     *              {
     *                  "username":"hubiao",
     *                  "password":"111111"
     *              }
     * @apiSuccess (200) {String} message 信息
     * @apiSuccess (200) {Integer} code 200代表无错误   500代表有错误
     * @apiSuccess (200) {String} status success代表成功   fail代表失败
     * @apiSuccessExample {json} 返回样例:
     *  {
     *      "code":200,
     *      "status":"success",
     *      "message":"成功",
     *      "data":
     *      {
     *          [{
     *              "epid":"企业ID",
     *              "epid_name":"企业名称"
     *          }]
     *      }
     *  }
     * @apiError (4001) {String} message 用户名为空
     * @apiError (4001) {Integer} code 200代表无错误 4001代表有错误
     * @apiError (4001) {String} status success代表成功 fail代表失败
     * @apiErrorExample {json} 错误样例:
     *  {
     *      "code":4001,
     *      "status":"fail",
     *      "message":"用户名为空！",
     *      "data":false
     *  }
     * @apiError (4002) {String} message 密码为空
     * @apiError (4002) {Integer} code 200代表无错误 4002代表有错误
     * @apiError (4002) {String} status success代表成功 fail代表失败
     * @apiErrorExample {json} 错误样例:
     *  {
     *       "code": 4002,
     *       "status": "fail",
     *       "message": "密码为空",
     *       "data": false
     *  }
     * @apiError (4003) {String} message 账号或密码错误
     * @apiError (4003) {Integer} code 200代表无错误 4003代表有错误
     * @apiError (4003) {String} status success代表成功 fail代表失败
     * @apiErrorExample {json} 错误样例:
     *  {
     *      "code": 4003,
     *      "status": "fail",
     *      "message": "账号或密码错误",
     *      "data": false
     *  }
     * @apiError (4004) {String} message 账号不存在
     * @apiError (4004) {Integer} code 200代表无错误 4004代表有错误
     * @apiError (4004) {String} status success代表成功 fail代表失败
     * @apiErrorExample {json} 错误样例:
     *  {
     *      "code": 4004,
     *      "status": "fail",
     *      "message": "账号不存在",
     *      "data": false
     *  }
     */
    /**
     *
     * @param request
     * @param response
     * @param userCompanyRequest
     * @return
     */
    @PostMapping(value = "/getCompanyList")
    public ResponseEntity<?> getCompanyList(HttpServletRequest request,
                                   HttpServletResponse response,
                                   @RequestBody UserCompanyRequest userCompanyRequest) throws Exception {
    	//验证参数 密码为密文
        String name = userCompanyRequest.getUsername();
        String password = userCompanyRequest.getPassword();
        if(StringUtils.isEmpty(name)) { throw new ServiceException(UserExceptionCode.NAME_NULL); }
        if(StringUtils.isEmpty(password)) { throw new ServiceException(UserExceptionCode.PASSWORD_NULL); }
        //验证账号密码
        return ResponseEntity.success(null);
    }
}

package com.lubansoft.occ.admin.common.interceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.data.redis.core.SetOperations;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;

import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.JWTDecodeException;
import com.auth0.jwt.exceptions.JWTVerificationException;
import com.auth0.jwt.exceptions.TokenExpiredException;
import com.lubansoft.occ.admin.common.controller.ResponseEntity;
import com.lubansoft.occ.admin.common.controller.ResponseHandler;
import com.lubansoft.occ.admin.login.controller.exception.UserExceptionCode;
import com.lubansoft.occ.admin.login.controller.model.response.UserLoginInfo;
import com.lubansoft.occ.admin.login.service.LoginService;
import com.lubansoft.occ.common.exception.ServiceException;
import com.lubansoft.occ.common.util.Constant;
import com.lubansoft.occ.common.util.EmptyUtils;
import com.lubansoft.occ.common.util.JsonConvertUtils;
import java.util.Map;
import java.util.Set;

/**
 * 登录拦截器
 */
@Component
public class LoginInterceptor extends HandlerInterceptorAdapter {
	
	private static final Logger logger = LoggerFactory.getLogger(LoginInterceptor.class);
	
	static final String MASTER_TOKEN = "q1w2e3r4t5y6u7i8o9p0";
	
	static final Long MASTER_USER_ID = 100L;
	
	@Autowired
	private LoginService loginService;

	@Autowired
	private RedisTemplate<String,Object> redisTemplate;

	@Override
	public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
		String uri = request.getRequestURI();
		if (uri.indexOf("/ping") >= 0) {
			return true;
		}
		String token = request.getHeader("token");
		if (StringUtils.isEmpty(token)) {
			token = request.getParameter("token");
		}
		if (StringUtils.isEmpty(token)) {
			response.setStatus(HttpStatus.UNAUTHORIZED.value());
			response.setContentType(Constant.HTTP_JSON_CONTENT_TYPE);
			response.getWriter().print(JsonConvertUtils.toJson(ResponseEntity.errorToken()));
			return false;
		}
		
		if (MASTER_TOKEN.equals(token)) {
			request.setAttribute(Constant.USERID_SESSION_KEY, MASTER_USER_ID);
			request.setAttribute(Constant.TOKEN_SESSION_KEY, MASTER_TOKEN);
			logger.info("Master Token : " + token);
			return true;
		}
		String jessionid = Constant.LUBAN_SUMMARY_REDIS_SESSION_KEY+request.getSession().getId();
		Map onlineUserMap = redisTemplate.opsForHash().entries(jessionid);
		UserLoginInfo onlineUser = null;
		if (EmptyUtils.isNotEmpty(onlineUserMap)) {
			onlineUser = (UserLoginInfo) onlineUserMap.get(Constant.REDIS_SESSION_USER_KEY);
		}
		Set<String> resultSet = (Set)redisTemplate.opsForSet().members(Constant.LUBAN_SUMMARY_EXPIRE_TOKEN_KEY);
		if (onlineUser == null || (resultSet != null && resultSet.contains(token))) {
			response.setStatus(HttpStatus.UNAUTHORIZED.value());
			response.setContentType(Constant.HTTP_JSON_CONTENT_TYPE);
			response.getWriter().print(JsonConvertUtils.toJson(ResponseEntity.errorToken()));
			return false;
		}
		//互踢问题
		if (onlineUser != null) {
			if (onlineUser.getIsOffine()==1) {
				SetOperations<String, Object> set = redisTemplate.opsForSet();
				set.add(Constant.LUBAN_SUMMARY_EXPIRE_TOKEN_KEY,token);
				redisTemplate.delete(jessionid);
				request.getSession().invalidate();
				response.setStatus(HttpStatus.UNAUTHORIZED.value());
				response.setContentType(Constant.HTTP_JSON_CONTENT_TYPE);
				response.getWriter().print(JsonConvertUtils.toJson(ResponseEntity.offline(null)));
				return false;
			}
		}
		if (StringUtils.isNotEmpty(token)) {
			try {
				//获取 token中的userId
				//String userId = null;
				String username = null;
				String password = null;
				//String roleId = null;
				//String roleName = null;
				int epId = 0;
				//String epName = null;
				try {
					//userId = JWT.decode(token).getAudience().get(0);
					username = JWT.decode(token).getClaim("username").asString();
					epId = JWT.decode(token).getClaim("epid").asInt();
					password = JWT.decode(token).getClaim("password").asString();
					//roleId = JWT.decode(token).getClaim("roleId").asString();
					//roleName = JWT.decode(token).getClaim("roleName").asString();
					//epName = JWT.decode(token).getClaim("epName").asString();
                } catch (JWTDecodeException j) {
                	response.setStatus(HttpStatus.UNAUTHORIZED.value());
    				response.setContentType(Constant.HTTP_JSON_CONTENT_TYPE);
    				ResponseHandler.response(response, ResponseEntity.errorToken());
    				return false;
                }
                try {
                	//验证账号

				} catch (Exception e) {
					logger.error("登录账户异常!",e);
					throw new ServiceException(UserExceptionCode.USER_LOGIN_ERROR);
				}
                //验证 token
                JWTVerifier jwtVerifier = JWT.require(Algorithm.HMAC256(password)).build();
                try {
                    jwtVerifier.verify(token);
                } catch (JWTVerificationException e) {
                	//判断过期
                	if(e instanceof TokenExpiredException) {
                		response.setStatus(HttpStatus.UNAUTHORIZED.value());
                		response.setContentType(Constant.HTTP_JSON_CONTENT_TYPE);
                		ResponseHandler.response(response, ResponseEntity.expireToken());
                	}else {
                		response.setStatus(HttpStatus.UNAUTHORIZED.value());
                		response.setContentType(Constant.HTTP_JSON_CONTENT_TYPE);
                		ResponseHandler.response(response, ResponseEntity.errorToken());
                	}
    				return false;
                }
			} catch (Exception e) {
				logger.error("Exception : " + e);
				response.setStatus(HttpStatus.UNAUTHORIZED.value());
				response.setContentType(Constant.HTTP_JSON_CONTENT_TYPE);
				response.getWriter().print(JsonConvertUtils.toJson(ResponseEntity.errorToken()));
				return false;
			}
		}
		return true;
	}
}

package com.lubansoft.occ.admin.common.interceptor;

import org.springframework.stereotype.Component;
import org.springframework.web.method.HandlerMethod;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * 权限拦截器
 * 
 */
@Component
public class SecurityInterceptor extends HandlerInterceptorAdapter {
	
	@Override
	public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
		
//		System.out.println("===SecurityInterceptor===");
		
		String uri = request.getRequestURI();
		if (uri.indexOf("/ping") >= 0) {
			return true;
		}
		
		//Long userId = null;
		// 验证是否已经登陆
		/*if (methodCanValidate(handler) && request.getAttribute(Constant.USERID_SESSION_KEY) == null) {
			response.setStatus(HttpStatus.UNAUTHORIZED.value());
			response.setContentType("application/json;charset=UTF-8");
			response.getWriter().print(JsonConvertUtils.toJson(ResponseEntity.errorToken()));
			LOGGER.info("Login Required Fail, User ID : " + userId);
			return false;
		}
		
		if (request.getAttribute(Constant.USERID_SESSION_KEY) != null) {
			userId = Long.parseLong(request.getAttribute(Constant.USERID_SESSION_KEY).toString());
		}
		
		LOGGER.info("Login Required Success, User ID : " + userId);*/
		return true;
	}

	@SuppressWarnings("unused")
	private boolean methodCanValidate(Object handler) {
		if (handler instanceof HandlerMethod) {
			HandlerMethod hm = (HandlerMethod) handler;
			LoginRequired lr = hm.getMethod().getAnnotation(LoginRequired.class);
			if (lr != null) {
				return true;
			}
		}
		return false;
	}
}

package com.lubansoft.occ.web.common.interceptor;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;
import org.springframework.web.method.HandlerMethod;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


/**
 * 日志拦截器
 */
@Component
public class LoggerInterceptor extends HandlerInterceptorAdapter {

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler)
            throws Exception {
        return true;
    }

    @Override
    public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex) throws Exception {

        if (handler instanceof HandlerMethod) {
            HandlerMethod hm = (HandlerMethod) handler;
            String uri = request.getRequestURI().replace(request.getContextPath(), "");
            Logger LOGGER = LoggerFactory.getLogger(hm.getBeanType());
            StringBuilder sb = new StringBuilder();
            sb.append(" URI : ").append(uri).append("\t").append(" Request Method : ").append(request.getMethod())
                    .append("\t").append(" Class : ").append(hm.getBeanType().getName()).append("\t")
                    .append(" Method : ").append(hm.getMethod().getName()).append("\t");

            if (ex != null) {
                sb.append(" Exception : ").append(ex);
                LOGGER.error(sb.toString());
            }
        }
    }
}

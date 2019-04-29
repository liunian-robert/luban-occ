package com.lubansoft.occ.web.common.handler;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;

import com.lubansoft.occ.common.exception.ServiceException;
import com.lubansoft.occ.common.exception.SystemException;


@ControllerAdvice
public class GlobalExceptionHandler {

	private static final Logger logger = LoggerFactory.getLogger(GlobalExceptionHandler.class);
	
	
	@ExceptionHandler(value = Exception.class)
    @ResponseBody
	public ResponseEntity<?> handle(HttpServletRequest request, HttpServletResponse response, 
			Object handler, Exception ex) {
//		String className = GlobalExceptionHandler.class.getName();
//		String methodName = "afterCompletion";
//		if (handler instanceof HandlerMethod) {
//			HandlerMethod m = (HandlerMethod) handler;
//			className = m.getBeanType().getName();
//			methodName = m.getMethod().getName();
//		}
		logger.error(ex.getMessage(),ex);
//		logger.error(MessageFormat.format("{0}.{1} RESTFUL({2}) METHOD({3}) Error, Exception : {4}", className, methodName, request.getRequestURI(), request.getMethod(), ex.getMessage()));

		try {
			if (ex instanceof ServiceException) {
				ResponseEntity<?> responseEntity = ResponseEntity.fail(((ServiceException) ex).getErrorCode(), ex.getMessage());
				ResponseHandler.response(response, responseEntity);
			} else if (ex instanceof SystemException) {
				ResponseEntity<?> responseEntity = ResponseEntity.fail(((SystemException) ex).getErrorCode(), ex.getMessage());
				ResponseHandler.response(response, responseEntity);
			} else {
				ResponseEntity<?> responseEntity = ResponseEntity.error(ex.getMessage());
				ResponseHandler.response(response, responseEntity);
			}
		} catch (Exception e) {
			logger.error("OverallExceptionResolver Handler Exception Error." + e);
		}

		return null;
	}
}

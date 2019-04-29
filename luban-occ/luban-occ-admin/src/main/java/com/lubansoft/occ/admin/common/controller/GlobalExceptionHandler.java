package com.lubansoft.occ.admin.common.controller;

import java.io.IOException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.method.HandlerMethod;

import com.lubansoft.occ.common.exception.ServiceException;
import com.lubansoft.occ.common.exception.SystemException;


@ControllerAdvice
public class GlobalExceptionHandler {

	private static final Logger logger = LoggerFactory.getLogger(GlobalExceptionHandler.class);
	
	
	@ExceptionHandler(value = Exception.class)
    @ResponseBody
	public ResponseEntity<?> handle(HttpServletRequest request, HttpServletResponse response,
                                    Object handler, Exception ex) {
		String className = GlobalExceptionHandler.class.getName();
		String methodName = "afterCompletion";
		if (handler instanceof HandlerMethod) {
			HandlerMethod m = (HandlerMethod) handler;
			className = m.getBeanType().getName();
			methodName = m.getMethod().getName();
		}
		ex.printStackTrace();
		//logger.error(MessageFormat.format("{0}.{1} RESTFUL({2}) METHOD({3}) Error, Exception : {4}", className, methodName, request.getRequestURI(), request.getMethod(), ex.getMessage()));
		try {
			if (ex instanceof ServiceException) {
				logger.error(ex.getMessage(),ex);
				ResponseEntity<?> responseEntity = ResponseEntity.fail(((ServiceException) ex).getErrorCode(), ex.getMessage());
				ResponseHandler.response(response, responseEntity);
			} else if (ex instanceof SystemException) {
				logger.error(ex.getMessage(),ex);
				ResponseEntity<?> responseEntity = ResponseEntity.fail(((SystemException) ex).getErrorCode(), ex.getMessage());
				ResponseHandler.response(response, responseEntity);
			} else {
				logger.error(ex.getMessage(),ex);
				ResponseEntity<?> responseEntity = ResponseEntity.error(ex.getMessage());
				ResponseHandler.response(response, responseEntity);
			}
		} catch (Exception e) {
			logger.error("OverallExceptionResolver Handler Exception Error." + e);
		}

		return null;
	}

	@ExceptionHandler(MethodArgumentNotValidException.class)
	@ResponseBody
	public ResponseEntity<?> bindException(HttpServletRequest request, HttpServletResponse response,MethodArgumentNotValidException e) throws IOException {
		BindingResult bindingResult = e.getBindingResult();

		String errorMesssage = "参数异常:";

		for (FieldError fieldError : bindingResult.getFieldErrors()) {
			errorMesssage += fieldError.getDefaultMessage();
			break;
		}
		try {
			ResponseEntity<?> responseEntity = ResponseEntity.errorParameter(errorMesssage);
			ResponseHandler.response(response, responseEntity);
		} catch (Exception ex) {
			logger.error("OverallExceptionResolver Handler Exception Error." + ex);
		}
		return null;

	}
}

package com.lubansoft.occ.admin.common.controller;

import org.springframework.http.HttpStatus;

import javax.servlet.http.HttpServletResponse;

public class ResponseEntity<E> {

	private Integer code;
	private String status;
	private String message;
	private E data;

	public ResponseEntity(Integer code, String status, String message, E data) {
		super();
		this.code = code;
		this.status = status;
		this.message = message;
		this.data = data;
	}

	public Integer getCode() {
		return code;
	}

	public void setCode(Integer code) {
		this.code = code;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public E getData() {
		return data;
	}

	public void setData(E data) {
		this.data = data;
	}

	public static <E> ResponseEntity<E> success() {
		return new ResponseEntity<>(200, "success", "成功", null);
	}

	public static <E> ResponseEntity<E> success(E data) {
		return new ResponseEntity<>(200, "success", "成功",  data);
	}

	public static <E> ResponseEntity<E> success(int code, E data) {
		return new ResponseEntity<>(code, "success", "成功",  data);
	}

	public static <E> ResponseEntity<E> success(int code) {
		return new ResponseEntity<>(code, "success", "成功",  null);
	}
	
	public static <E> ResponseEntity<E> success(String msg) {
		return new ResponseEntity<>(200, "success", msg, null);
	}

	public static <E> ResponseEntity<E> fail(int code, String msg, E data) {
		return new ResponseEntity<>(code, "fail", msg, data);
	}

	public static <E> ResponseEntity<E> fail(int code, String msg) {
		return new ResponseEntity<>(code, "fail", msg, null);
	}
	
	public static <E> ResponseEntity<E> fail(int code, String desc, String msg) {
		return new ResponseEntity<>(code, desc, msg, null);
	}

	public static <E> ResponseEntity<E> fail(E data) {
		return new ResponseEntity<>(500, "fail", "系统正的维护,请稍后再试", data);
	}

	public static <E> ResponseEntity<E> fail(int code, String msg, HttpServletResponse response) {
		response.setStatus(HttpStatus.BAD_REQUEST.value());
		return new ResponseEntity<>(code, "失败", msg, null);
	}

	public static <E> ResponseEntity<E> errorToken() {
		return new ResponseEntity<>(401, "fail", "error token", null);
	}

	public static <E> ResponseEntity<E> offline(E data) {
		return new ResponseEntity<>(101, "fail", "您的账号已经下线!", data);
	}

	public static <E> ResponseEntity<E> errorCarrier() {
		return new ResponseEntity<>(403, "fail", "error carrier", null);
	}

	public static <E> ResponseEntity<E> error(E data) {
		return new ResponseEntity<>(500, "fail", "系统正的维护,请稍后再试", data);
	}

	public static <E> ResponseEntity<E> error(HttpServletResponse response) {
		response.setStatus(HttpStatus.INTERNAL_SERVER_ERROR.value());
		return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR.value(), "失败", "系统正的维护,请稍后再试", null);
	}

	public static <E> ResponseEntity<E> error(String msg, E data) {
		return new ResponseEntity<>(500, "fail", msg, data);
	}
	
	public static <E> ResponseEntity<E> expireToken() {
		return new ResponseEntity<>(401, "fail", "用户登录信息过期，请重新登录", null);
	}

	public static <E> ResponseEntity<E> errorParameter(String message) {
		return new ResponseEntity<>(400, "fail", message, null);
	}
	
}

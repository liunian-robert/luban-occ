package com.lubansoft.occ.common.imageshot.exception;

/**
 * 文件或流无法打开
 * @author eguid
 *
 */
public class FileNotOpenException extends RuntimeException{
	
	public FileNotOpenException(String message) {
		super(message);
	}
	
	private static final long serialVersionUID = 1L;
}

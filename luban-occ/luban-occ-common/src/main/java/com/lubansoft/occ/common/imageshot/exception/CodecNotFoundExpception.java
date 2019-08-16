package com.lubansoft.occ.common.imageshot.exception;

/**
 * 没有找到对应的编解码器
 * @author eguid
 *
 */
public class CodecNotFoundExpception extends RuntimeException{

	private static final long serialVersionUID = 1L;

	public CodecNotFoundExpception(String message) {
		super(message);
	}
	
}

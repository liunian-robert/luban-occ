package com.lubansoft.occ.common.util;


import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class CustomLogger {
	
	private static final Logger log = LoggerFactory.getLogger(CustomLogger.class);
	
	public static Logger getLog() {
		return log;
	}
}

package com.lubansoft.occ.common.util;

import java.util.Collection;
import java.util.Random;
import java.util.UUID;

public class StringUtil {
	
	public static boolean isEmpty(String... strs) {
		if (strs == null || strs.length == 0) {
			return true;
		}
		for (String str : strs) {
			if (str == null || str.length() == 0) {
				return true;
			}
		}
		return false;
	}

	public static boolean isNotEmpty(String... strs) {
		if (strs == null || strs.length == 0) {
			return false;
		}
		for (String str : strs) {
			if (str == null || str.length() == 0) {
				return false;
			}
		}
		return true;
	}

	public static String fillSearchParam(String str) {
		return "'%"+str+"%'";
	}
	public static String convertMobile(String mobile) {
		if (isEmpty(mobile) || mobile.length() != 11) {
			return mobile;
		}
		return mobile.substring(0, 3) + "****" + mobile.substring(7);
	}

	/**
	 * 获取32位UUID码
	 * 
	 * @param decDeshs
	 *            true：去除横杠，false：不去除，默认为true
	 * @return
	 */
	public static String getUUID(boolean... decDeshs) {
		boolean decDesh = (null == decDeshs || 1 > decDeshs.length) ? true
				: decDeshs[0];
		String uuid = UUID.randomUUID().toString();
		if (decDesh)
			uuid = uuid.replaceAll("-", "");
		return uuid;
	}

	/**
	 * 生成随即字符串
	 * @param length 指定长度
	 * @param type 类型 0:数字 1：字母 2：数字+字母
	 * @return
	 */
	public static String randomString(int length, int type) {
        if (length < 1) 
            return null;
        
        Random randGen = new Random();
        char[] numbersAndLetters = null;
        
        switch(type){
	        case 0 : numbersAndLetters = ("0123456789").toCharArray();
	        		break;
	        case 1 : numbersAndLetters = ("abcdefghijklmnopqrstuvwxyz"
	        		+  "ABCDEFGHIJKLMNOPQRSTUVWXYZ").toCharArray();
	        		break;
	        case 2 : numbersAndLetters = ("0123456789abcdefghijklmnopqrstuvwxyz" +
	        		"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ").toCharArray();
	        		break;
	        default: numbersAndLetters = ("0123456789abcdefghijklmnopqrstuvwxyz" +
	        		"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ").toCharArray();
	        		break;
        }
        
        char[] randBuffer = new char[length];
        for (int i = 0; i < randBuffer.length; i++) {
            randBuffer[i] = numbersAndLetters[randGen.nextInt(numbersAndLetters.length)];
        }
        return new String(randBuffer);
	}

	/**
	 * 连接字符串
	 * @param list 集合
	 * @return
	 */
	public static String join(Collection<?> list){
		return join(list,",");
	}

	/**
	 * 连接字符串
	 * @param list 集合
	 * @return
	 */
	public static String join(Collection<?> list, String separtor){
		if(list == null){
			return null;
		}
		if(list.isEmpty()){
			return "";
		}
		StringBuffer out = new StringBuffer();
		boolean first = true;

		for(Object obj : list){
			if(first){
				first = false;
			}else{
				out.append(separtor);
			}
			out.append(obj);
		}
		return out.toString();
	}

	/**
	 * 连接字符串
	 * @param list 集合
	 * @return
	 */
	public static String joinSqlStr(Collection<?> list){
		String separtor = ",";
		if(list == null){
			return null;
		}
		if(list.isEmpty()){
			return "";
		}
		StringBuffer out = new StringBuffer();
		boolean first = true;

		for(Object obj : list){
			if(first){
				first = false;
			}else{
				out.append(separtor);
			}
			out.append("'").append(obj).append("'");
		}
		return out.toString();
	}
}

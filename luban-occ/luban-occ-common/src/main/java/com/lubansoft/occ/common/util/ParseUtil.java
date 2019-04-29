package com.lubansoft.occ.common.util;

import org.apache.log4j.Logger;

import com.lubansoft.occ.common.exception.SystemException;

import java.beans.BeanInfo;
import java.beans.Introspector;
import java.beans.PropertyDescriptor;
import java.math.BigDecimal;
import java.text.DecimalFormat;
import java.text.Format;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.*;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class ParseUtil {
	
	private static Logger log = Logger.getLogger(ParseUtil.class);
	
	public static final String DOT_YYYY_MM_DD = "yyyy.MM.dd";
	private static Pattern linePattern = Pattern.compile("_(\\w)");  
	private static Pattern humpPattern = Pattern.compile("[A-Z]");  
	
	/**
	 * 时间转字符串
	 * @param date
	 * @param format
	 * @return
	 */
	public static String convertDate2Str(Date date, String format){
		if(null == date){
			log.warn("date为空！");
			return null;
		}
		if(null == format){
			format = "yyyy-MM-dd HH:mm:ss";
		}
		SimpleDateFormat simpleDateFormat = new SimpleDateFormat(format);
		
		return simpleDateFormat.format(date); 
	}
	
	/**
	 * 字符串转时间
	 * @param str
	 * @param format
	 * @return
	 */
	public static Date convertStr2Date(String str, String format){
		if(null == str || "".equals(str.trim())){
			log.warn("date为空！");
			return null;
		}
		if(null == format){
			format = "yyyy-MM-dd HH:mm:ss";
		}
		SimpleDateFormat simpleDateFormat = new SimpleDateFormat(format);
		
		try {
			return simpleDateFormat.parse(str);
		} catch (ParseException e) {
			log.warn("转换失败：" + str);
			return null;
		} 
	}
	
	/**
	 * unix 时间 转换 date
	 * @param millis
	 * @param flag 处理方式  <=0:毫秒清空 <=1:秒/毫秒清空 <=2:分钟/秒/毫秒清空 <=3:小时/分钟/秒/毫秒清空
	 * @return
	 */
	public static Date convertUnixTime2Date(Long millis, Integer flag){
		if(null == millis){
			log.warn("time为空！");
			return null;
		}

		Calendar calendar = Calendar.getInstance();
		calendar.setTimeInMillis(millis);

		if(null != flag){
			if(flag >= 3){
				calendar.set(Calendar.HOUR_OF_DAY, 0);
			}
			if(flag >= 2){
				calendar.set(Calendar.MINUTE, 0);
			}
			if(flag >= 1){
				calendar.set(Calendar.SECOND, 0);  
			}
			if(flag >= 0){
				calendar.set(Calendar.MILLISECOND, 0);  
			}
		}
		return calendar.getTime();
		
	}
	
	public static Date getStartTime(Long millis) {
		if(null == millis){
			log.warn("time为空！");
			return null;
		}
		
		Calendar calendar = Calendar.getInstance();
		calendar.set(Calendar.HOUR_OF_DAY, 0);
		calendar.set(Calendar.MINUTE, 0);
		calendar.set(Calendar.SECOND, 0);
		calendar.set(Calendar.MILLISECOND, 0);
		return calendar.getTime();
	}
	
	public static Date getEndTime(Long millis){
		if(null == millis){
			log.warn("time为空！");
			return null;
		}

		Calendar calendar = Calendar.getInstance();
		calendar.setTimeInMillis(millis);
		calendar.set(Calendar.HOUR_OF_DAY, 23);
		calendar.set(Calendar.MINUTE, 59);
		calendar.set(Calendar.SECOND, 59);  
		calendar.set(Calendar.MILLISECOND, 0);  
		
		return calendar.getTime();
		
	}
	
	/**
	 * 时间转时间戳
	 * @param date
	 * @return
	 */
	public static Long converterDate2UnixTime(Date date){
		if(null == date){
			log.warn("time为空！");
			return null;
		}
		
		return date.getTime();
	}
	
	/**
	 * 获取两个日期相隔天数
	 * @param startDate
	 * @param endDate
	 * @return
	 */
	public static Integer getDateSpace(Date startDate, Date endDate){
		if(null == startDate || null == endDate){
			log.warn("开始时间或结束时间为空！");
			return null;
		}
		
		Calendar calendarS = Calendar.getInstance();
		Calendar calendarE = Calendar.getInstance();
		calendarS.setTime(startDate);
		calendarE.setTime(endDate);
		
		//设置时间为0时   
		calendarS.set(Calendar.HOUR_OF_DAY, 0);   
		calendarS.set(Calendar.MINUTE, 0);   
		calendarS.set(Calendar.SECOND, 0);   
		calendarE.set(Calendar.HOUR_OF_DAY, 0);   
		calendarE.set(Calendar.MINUTE, 0);   
		calendarE.set(Calendar.SECOND, 0);  
		
		//得到两个日期相差的天数   
		Long millisS = calendarS.getTime().getTime();
		Long millisE = calendarE.getTime().getTime();
		
		Integer days = (int) ((millisE - millisS) / (1000 * 60 * 60 * 24));
        
		return days;
		
	}
	
	/**
     * 获取两个日期相隔的月数
     * @param date1 <String>
     * @param date2 <String>
     * @return int
     * @throws ParseException
     */
    public static int getMonthSpace(Date date1, Date date2){
        int result = 0;
        Calendar c1 = Calendar.getInstance();
        Calendar c2 = Calendar.getInstance();
        c1.setTime(date1);
        int year1 = c1.get(Calendar.YEAR);
        int month1 = c1.get(Calendar.MONTH);
        c2.setTime(date2);
        int year2 = c2.get(Calendar.YEAR);
        int month2 = c2.get(Calendar.MONTH);
        result = 12*(year2 - year1) + month2 - month1;
        return result;
    }
	
	/**
	 * 
	 * @param date
	 * @param 精确到 flag 1:秒 2：分钟 3：小时 4：天
	 * @return
	 */
	public static Date getDateFormat(Date date, Integer flag) {
		if(null == date){
			return null;
		}

		Calendar calendar = Calendar.getInstance();
		calendar.setTime(date);
		
		if(1 <= flag){
			calendar.set(Calendar.MILLISECOND, 0);
		}
		if(2 <= flag){
			calendar.set(Calendar.SECOND, 0);
		}
		if(3 <= flag){
			calendar.set(Calendar.MINUTE, 0);
		}
		if(4 <= flag){
			calendar.set(Calendar.HOUR_OF_DAY, 0);
		}
		
		return calendar.getTime();
	}
	
	/**
	 * 获取指定日期往后推nDays天的日期
	 * @param date
	 * @param nDays
	 * @return
	 */
	public static Date afterDay(Date date, Integer nDays){
		if(null == date){
			log.warn("时间为空！");
			return null;
		}
		
		Calendar calendar = Calendar.getInstance();
		calendar.setTime(date);
		calendar.add(Calendar.DATE, nDays);
		
		return calendar.getTime();
	}
	
	/**
	 * 获取当前日期的属性 0：年 1：月 2：当前天数 3：本月最小天数 4：本月最大天数 5：获取当前小时 6：获取当前分钟 7：获取当前秒
	 * @param type
	 * @return
	 */
	public static int getCurrentDateAttr(int type){
		//获取东八区时间
		Calendar calendar = Calendar.getInstance(TimeZone.getTimeZone("GMT+08:00"));
		int val = 0;
		switch (type) {
		case 0: val = calendar.get(Calendar.YEAR); break;
		case 1: val = calendar.get(Calendar.MONTH) + 1; break;
		case 2: val = calendar.get(Calendar.DAY_OF_MONTH); break;
		case 3: val = calendar.getActualMinimum(Calendar.DAY_OF_MONTH); break;
		case 4: val = calendar.getActualMaximum(Calendar.DAY_OF_MONTH); break;
		case 5: val = calendar.get(Calendar.HOUR_OF_DAY); break;
		case 6: val = calendar.get(Calendar.MINUTE); break;
		case 7: val = calendar.get(Calendar.SECOND); break;
		default:  break;
		}
		return val;
	}
	
	public static Date combinationDateTime(Date date, Integer hours){
		if(null == date || null == hours){
			log.warn("时间为空！");
			return null;
		}
		
		Calendar calendar = Calendar.getInstance();
		calendar.setTime(date);
		calendar.set(Calendar.HOUR_OF_DAY, hours);
		
		return calendar.getTime();
	}
	
	public static List<String> getBetweenDates(Date begin, Date end) {
		
		List<String> result = new ArrayList<String>();
        Calendar tempStart = Calendar.getInstance();
        tempStart.setTime(begin);
        
	    while(begin.getTime() <= end.getTime()){
	        result.add(convertDate2Str(begin, "yyyy-MM-dd"));
	        tempStart.add(Calendar.DAY_OF_YEAR, 1);
	        begin = tempStart.getTime();
	    }
        return result;
	}
	
    public static Object convertMap(Class<?> type, Map<?, ?> map) {
    	try{
    		BeanInfo beanInfo = Introspector.getBeanInfo(type); // 获取类属性
    		
    		//java9废弃newInstance
    		//Object obj = type.newInstance(); // 创建 JavaBean 对象
    		Object obj = type.getDeclaredConstructor().newInstance(); // 创建 JavaBean 对象
    		
    		//给JavaBean 对象的属性赋值
    		PropertyDescriptor[] propertyDescriptors = beanInfo.getPropertyDescriptors();
    		for (int i = 0; i < propertyDescriptors.length; i++) {
    			PropertyDescriptor descriptor = propertyDescriptors[i];
    			String propertyName = descriptor.getName();
    			
    			if (map.containsKey(propertyName)) {
    				// 下面一句可以 try 起来，这样当一个属性赋值失败的时候就不会影响其他属性赋值。 
    				Object value = map.get(propertyName); 
    				if(null == value)
    					continue;
    				if(value instanceof Byte)
    					value = Integer.parseInt(value.toString());
    				if(value instanceof java.math.BigInteger)
    					value = Long.parseLong(value.toString());
    				
    				Object[] args = new Object[1]; 
    				args[0] = value; 
    				descriptor.getWriteMethod().invoke(obj, args); 
    			} 
    		} 
    		return obj; 
    		
    	}catch (Exception e) {
    		log.error("Map对象转化"+type.getName()+"失败/n原因："+e.getMessage());
			return null;
		}
    } 
    
    public static List<?> convertMap(Class<?> type, List<Map<?,?>> listMap){
    	try{
    		//获取类属性
    		BeanInfo beanInfo = Introspector.getBeanInfo(type);
    		Object obj = null; 
    		List<Object> objs = new ArrayList<Object>();
    		// 给 JavaBean 对象的属性赋值 
    		PropertyDescriptor[] propertyDescriptors =  beanInfo.getPropertyDescriptors();
    		
    		for(Map<?,?> map : listMap){
    			//过滤空map
    			if(map.isEmpty())
    				continue;
    			//创建 JavaBean 对象
    			//obj = type.newInstance();
    			obj = type.getDeclaredConstructor().newInstance();
    			
    			for (int i = 0; i< propertyDescriptors.length; i++) { 
    				PropertyDescriptor descriptor = propertyDescriptors[i]; 
    				String propertyName = descriptor.getName(); 
    				
    				if (map.containsKey(propertyName)) {
    					// 下面一句可以 try 起来，这样当一个属性赋值失败的时候就不会影响其他属性赋值。 
    					Object value = map.get(propertyName);
    					if(null == value)
        					continue;
        				if(value instanceof Byte)
        					value = Integer.parseInt(value.toString());
        				if(value instanceof java.math.BigInteger)
        					value = Long.parseLong(value.toString());
    					Object[] args = new Object[1];
    					args[0] = value;
    					descriptor.getWriteMethod().invoke(obj, args); 
    					
    				} 
    			} 
    			objs.add(obj);
    		}
    		return objs; 
    	}catch (Exception e) {
    		log.error("Map对象转化"+type.getName()+"失败/n原因："+e.getMessage());
			return null;
		}
    }
    
    /** 对象合并 **/
    public static <T> void merge(T target, T destination) throws Exception {
        BeanInfo beanInfo = Introspector.getBeanInfo(target.getClass());
        for (PropertyDescriptor descriptor : beanInfo.getPropertyDescriptors()) {
            if (descriptor.getWriteMethod() != null) {
                //Object originalValue = descriptor.getReadMethod().invoke(target);

            	Object defaultValue = descriptor.getReadMethod().invoke(
            			destination);
                if (defaultValue != null) {
                    descriptor.getWriteMethod().invoke(target, defaultValue);
                }
            }
        }
    }
    
    /**下划线转驼峰*/  
    public static String lineToHump(String str){  
        str = str.toLowerCase();  
        Matcher matcher = linePattern.matcher(str);  
        StringBuffer sb = new StringBuffer();  
        while(matcher.find()){  
            matcher.appendReplacement(sb, matcher.group(1).toUpperCase());  
        }  
        matcher.appendTail(sb);  
        return sb.toString();  
    } 
	/**驼峰转下划线*/  
    public static String humpToLine(String str){  
        Matcher matcher = humpPattern.matcher(str);  
        StringBuffer sb = new StringBuffer();  
        while(matcher.find()){  
            matcher.appendReplacement(sb, "_"+matcher.group(0).toLowerCase());  
        }  
        matcher.appendTail(sb);  
        return sb.toString();  
    }

	/**
	 * 用于保留两位小数
	 */
	private static final Format DECIMAL_FORMAT = new DecimalFormat("0.00");

	/**
	 * 将数字保留两位小数并返回BigDecimal类型
	 */
	public static BigDecimal getDecimalFormatResultBigDecimal(Object object) {
		return new BigDecimal(DECIMAL_FORMAT.format(object));
	}

	/**
	 * 将数字保留两位小数并返回String类型
	 */
	public static String getDecimalFormatResultString(Object object) {
		return DECIMAL_FORMAT.format(object);
	}

	/**
	 * 获取指定日期往前s月的日期
	 * @param date
	 * @param months
	 * @return
	 */
	public static Date beforeMonths(Date date, Integer months){
		if(null == date){
			log.warn("时间为空！");
			return null;
		}

		Calendar calendar = Calendar.getInstance();
		calendar.setTime(date);
		calendar.add(Calendar.MONTH,-months);
		return calendar.getTime();
	}
	
	/**
	 * 获取指定时间一年前1号凌晨时间
	 *
	 * @param date
	 * @return
	 */
	public static Date beforeYearDate(Date date) {
		Calendar calendar = Calendar.getInstance();
		calendar.setTime(date);
		calendar.add(Calendar.YEAR,-1);
		calendar.set(Calendar.DAY_OF_MONTH, 1);
		calendar.set(Calendar.HOUR_OF_DAY,0);
		calendar.set(Calendar.MINUTE,0);
		calendar.set(Calendar.SECOND,0);
		return calendar.getTime();
	}
	/**
	 * 获取指定时间所在下月1日凌晨时间
	 *
	 * @param date
	 * @return
	 */
	public static Date nextMonthFirstDate(Date date) {
		Calendar calendar = Calendar.getInstance();
		calendar.setTime(date);
		calendar.set(Calendar.DAY_OF_MONTH, 1);
		calendar.add(Calendar.MONTH, 1);
		calendar.set(Calendar.HOUR_OF_DAY,0);
		calendar.set(Calendar.MINUTE,0);
		calendar.set(Calendar.SECOND,0);
		return calendar.getTime();
	}
	
	/**
	 * 获取指定时间的指定string 格式 :08.02
	 *
	 * @param date
	 * @return
	 */
	public static String getYearAndMonthStr(Date date) {
		Calendar instance = Calendar.getInstance();
		instance.setTime(date);
		String monthStr = null;
		String yearStr = (instance.get(Calendar.YEAR)+"").substring(2,4);
		int month = instance.get(Calendar.MONTH) + 1;
		if(month<10){
			monthStr = "0"+month;
		}else {
			monthStr = month+"";
		}
		String str =yearStr +"."+monthStr;
		return  str;
	}
	
	/**
     * Date转日期字符串
     * @param date 日期
     * @return String
     */
    public static String dateToString(Date date) {
        if (date == null) {
            return null;
        }
        final SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd hh:mm:ss");
        return format.format(date);
    }
    
    public static final int FIRST_DAY_STR = 1;
    public static final int LAST_DAY_STR = 2;
    public static final int FIRST_DAY_DATETIME = 3;
    public static final int LAST_DAY_DATETIME = 4;
    public static final int YEAR_STR = 5;
    /**
	  * @description 获取当前年的最后一天或者前一天的不同格式
	  * @author cuizq
	  * @date 2019-02-22 10:57:51
	  * @param now 当前时间
	  * @param flag <1:返回当前年第一天的字符串yyyy-MM-dd如："2019-01-01",
	  * 			 2:返回当前年的最后一天字符串yyyy-MM-dd如："2019-12-31",
	  * 			 3:返回当前年的第一天的时间戳(Date格式)如:"2019-01-01 00:00:00",
	  * 			 4:返回当前年的最后一天的时间戳(Date格式)如:"2019-12-31 59:59:59",
	  * 			 5:返回当前年的字符串yyyy如："2019">
	  * @return
	  * @throws Exception
	  */
	@SuppressWarnings("unchecked")
	public static <T>  T getDayOrYear(Date now,int flag) throws Exception{
		SimpleDateFormat timeFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		SimpleDateFormat yearFormat = new SimpleDateFormat("yyyy");
		String year = yearFormat.format(now);
		switch(flag){
			case 1:
				return (T) (year+"-01-01");
			case 2:
				return (T) (year+"-12-31");
			case 3:
				try {
					return (T) (timeFormat.parse(year+"-01-01 00:00:00"));
				} catch (ParseException e) {
					throw new SystemException(5001, "当前年的第一天时间转换失败",e);
				}
			case 4:
				try {
					return (T) timeFormat.parse(year+"-12-31 23:59:59");
				} catch (ParseException e) {
					throw new SystemException(5002, "当前年的最后一天时间转换失败",e);
				}
			case 5:return (T) year;
			default: return null;
		}
	}
	
}

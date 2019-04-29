package com.lubansoft.occ.common.util;

import org.apache.ibatis.jdbc.SQL;
import org.apache.log4j.Logger;

import java.lang.reflect.Field;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class SQLUtil {
	private static Logger log = Logger.getLogger(SQLUtil.class);

	public static <T> String createInsertSQL(String tableName, Object obj){
		try{
			SQL sql = new SQL();
			sql.INSERT_INTO(tableName);
			
			List<Field> fieldList = getAllFields(obj.getClass());
			//for(StaffField f : obj.getClass().getDeclaredFields()){
			for(Field f : fieldList){
				f.setAccessible(true);
				if(null != f.get(obj)){
					sql.VALUES(ParseUtil.humpToLine(f.getName()), "#{"+ f.getName() +"}");
				}
			}
			
			return sql.toString();
		}catch(Exception e){
			log.error("对象转换失败!");
		}
		
		return null;
    }
	
	public static <T> String createUpdateSQL(String tableName, Object obj){
		try{
			SQL sql = new SQL();
			sql.UPDATE(tableName);
			
			List<Field> fieldList = getAllFields(obj.getClass());
			//for(StaffField f : obj.getClass().getDeclaredFields()){
			for(Field f : fieldList){
				f.setAccessible(true);
				if(null != f.get(obj)){
					if(!"id".equalsIgnoreCase(f.getName())){
						sql.SET(" "+f.getName() + " = #{"+ f.getName() +"} ");
					}else{
						sql.WHERE(" "+ f.getName() + " = #{"+ f.getName() +"} ");
					}
				}
			}
			
			return sql.toString();
		}catch(Exception e){
			log.error("对象转换失败!");
		}
		
		return null;
    }

	public static <T> String createUpdateSQL2(String tableName, Object obj){
		try{
			SQL sql = new SQL();
			sql.UPDATE(tableName);
			
			List<Field> fieldList = getAllFields(obj.getClass());
			//for(StaffField f : obj.getClass().getDeclaredFields()){
			for(Field f : fieldList){
				f.setAccessible(true);
				if(null != f.get(obj)){
					if(!"userId".equalsIgnoreCase(f.getName())){
						sql.SET(" "+ ParseUtil.humpToLine(f.getName()) + " = #{"+ f.getName() +"} ");
					}else{
						sql.WHERE(" "+ ParseUtil.humpToLine(f.getName()) + " = #{"+ f.getName() +"} ");
					}
				}
			}
			
			return sql.toString();
		}catch(Exception e){
			log.error("对象转换失败!");
		}
		
		return null;
    }
	
	private static List<Field> getAllFields(Class<?> cls){
		List<Field> fieldList = new ArrayList<Field>();
		while(null != cls){
			fieldList.addAll(Arrays.asList(cls.getDeclaredFields()));
			//得到父类,然后赋给自己
			cls = cls.getSuperclass();
		}
		return fieldList;
	}

	public static String createDeleteSqlByIds(final String tableName, final List<String> ids) {
		if (ids == null || ids.isEmpty()) {
			return null;
		}
		final SQL sql = new SQL();
		sql.UPDATE(tableName).SET("is_delete = 1");
		for (int i = 0; i < ids.size(); i++) {
			sql.WHERE(" id = '" + ids.get(i) + "' ");
			if (i < ids.size() - 1) {
				sql.OR();
			}
		}

		return sql.toString();
	}

	public static String createGetSqlById(final String tableName, final String id) {
		if (null == id || id.isEmpty()) {
			return null;
		}
		final SQL sql = new SQL();
		sql.SELECT("*").FROM(tableName).WHERE("id = #{id}");
		sql.AND().WHERE("is_delete = 0");
		return sql.toString();
	}

}

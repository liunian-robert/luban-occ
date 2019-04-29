package com.lubansoft.occ.common.util;

import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.Collections;
import java.util.Comparator;
import java.util.Date;
import java.util.List;

public class SortList<E> {
	private static final String DESC = "desc";
	private static final String ASC = "asc";

	/**
	 * 排序（String）
	 * @param list
	 * @param method
	 * @param sort
	 */
	public void Sort(List<E> list, final String method, final String sort){
	       //排序
			if(list == null || list.isEmpty()) {return;}
	        Collections.sort(list, new Comparator<E>() {     
			@SuppressWarnings("unchecked")
			public int compare(Object a, Object b) {
	           int ret = 0;
	           try{
	               Method m1 = ((E)a).getClass().getMethod(method);
	               Method m2 = ((E)b).getClass().getMethod(method);
	               Object param1 = m1.invoke(((E)a));
	               Object param2 = m2.invoke(((E)b));
	               
	               //判断Integer类型
	               if(param1 instanceof Integer){
	            	   Integer p1 = Integer.parseInt(param1.toString());
	            	   Integer p2 = Integer.parseInt(param2.toString());
	            	   if(ASC.equalsIgnoreCase(sort)){
	            		   ret = p1.compareTo(p2);
	            	   }else if(DESC.equalsIgnoreCase(sort)){
	            		   ret = p2.compareTo(p1);
	            	   }else{
	            		   ret = p1.compareTo(p2);
	            	   }
	               }else if(param1 instanceof Date){
	            	   Date p1 = (Date)param1;
	            	   Date p2 = (Date)param2;
	            	   if(ASC.equalsIgnoreCase(sort)){
	            		   ret = p1.after(p2) ? 1 : -1;
	            	   }else if(DESC.equalsIgnoreCase(sort)){
	            		   ret = p2.after(p1) ? 1 : -1;
	            	   }else{
	            		   ret = p1.compareTo(p2);
	            	   }
	               }else{
	            	   String p1 = param1.toString();
	            	   String p2 = param2.toString();
	            	   if(ASC.equalsIgnoreCase(sort)){
	            		   ret = p1.compareTo(p2);
	            	   }else if(DESC.equalsIgnoreCase(sort)){
	            		   ret = p2.compareTo(p1);
	            	   }else{
	            		   ret = p1.compareTo(p2);
	            	   }
	               }
	               
	           }catch(NoSuchMethodException ne){
	               System.out.println(ne);
	              }catch(IllegalAccessException ie){
	                  System.out.println(ie);
	              }catch(InvocationTargetException it){
	                  System.out.println(it);
	              }
	           return ret;
	           }
	        });
	}
	
}

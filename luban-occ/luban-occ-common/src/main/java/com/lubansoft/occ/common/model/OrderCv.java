package com.lubansoft.occ.common.model;

import java.util.ArrayList;
import java.util.List;

import org.apache.commons.lang3.StringUtils;
import org.springframework.util.CollectionUtils;

import com.lubansoft.occ.common.model.OrderIc.OrderType;
import com.lubansoft.occ.common.util.CustomLogger;


public class OrderCv {
	
	public static String createOrder(List<OrderModel> orderList, OrderIc... orderIcs) {
		if(CollectionUtils.isEmpty(orderList)) { return null; }
		try {
			List<String> orderStr = new ArrayList<String>();
			for(OrderModel om : orderList) {
				if(StringUtils.isBlank(om.getColumn())) { continue; }

				String column = getColumn(om.getColumn(), orderIcs);
				if(null == column) { continue; }
				
				String type =  getType(om.getType(), orderIcs);
				
				orderStr.add(column + " " + (null == type ? OrderType.DESC.toString() : type));
			}
			
			if(CollectionUtils.isEmpty(orderStr)) { return null; }
			
			return  " "+  StringUtils.join(orderStr, ",") + " ";
		}catch (Exception e) {
			CustomLogger.getLog().error(" converter order clause fail ");
		}
		return null;
	}
	
	public static String getColumn(String name, OrderIc... orderIcs) {
		for(OrderIc ot : orderIcs) {
			if(name.intern().equals(ot.getName())) {
				return ot.getColumn();
			}
		}
		return null;
	}
	
	public static String getType(String type, OrderIc... orderIcs) {
		for(OrderIc ot : orderIcs) {
			if(type.toUpperCase().intern().equals(ot.getType().toUpperCase())) {
				return ot.getType();
			}
		}
		return null;
	}
	
}

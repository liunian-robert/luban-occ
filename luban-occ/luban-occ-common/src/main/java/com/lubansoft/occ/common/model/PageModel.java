package com.lubansoft.occ.common.model;

import com.lubansoft.occ.common.util.Constant;
import java.io.Serializable;
import java.util.List;


/**
 * 分页
 *
 * @author xiaotao.sogn
 */
public class PageModel implements Serializable {
    private static final long serialVersionUID = -4664729116026544080L;

    /**
     * 偏移量（分页起始索引）
     */
    private Integer pageNum = Constant.DEFAULT_PAGE_NUM;
    /**
     * 每页条数
     */
    private Integer pageSize = Constant.DEFAULT_PAGE_SIZE;
    /**
     * 排序字段
     */
    private List<OrderModel> orderList;
    
    public PageModel() {
    	
    }
    public PageModel(Integer pageNum,Integer pageSize) {
    	this.pageNum = pageNum;
    	this.pageSize = pageSize;
    }
    public Integer getPageNum() {
        return pageNum;
    }

    public void setPageNum(Integer pageNum) {
        this.pageNum = pageNum;
    }

    public Integer getPageSize() {
        return pageSize;
    }

    public void setPageSize(Integer pageSize) {
        this.pageSize = pageSize;
    }

    public List<OrderModel> getOrderList() {
        return orderList;
    }

    public void setOrderList(List<OrderModel> orderList) {
        this.orderList = orderList;
    }

    public void vlidatePageParam() {
        if (pageNum == null || pageNum.intValue() <= 0) {
        	pageNum = Constant.DEFAULT_PAGE_NUM;
        }
        if (pageSize == null || pageSize <= 0) {
            pageSize = Constant.DEFAULT_PAGE_SIZE;
        }
    }
}

package com.lubansoft.occ.common.model;


/**
 * @description 分页结果的总条数、总页数
 * @author cuizq
 * @date 2019-02-26 21:48:20
 */
public abstract class PageResultModle {
	private Integer totalPage;
	private Long count;
	
	public Integer getTotalPage() {
		return totalPage;
	}
	public void setTotalPage(Integer totalPage) {
		this.totalPage = totalPage;
	}
	public Long getCount() {
		return count;
	}
	public void setCount(Long count) {
		this.count = count;
	}
	
	@Override
	public String toString() {
		return "PageResultModle [totalPage=" + totalPage + ", count=" + count + "]";
	}
}

package com.lubansoft.occ.common.model;

import java.io.Serializable;
import java.util.Date;

/**
 * Service层模型
 * @since 1.0.0
 *
 */
public abstract class BaseModel implements Serializable {
	
	private static final long serialVersionUID = -1918122201005894660L;

	/**
	 * 软删除标志位，0：未删除，1：删除
	 */
	private Integer isDelete;
	
	/**
	 * 创建人员
	 */
	private String createBy;
	
	/**
	 * 创建时间
	 */
	private Date createAt;
	
	/**
	 * 更新人员
	 */
	private String updateBy;
	
	/**
	 * 更新时间
	 */
	private Date updateAt;
	
	/**
	 * 版本号
	 */
	private Integer version;

	public Integer getIsDelete() {
		return isDelete;
	}

	public void setIsDelete(Integer isDelete) {
		this.isDelete = isDelete;
	}

	public String getCreateBy() {
		return createBy;
	}

	public void setCreateBy(String createBy) {
		this.createBy = createBy;
	}

	public Date getCreateAt() {
		return createAt;
	}

	public void setCreateAt(Date createAt) {
		this.createAt = createAt;
	}

	public String getUpdateBy() {
		return updateBy;
	}

	public void setUpdateBy(String updateBy) {
		this.updateBy = updateBy;
	}

	public Date getUpdateAt() {
		return updateAt;
	}

	public void setUpdateAt(Date updateAt) {
		this.updateAt = updateAt;
	}

	public Integer getVersion() {
		return version;
	}

	public void setVersion(Integer version) {
		this.version = version;
	}

}

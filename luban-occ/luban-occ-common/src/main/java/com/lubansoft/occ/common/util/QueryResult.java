package com.lubansoft.occ.common.util;

import java.io.Serializable;
import java.util.List;
import java.util.Map;

public class QueryResult<T> implements Serializable{

	private static final long serialVersionUID = 1117309620808398677L;

	private List<T> result;

	private Map<String, String> totalData;

	private Long totalCount;

	public List<T> getResult() {
		return result;
	}

	public void setResult(List<T> result) {
		this.result = result;
	}

	public Long getTotalCount() {
		return totalCount;
	}

	public void setTotalCount(Long totalCount) {
		this.totalCount = totalCount;
	}

    public Map<String, String> getTotalData() {
        return totalData;
    }

    public void setTotalData(Map<String, String> totalData) {
        this.totalData = totalData;
    }
}

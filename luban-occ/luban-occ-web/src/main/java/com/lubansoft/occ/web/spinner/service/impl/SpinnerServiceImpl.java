package com.lubansoft.occ.web.spinner.service.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.lubansoft.occ.common.util.SpinnerModule;
import com.lubansoft.occ.web.spinner.dao.SpinnerMapper;
import com.lubansoft.occ.web.spinner.dao.modle.SpinnerDO;
import com.lubansoft.occ.web.spinner.service.SpinnerService;
import com.lubansoft.occ.common.util.EmptyUtils;
@Service("spinnerService")
public class SpinnerServiceImpl implements SpinnerService {
	@Autowired
	private SpinnerMapper spinnerMapper;
	@Override
	public Map<Integer, String> getValueMap(SpinnerModule spinnerModule) {
		List<SpinnerDO> spinnerDOs = spinnerMapper.getDropDownListByType(spinnerModule.getType());
		Map<Integer,String> valueMap = new HashMap<Integer,String>();
		if(EmptyUtils.isNotEmpty(spinnerDOs)) {
			for(SpinnerDO spinnerDO : spinnerDOs) {
				valueMap.put(spinnerDO.getValue(), spinnerDO.getName());
			}
		}
		return valueMap;
	}

}

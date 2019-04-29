package com.lubansoft.occ.web.spinner.service;

import java.util.Map;

import com.lubansoft.occ.common.util.SpinnerModule;

public interface SpinnerService {
	Map<Integer,String> getValueMap(SpinnerModule spinnerModule);
}

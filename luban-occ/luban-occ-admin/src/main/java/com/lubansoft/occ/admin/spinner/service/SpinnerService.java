package com.lubansoft.occ.admin.spinner.service;

import com.lubansoft.occ.admin.spinner.service.model.SpinnerDTO;

import java.util.List;

public interface SpinnerService {
    List<SpinnerDTO> getDropDownListByType(Integer type) throws Exception;
}

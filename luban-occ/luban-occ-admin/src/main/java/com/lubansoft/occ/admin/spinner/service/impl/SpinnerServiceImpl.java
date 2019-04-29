package com.lubansoft.occ.admin.spinner.service.impl;

import com.lubansoft.occ.admin.spinner.dao.SpinnerMapper;
import com.lubansoft.occ.admin.spinner.dao.module.SpinnerDO;
import com.lubansoft.occ.admin.spinner.service.SpinnerService;
import com.lubansoft.occ.admin.spinner.service.converter.SpinnerConverter;
import com.lubansoft.occ.admin.spinner.service.model.SpinnerDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service("spinnerService")
public class SpinnerServiceImpl implements SpinnerService {

    @Autowired
    private SpinnerMapper spinnerMapper;

    @Autowired
    private SpinnerConverter spinnerConverter;
    //根据type查询下拉列表

    //异常回滚
    @Transactional(rollbackFor = Exception.class)
    @Override
    public List<SpinnerDTO> getDropDownListByType(Integer type) throws Exception {

       List<SpinnerDO> spinnerDOS = spinnerMapper.getDropDownListByType(type);

        //转换对象
        List<SpinnerDTO> spinnerDTOS = spinnerConverter.invertList(spinnerDOS);

        return spinnerDTOS;
    }
}

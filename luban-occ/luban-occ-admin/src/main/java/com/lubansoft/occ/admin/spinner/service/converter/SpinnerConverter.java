package com.lubansoft.occ.admin.spinner.service.converter;

import org.springframework.stereotype.Service;

import com.lubansoft.occ.admin.spinner.dao.module.SpinnerDO;
import com.lubansoft.occ.admin.spinner.service.model.SpinnerDTO;
import com.lubansoft.occ.common.converter.Converter;

@Service("SpinnerConverter")
public class SpinnerConverter extends Converter<SpinnerDO, SpinnerDTO> {
    @Override
    protected SpinnerDTO defaultInvert(SpinnerDO source) throws Exception {
        if(null == source){
            return null;
        }
        SpinnerDTO target = new SpinnerDTO();
        target.setId(source.getId());
        target.setEpid(source.getEpid());
        target.setKey(source.getKey());
        target.setName(source.getName());
        target.setType(source.getType());
        target.setSort(source.getSort());
        target.setValue(source.getValue());
        return target;
    }

    @Override
    protected SpinnerDO defaultConvert(SpinnerDTO source) throws Exception {
        if(null == source){
            return null;
        }
        SpinnerDO target = new SpinnerDO();
        target.setId(source.getId());
        target.setEpid(source.getEpid());
        target.setKey(source.getKey());
        target.setName(source.getName());
        target.setType(source.getType());
        target.setSort(source.getSort());
        target.setValue(source.getValue());

        return target;
    }
}

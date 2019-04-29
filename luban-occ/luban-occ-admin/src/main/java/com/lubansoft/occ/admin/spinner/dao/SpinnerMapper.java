package com.lubansoft.occ.admin.spinner.dao;

import com.lubansoft.occ.admin.spinner.dao.module.SpinnerDO;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;

@Mapper
public interface SpinnerMapper {
    @Select("Select * from go_map where type = #{type}")
    List<SpinnerDO> getDropDownListByType(Integer type);
}

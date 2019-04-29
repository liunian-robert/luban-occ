package com.lubansoft.occ.web.spinner.dao;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import com.lubansoft.occ.web.spinner.dao.modle.SpinnerDO;

import java.util.List;

@Mapper
public interface SpinnerMapper {
    @Select("Select * from go_map where type = #{type} order by sort")
    List<SpinnerDO> getDropDownListByType(Integer type);
}

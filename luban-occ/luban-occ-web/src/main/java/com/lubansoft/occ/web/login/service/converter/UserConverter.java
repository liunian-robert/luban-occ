package com.lubansoft.occ.web.login.service.converter;

import org.springframework.stereotype.Service;

import com.lubansoft.occ.common.converter.Converter;
import com.lubansoft.occ.web.login.dao.model.UserDO;
import com.lubansoft.occ.web.login.service.model.UserDTO;


//bean的名字不能有重复的
@Service("userLoginConverter")
public class UserConverter extends Converter<UserDO, UserDTO> {

	@Override
	protected UserDTO defaultInvert(UserDO source) throws Exception {
		if(null == source){
			return null;
		}
		
		UserDTO target = new UserDTO();
		target.setUserId(source.getUserId());
		target.setUsername(source.getUsername());
		target.setPassword(source.getPassword());
		target.setToken(source.getToken());
		
		
		
		target.setIsDelete(source.getIsDelete());
		target.setCreateBy(source.getCreateBy());
		target.setCreateAt(source.getCreateAt());
		target.setUpdateBy(source.getUpdateBy());
		target.setUpdateAt(source.getUpdateAt());
		
		return target;
	}

	@Override
	protected UserDO defaultConvert(UserDTO source) throws Exception {
		if(null == source){
			return null;
		}
		
		UserDO target = new UserDO();
		target.setUserId(source.getUserId());
		target.setUsername(source.getUsername());
		target.setPassword(source.getPassword());
		target.setToken(source.getToken());
		
		
		
		target.setIsDelete(source.getIsDelete());
		target.setCreateBy(source.getCreateBy());
		target.setCreateAt(source.getCreateAt());
		target.setUpdateBy(source.getUpdateBy());
		target.setUpdateAt(source.getUpdateAt());
		
		return target;
	}

}

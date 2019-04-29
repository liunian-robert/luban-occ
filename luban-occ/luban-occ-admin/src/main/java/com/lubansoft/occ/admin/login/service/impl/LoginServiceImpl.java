package com.lubansoft.occ.admin.login.service.impl;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.lubansoft.occ.admin.login.controller.model.response.UserLoginInfo;
import com.lubansoft.occ.admin.login.dao.LoginMapper;
import com.lubansoft.occ.admin.login.dao.model.UserDO;
import com.lubansoft.occ.admin.login.service.LoginService;
import com.lubansoft.occ.admin.login.service.converter.UserConverter;
import com.lubansoft.occ.admin.login.service.model.UserDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import java.io.UnsupportedEncodingException;
import java.util.Date;
import java.util.List;

/**
 * @ClassName LoginServiceImpl
 * @Author zhangyapo
 * @Date 2018/10/16 9:52
 * @Version 1.0
 **/
@Service("loginService")
public class LoginServiceImpl implements LoginService {


    @Autowired
    private LoginMapper loginMapper;

    @Autowired
    private UserConverter userConverter;


    @Override
    public UserDTO login(String username, String password) throws Exception {
        UserDO userDO = loginMapper.login(username,password);
        UserDTO userDTO = userConverter.invert(userDO);
        return userDTO;
    }

    @Override
    public UserDTO findUser(String userId) {
        return null;
    }

    @Override
    public List<UserDTO> getUser() {
        return null;
    }

    @Override
    public List<UserDTO> getUserByName(String name) {
        return null;
    }

    @Override
    public Integer addUser(UserDTO user) {
        return null;
    }

    @Override
    public String uploadFile(MultipartFile file, HttpServletRequest request) {
        return null;
    }

    @Override
    public UserDTO getUserByNameAndPassword(String name, String password) throws Exception {
        UserDO userDO = loginMapper.getUserByNameAndPassword(name,password);
        UserDTO userDTO = userConverter.invert(userDO);

        return userDTO;
    }

    @Override
    public String getToken(UserLoginInfo userLoginInfo) throws UnsupportedEncodingException {
        //半小时过期
        Date expiresAt = new Date(System.currentTimeMillis() + 1000 * 60 * 60);
        return JWT.create().withExpiresAt(expiresAt).withAudience(userLoginInfo.getUserId().toString())
                .withClaim("username",userLoginInfo.getUsername())
                .withClaim("password",userLoginInfo.getPassword())
                .withClaim("roleId",userLoginInfo.getRoleId())
                .withClaim("roleName",userLoginInfo.getRoleName())
                .withClaim("epid",userLoginInfo.getEpid())
                .withClaim("epName",userLoginInfo.getEpName())
                .sign(Algorithm.HMAC256(userLoginInfo.getPassword()));
    }
}

package com.lubansoft.occ.admin.login.service;

import com.lubansoft.occ.admin.login.controller.model.response.UserLoginInfo;
import com.lubansoft.occ.admin.login.service.model.UserDTO;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import java.io.UnsupportedEncodingException;
import java.util.List;

/**
 * @ClassName LoginService
 * @Author zhangyapo
 * @Date 2018/10/16 9:52
 * @Version 1.0
 **/
public interface LoginService {



    /**
     * 登录用户
     * @param username
     * @param password
     * @return
     */
    UserDTO login(String username, String password) throws Exception;

    UserDTO findUser(String userId);

    List<UserDTO> getUser();

    List<UserDTO> getUserByName(String name);

    Integer addUser(UserDTO user);

    String uploadFile(MultipartFile file, HttpServletRequest request);

    UserDTO getUserByNameAndPassword(String name, String password) throws Exception;

    String getToken(UserLoginInfo userLoginInfo) throws UnsupportedEncodingException;

    //UserDTO getUserById(String username,int epId) throws Exception;
}

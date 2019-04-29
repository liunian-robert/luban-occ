package com.lubansoft.occ.admin.login.dao;

import com.lubansoft.occ.admin.login.dao.model.UserDO;
import org.apache.ibatis.annotations.*;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * @ClassName LoginDao
 * @Author yuanlei
 * @Date 2018/10/18 15:00
 * @Version 1.0
 **/
@Mapper
public interface LoginMapper {
    /**
     *
     * @param username
     * @param password
     * @return
     */
    @Select("SELECT * FROM t_user where name = #{name} and password = #{password}")
    UserDO login(@Param("name") String username, @Param("password") String password);

    @Select("SELECT * FROM t_user where id = #{id}")
    UserDO findUserById(@Param("id") String userId);

    @Select("SELECT * FROM t_user")
    List<UserDO> getUser();

    @Select("SELECT * FROM t_user where name = #{name}")
    List<UserDO> getUserByName(String name);

    @Insert("INSERT INTO t_user VALUES(#{name},#{password})")
    Integer addUser(UserDO user);

    @Select("SELECT * FROM t_user where name = #{name} and password = #{password}")
    UserDO getUserByNameAndPassword(@Param("name") String name, @Param("password") String password);

    @Select("SELECT * FROM t_user where id = #{id}")
    UserDO getUserById(long userId);
}

package com.lubansoft.occ.admin.common.listener;

import com.lubansoft.occ.admin.login.controller.LoginController;
import com.lubansoft.occ.admin.login.controller.model.response.UserLoginInfo;
import com.lubansoft.occ.common.util.Constant;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.RedisTemplate;

import javax.servlet.annotation.WebListener;
import javax.servlet.http.HttpSession;
import javax.servlet.http.HttpSessionEvent;
import javax.servlet.http.HttpSessionListener;
@WebListener
public class OnlineListener implements HttpSessionListener {

    @Autowired
    private RedisTemplate<String,Object> redisTemplate;
    public void sessionCreated(HttpSessionEvent event) {
    }

    public void sessionDestroyed(HttpSessionEvent event) {
        HttpSession session = event.getSession();
        String jessionid = session.getId();
        redisTemplate.delete(Constant.LUBAN_SUMMARY_REDIS_SESSION_KEY + jessionid);
        redisTemplate.delete(Constant.LUBAN_SUMMARY_EXPIRE_TOKEN_KEY);
    }

}
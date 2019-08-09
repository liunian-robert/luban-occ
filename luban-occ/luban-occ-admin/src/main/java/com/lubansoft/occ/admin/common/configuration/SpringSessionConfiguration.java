package com.lubansoft.occ.admin.common.configuration;

import com.lubansoft.occ.admin.common.listener.OnlineListener;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.session.data.redis.config.annotation.web.http.EnableRedisHttpSession;
import org.springframework.session.web.http.SessionEventHttpSessionListenerAdapter;

import javax.servlet.http.HttpSessionListener;
import java.util.ArrayList;
import java.util.List;

@Configuration
@EnableRedisHttpSession(redisNamespace="lubansummary-session",maxInactiveIntervalInSeconds=3600)//自定义redis命名空间
public class SpringSessionConfiguration {
    @Autowired
    private OnlineListener onlineListener;
    @Bean
    public SessionEventHttpSessionListenerAdapter sessionEventHttpSessionListenerAdapter(){
        List<HttpSessionListener> httpSessionListeners = new ArrayList<HttpSessionListener>();
        httpSessionListeners.add(onlineListener);
        return new SessionEventHttpSessionListenerAdapter(httpSessionListeners);
    }
}

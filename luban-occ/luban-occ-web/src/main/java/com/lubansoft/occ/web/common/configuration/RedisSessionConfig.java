package com.lubansoft.occ.web.common.configuration;

import com.lubansoft.occ.common.configuration.RedisSourceConfig;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.redis.connection.jedis.JedisConnectionFactory;
import org.springframework.session.data.redis.config.annotation.web.http.EnableRedisHttpSession;

@Configuration
@EnableRedisHttpSession(redisNamespace="lubango-session")//自定义redis命名空间
public class RedisSessionConfig {
    @Autowired
    private RedisSourceConfig redisSourceConfig;

    @Bean
    public JedisConnectionFactory connectionFactory() {
        JedisConnectionFactory connection = new JedisConnectionFactory();
        connection.setHostName(redisSourceConfig.getHost());
        connection.setPassword(redisSourceConfig.getPassword());
        connection.setPort(redisSourceConfig.getPort());
        return connection;
    }

    /*@Bean
    public CookieHttpSessionStrategy cookieHttpSessionStrategy(){
        CookieHttpSessionStrategy strategy=new CookieHttpSessionStrategy();
        DefaultCookieSerializer cookieSerializer=new DefaultCookieSerializer();
        cookieSerializer.setCookieName("LUBANSUMMARYSSIONID");//cookies名称
        cookieSerializer.setCookieMaxAge(1800);//过期时间(秒)
        strategy.setCookieSerializer(cookieSerializer);
        return strategy;
    }*/

}

package com.lubansoft.occ.admin.common.configuration;

import com.lubansoft.occ.common.configuration.RedisSourceConfig;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.redis.connection.lettuce.LettuceConnectionFactory;
import org.springframework.session.web.http.CookieHttpSessionStrategy;
import org.springframework.session.web.http.DefaultCookieSerializer;

@Configuration
public class RedisSessionConfig {
    @Autowired
    private RedisSourceConfig redisSourceConfig;

    /*@Bean
    public JedisConnectionFactory connectionFactory() {
        JedisConnectionFactory connection = new JedisConnectionFactory();
        connection.setHostName(redisSourceConfig.getHost());
        connection.setPort(redisSourceConfig.getPort());
        return connection;
    }*/

    @Bean
    public LettuceConnectionFactory connectionFactory() {
        LettuceConnectionFactory connection = new LettuceConnectionFactory();
        connection.setHostName(redisSourceConfig.getHost());
        connection.setPassword(redisSourceConfig.getPassword());
        connection.setPort(redisSourceConfig.getPort());
        return connection;
    }

    @Bean
    public CookieHttpSessionStrategy cookieHttpSessionStrategy(){
        CookieHttpSessionStrategy strategy=new CookieHttpSessionStrategy();
        DefaultCookieSerializer cookieSerializer=new DefaultCookieSerializer();
        cookieSerializer.setCookieName("LUBANSUMMARYSSIONID");//cookies名称
        cookieSerializer.setCookiePath("/lubanocc/admin");
        cookieSerializer.setUseHttpOnlyCookie(Boolean.TRUE);
        strategy.setCookieSerializer(cookieSerializer);
        return strategy;
    }

}

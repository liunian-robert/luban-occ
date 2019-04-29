package com.lubansoft.occ.admin.common.configuration;

import com.lubansoft.occ.common.configuration.RedisSourceConfig;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.redis.connection.RedisConnection;
import org.springframework.data.redis.connection.RedisConnectionFactory;
import org.springframework.data.redis.connection.jedis.JedisConnectionFactory;
import org.springframework.data.redis.connection.lettuce.LettuceConnectionFactory;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.data.redis.serializer.GenericJackson2JsonRedisSerializer;
import org.springframework.session.data.redis.RedisOperationsSessionRepository;
import org.springframework.session.data.redis.config.ConfigureRedisAction;
import org.springframework.session.data.redis.config.annotation.web.http.EnableRedisHttpSession;
import org.springframework.session.data.redis.config.annotation.web.http.RedisHttpSessionConfiguration;
import org.springframework.session.web.http.HeaderHttpSessionStrategy;
import org.springframework.session.web.http.HttpSessionStrategy;
import org.springframework.util.StringUtils;

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

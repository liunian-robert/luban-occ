package com.lubansoft.occ.admin;


import com.alibaba.dubbo.spring.boot.annotation.EnableDubboConfiguration;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.ServletComponentScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.scheduling.annotation.EnableAsync;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.session.data.redis.config.annotation.web.http.EnableRedisHttpSession;
import org.springframework.transaction.annotation.EnableTransactionManagement;

@EnableDubboConfiguration
@EnableTransactionManagement//启注解事务管理，等同于xml配置方式的 <tx:annotation-driven />
@EnableAsync//支持异步
@EnableRedisHttpSession(redisNamespace="lubansummary-session",maxInactiveIntervalInSeconds=3600)//自定义redis命名空间
@EnableScheduling
@ComponentScan(basePackages={"com.lubansoft.occ.common.*","com.lubansoft.occ.admin.*"})
@SpringBootApplication
public class LubanOccAdminApplication {
    public static void main(String[] args) {
        SpringApplication.run(LubanOccAdminApplication.class,args);
    }
}


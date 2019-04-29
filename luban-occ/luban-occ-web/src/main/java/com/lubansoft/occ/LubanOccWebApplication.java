package com.lubansoft.occ;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.transaction.annotation.EnableTransactionManagement;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.alibaba.dubbo.spring.boot.annotation.EnableDubboConfiguration;

@CrossOrigin	//允许跨越访问
@EnableDubboConfiguration
@EnableTransactionManagement	//启注解事务管理，等同于xml配置方式的 <tx:annotation-driven />
//@ServletComponentScan(basePackages = "com.lubansoft.occ.web.*")
@ComponentScan(basePackages={"com.lubansoft.occ.common.*","com.lubansoft.occ.web.*"})
@SpringBootApplication
public class LubanOccWebApplication {

	public static void main(String[] args) {
		SpringApplication.run(LubanOccWebApplication.class, args);
	}
}

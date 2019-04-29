package com.lubansoft.occ.common.configuration;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.AutoConfigureAfter;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.alibaba.dubbo.config.ApplicationConfig;
import com.alibaba.dubbo.config.MonitorConfig;
import com.alibaba.dubbo.config.ProtocolConfig;
import com.alibaba.dubbo.config.RegistryConfig;
import com.lubansoft.occ.common.disconf.component.DubboConfig;

/**
 * Spring Boot 中使用Dubbo,不需要使用xml的方式来配置生产者和消费者，需要使用@Bean注解的方式来进行配置。
 * @author zhangyapo
 *
 */
@Configuration
@AutoConfigureAfter(DubboConfig.class)
public class DubboConfiguration {

	@Autowired
	private DubboConfig dubboConfig;

	@Bean
	public RegistryConfig registry() {
	    RegistryConfig registryConfig = new RegistryConfig();
	    registryConfig.setAddress(dubboConfig.getHost() + ":" + dubboConfig.getPort());
	    registryConfig.setProtocol("zookeeper");
	    return registryConfig;
	}
	    
     @Bean
     public ApplicationConfig application() {
         ApplicationConfig applicationConfig = new ApplicationConfig();
         applicationConfig.setName(dubboConfig.getApplicationName());
         return applicationConfig;
     }

     //关闭monitor
     /*@Bean
     public MonitorConfig monitorConfig() {
         MonitorConfig mc = new MonitorConfig();
         mc.setProtocol("registry");
         return mc;
     }*/
     
     @Bean
     public ProtocolConfig protocol() {
         ProtocolConfig protocolConfig = new ProtocolConfig();
         protocolConfig.setPort(dubboConfig.getProtocolPort());
         return protocolConfig;
     }
     
     /*@Bean
     public ProviderConfig provider() {
         ProviderConfig providerConfig = new ProviderConfig();
         providerConfig.setMonitor(monitorConfig());
         return providerConfig;
     }*/

}

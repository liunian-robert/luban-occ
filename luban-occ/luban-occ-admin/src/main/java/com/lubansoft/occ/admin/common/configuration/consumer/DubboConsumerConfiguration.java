package com.lubansoft.occ.admin.common.configuration.consumer;

import org.springframework.context.annotation.Configuration;

import com.lubansoft.occ.common.configuration.DubboConfiguration;


@Configuration
public class DubboConsumerConfiguration extends DubboConfiguration {




    /**
     * 消费者之EnterpriseApi
     */
    /*@Bean
    public ReferenceBean<EnterpriseApi> EnterpriseApi() {
        ReferenceBean<EnterpriseApi> ref = new ReferenceBean<EnterpriseApi>();
        ref.setInterface(EnterpriseApi.class);
        ref.setTimeout(5000);
        ref.setVersion("1.1.1");
        ref.setRetries(3);
        ref.setCheck(false);
        return ref;
    }*/

    /**
     * 消费者之UserApi
     */
    /*@Bean
    public ReferenceBean<UserApi> UserApi() {
        ReferenceBean<UserApi> ref = new ReferenceBean<UserApi>();
        ref.setInterface(UserApi.class);
        ref.setVersion("1.0.0");
        ref.setTimeout(5000);
        ref.setRetries(3);
        ref.setCheck(false);
        return ref;
    }*/


}

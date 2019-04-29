package com.lubansoft.occ.web.common.configuration.provider;

import org.springframework.context.annotation.Configuration;

import com.lubansoft.occ.common.configuration.DubboConfiguration;


@Configuration
public class DubboProviderConfiguration extends DubboConfiguration {

	/*@Bean
    public ServiceBean<Person> personServiceExport(Person person) {
        ServiceBean<Person> serviceBean = new ServiceBean<Person>();
        serviceBean.setProxy("javassist");
        serviceBean.setVersion("myversion");
        serviceBean.setInterface(Person.class.getName());
        serviceBean.setRef(person);
        serviceBean.setTimeout(5000);
        serviceBean.setRetries(3);
        return serviceBean;
    }*/
}

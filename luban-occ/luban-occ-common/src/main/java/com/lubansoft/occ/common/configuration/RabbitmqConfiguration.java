package com.lubansoft.occ.common.configuration;

import com.lubansoft.occ.common.callback.RabbitConfirmCallback;
import com.lubansoft.occ.common.callback.RabbitReturnCallback;
import com.lubansoft.occ.common.disconf.component.RabbitMqConfig;
import org.springframework.amqp.core.AcknowledgeMode;
import org.springframework.amqp.rabbit.annotation.EnableRabbit;
import org.springframework.amqp.rabbit.config.SimpleRabbitListenerContainerFactory;
import org.springframework.amqp.rabbit.connection.CachingConnectionFactory;
import org.springframework.amqp.rabbit.connection.ConnectionFactory;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.amqp.support.converter.Jackson2JsonMessageConverter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

/**
 * @author liuli
 * @date 2019/7/22 10:39
 */
@Configuration
@EnableRabbit
public class RabbitmqConfiguration {

    @Autowired
    private RabbitMqConfig rabbitMqConfig;


    @Bean
    public ConnectionFactory rabbitMqConnectionFactory() {
        CachingConnectionFactory connection = new CachingConnectionFactory();
        connection.setHost(rabbitMqConfig.getBasicdataHost());
        connection.setPort(rabbitMqConfig.getBasicdataPort());
        connection.setUsername(rabbitMqConfig.getBasicdataUsername());
        connection.setPassword(rabbitMqConfig.getBasicdataPassword());
        connection.setPublisherConfirms(Boolean.TRUE);
        connection.setPublisherReturns(Boolean.TRUE);
        connection.setVirtualHost(rabbitMqConfig.getBasicdataVirtualhost());
        return connection;
    }

    @Bean
    public RabbitTemplate rabbitTemplate() {
        RabbitTemplate rabbitTemplate = new RabbitTemplate(rabbitMqConnectionFactory());
        rabbitTemplate.setMessageConverter(new Jackson2JsonMessageConverter());
        rabbitTemplate.setConfirmCallback(new RabbitConfirmCallback());
        rabbitTemplate.setReturnCallback(new RabbitReturnCallback());
        return rabbitTemplate;
    }

    @Bean
    public SimpleRabbitListenerContainerFactory rabbitListenerContainerFactory(){
        SimpleRabbitListenerContainerFactory factory = new SimpleRabbitListenerContainerFactory();
        factory.setConnectionFactory(rabbitMqConnectionFactory());
        factory.setMessageConverter(new Jackson2JsonMessageConverter());
        factory.setAcknowledgeMode(AcknowledgeMode.MANUAL);
        return factory;
    }

}

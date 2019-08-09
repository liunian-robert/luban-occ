package com.lubansoft.occ.admin.common;

import com.lubansoft.occ.common.disconf.component.RabbitMqConfig;
import com.lubansoft.occ.common.model.MQMessage;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class FanoutSender {
    @Autowired
    private RabbitTemplate rabbitTemplate;

    public void send(MQMessage message) {
        this.rabbitTemplate.convertAndSend(RabbitMqConfig.FANOUT_EXCHANGE, "", message);
    }
}

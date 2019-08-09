package com.lubansoft.occ.admin.common;

import com.lubansoft.occ.common.disconf.component.RabbitMqConfig;
import com.lubansoft.occ.common.model.MQMessage;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TopicSender {
    @Autowired
    private RabbitTemplate rabbitTemplate;

    // 第一个参数：TopicExchange名字
    // 第二个参数：Route-Key
    // 第三个参数：要发送的内容
    public void send(MQMessage message) {
        this.rabbitTemplate.convertAndSend(RabbitMqConfig.TOPIC_EXCHANGE,"lzc.message", message);
        this.rabbitTemplate.convertAndSend(RabbitMqConfig.TOPIC_EXCHANGE, "lzc.lzc", message);
    }
}

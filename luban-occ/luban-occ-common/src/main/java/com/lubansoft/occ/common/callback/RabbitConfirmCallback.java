package com.lubansoft.occ.common.callback;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.amqp.rabbit.support.CorrelationData;

public class RabbitConfirmCallback implements RabbitTemplate.ConfirmCallback {
    private Logger logger = LoggerFactory.getLogger(RabbitConfirmCallback.class);

    /**
     * 发送到交换机上失败回调
     * 消息发送回调(判断是否发送到相应的交换机上)
     * @param correlationData
     * @param ack
     * @param cause
     */
    @Override
    public void confirm(CorrelationData correlationData, boolean ack, String cause) {
        if (ack) {
            logger.info("消息发送到exchange成功"+correlationData.toString());
        } else {
            logger.info("消息发送到exchange失败"+correlationData.toString());
        }
    }
}

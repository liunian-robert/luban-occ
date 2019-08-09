package com.lubansoft.occ.admin.common;

import com.lubansoft.occ.common.disconf.component.RabbitMqConfig;
import com.lubansoft.occ.common.model.MQMessage;
import com.rabbitmq.client.Channel;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.amqp.core.Message;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.stereotype.Service;

@Service
public class TopicReceiver {
    private Logger logger = LoggerFactory.getLogger(FanoutReceiver.class);
    /*// queues是指要监听的队列的名字
    @RabbitListener(queues = RabbitMqConfig.TOPIC_QUEUE1,containerFactory = "rabbitListenerContainerFactory")
    public void receiveTopic1(MQMessage message) {
        System.out.println("【receiveTopic1监听到消息】" + message.toString());
    }
    @RabbitListener(queues = RabbitMqConfig.TOPIC_QUEUE2,containerFactory = "rabbitListenerContainerFactory")
    public void receiveTopic2(MQMessage message) {
        System.out.println("【receiveTopic2监听到消息】" + message.toString());
    }*/

    @RabbitListener(queues = RabbitMqConfig.TOPIC_QUEUE1)
    public void receiverTopicMessage1(MQMessage mqMessage, Channel channel, Message message) throws Exception {
        try {
            channel.basicAck(message.getMessageProperties().getDeliveryTag(),Boolean.FALSE);
        } catch (Exception e) {
            if (message.getMessageProperties().getRedelivered()) {
                logger.error("消息已重复处理失败,拒绝再次接收" + mqMessage.getMessage());
                // 拒绝消息，requeue=false 表示不再重新入队，如果配置了死信队列则进入死信队列
                channel.basicReject(message.getMessageProperties().getDeliveryTag(), false);
            } else {
                logger.error("消息即将再次返回队列处理" + mqMessage.getMessage());
                // requeue为是否重新回到队列，true重新入队
                channel.basicNack(message.getMessageProperties().getDeliveryTag(), false, true);
            }

        }
    }

    @RabbitListener(queues = RabbitMqConfig.TOPIC_QUEUE2)
    public void receiverTopicMessage2(MQMessage mqMessage, Channel channel, Message message) throws Exception {
        try {
            channel.basicAck(message.getMessageProperties().getDeliveryTag(),Boolean.FALSE);
        } catch (Exception e) {
            if (message.getMessageProperties().getRedelivered()) {
                logger.error("消息已重复处理失败,拒绝再次接收" + mqMessage.getMessage());
                // 拒绝消息，requeue=false 表示不再重新入队，如果配置了死信队列则进入死信队列
                channel.basicReject(message.getMessageProperties().getDeliveryTag(), false);
            } else {
                logger.error("消息即将再次返回队列处理" + mqMessage.getMessage());
                // requeue为是否重新回到队列，true重新入队
                channel.basicNack(message.getMessageProperties().getDeliveryTag(), false, true);
            }

        }
    }
}

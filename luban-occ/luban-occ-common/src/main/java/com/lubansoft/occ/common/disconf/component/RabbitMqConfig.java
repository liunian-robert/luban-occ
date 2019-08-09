package com.lubansoft.occ.common.disconf.component;

import com.baidu.disconf.client.common.annotations.DisconfFile;
import com.baidu.disconf.client.common.annotations.DisconfFileItem;
import org.springframework.amqp.core.*;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

/**
 * @author liuli
 * @date 2019/7/22 10:08
 */


@Configuration
@DisconfFile(filename = "rabbitmq.properties")
public class RabbitMqConfig {

    private String basicdataHost;
    private Integer basicdataPort;
    private String basicdataUsername;
    private String basicdataPassword;
    private String basicdataVirtualhost;
    private String basicdatalogExchange;
    private String basicdatalogQueue;
    private String basicdatalogRoutingKeyOper;
    private String basicdatalogRoutingKeyLogin;

    //topic
    public static final String TOPIC_QUEUE1 = "topic.queue1";
    public static final String TOPIC_QUEUE2 = "topic.queue2";
    public static final String TOPIC_EXCHANGE = "topic.exchange";

    //fanout
    public static final String FANOUT_QUEUE1 = "fanout.queue1";
    public static final String FANOUT_QUEUE2 = "fanout.queue2";
    public static final String FANOUT_EXCHANGE = "fanout.exchange";

    //redirect模式
    public static final String DIRECT_QUEUE1 = "direct.queue1";
    public static final String DIRECT_EXCHANGE = "direct.exchange";
    public static final String DIRECT_QUEUE2 ="direct.queue2" ;

    @DisconfFileItem(name="basicdata.host",associateField = "basicdataHost")
    public String getBasicdataHost() {
        return basicdataHost;
    }

    public void setBasicdataHost(String basicdataHost) {
        this.basicdataHost = basicdataHost;
    }

    @DisconfFileItem(name="basicdata.port",associateField = "basicdataPort")
    public Integer getBasicdataPort() {
        return basicdataPort;
    }

    public void setBasicdataPort(Integer basicdataPort) {
        this.basicdataPort = basicdataPort;
    }

    @DisconfFileItem(name="basicdata.username",associateField = "basicdataUsername")
    public String getBasicdataUsername() {
        return basicdataUsername;
    }

    public void setBasicdataUsername(String basicdataUsername) {
        this.basicdataUsername = basicdataUsername;
    }

    @DisconfFileItem(name="basicdata.password",associateField = "basicdataPassword")
    public String getBasicdataPassword() {
        return basicdataPassword;
    }

    public void setBasicdataPassword(String basicdataPassword) {
        this.basicdataPassword = basicdataPassword;
    }

    @DisconfFileItem(name="basicdata.virtualHost",associateField = "basicdataVirtualhost")
    public String getBasicdataVirtualhost() {
        return basicdataVirtualhost;
    }

    public void setBasicdataVirtualhost(String basicdataVirtualhost) {
        this.basicdataVirtualhost = basicdataVirtualhost;
    }

    @DisconfFileItem(name="basicdata.log.exchange",associateField = "basicdatalogExchange")
    public String getBasicdatalogExchange() {
        return basicdatalogExchange;
    }

    public void setBasicdatalogExchange(String basicdatalogExchange) {
        this.basicdatalogExchange = basicdatalogExchange;
    }

    @DisconfFileItem(name="basicdata.log.queue",associateField = "basicdatalogQueue")
    public String getBasicdatalogQueue() {
        return basicdatalogQueue;
    }

    public void setBasicdatalogQueue(String basicdatalogQueue) {
        this.basicdatalogQueue = basicdatalogQueue;
    }
    @DisconfFileItem(name="basicdata.log.routingkey.oper",associateField = "basicdatalogRoutingKeyOper")
    public String getBasicdatalogRoutingKeyOper() {
        return basicdatalogRoutingKeyOper;
    }

    public void setBasicdatalogRoutingKeyOper(String basicdatalogRoutingKeyOper) {
        this.basicdatalogRoutingKeyOper = basicdatalogRoutingKeyOper;
    }

    @DisconfFileItem(name="basicdata.log.routingkey.login",associateField = "basicdatalogRoutingKeyLogin")
    public String getBasicdatalogRoutingKeyLogin() {
        return basicdatalogRoutingKeyLogin;
    }

    public void setBasicdatalogRoutingKeyLogin(String basicdatalogRoutingKeyLogin) {
        this.basicdatalogRoutingKeyLogin = basicdatalogRoutingKeyLogin;
    }

    /**
     * Topic模式
     *
     * @return
     */
    @Bean
    public Queue topicQueue1() {
        return new Queue(TOPIC_QUEUE1);
    }

    @Bean
    public Queue topicQueue2() {
        return new Queue(TOPIC_QUEUE2);
    }

    @Bean
    public TopicExchange topicExchange() {
        return new TopicExchange(TOPIC_EXCHANGE);
    }

    @Bean
    public Binding topicBinding1() {
        return BindingBuilder.bind(topicQueue1()).to(topicExchange()).with("lzc.message");
    }

    @Bean
    public Binding topicBinding2() {
        return BindingBuilder.bind(topicQueue2()).to(topicExchange()).with("lzc.#");
    }


    /**
     * Fanout模式
     * Fanout 就是我们熟悉的广播模式或者订阅模式，给Fanout交换机发送消息，绑定了这个交换机的所有队列都收到这个消息。
     * @return
     */
    @Bean
    public Queue fanoutQueue1() {
        return new Queue(FANOUT_QUEUE1);
    }

    @Bean
    public Queue fanoutQueue2() {
        return new Queue(FANOUT_QUEUE2);
    }

    @Bean
    public FanoutExchange fanoutExchange() {
        return new FanoutExchange(FANOUT_EXCHANGE);
    }

    @Bean
    public Binding fanoutBinding1() {
        return BindingBuilder.bind(fanoutQueue1()).to(fanoutExchange());
    }

    @Bean
    public Binding fanoutBinding2() {
        return BindingBuilder.bind(fanoutQueue2()).to(fanoutExchange());
    }

    /**
     * direct模式
     * 消息中的路由键（routing key）如果和 Binding 中的 binding key 一致， 交换器就将消息发到对应的队列中。路由键与队列名完全匹配
     * @return
     */
    @Bean
    public Queue directQueue1() {
        return new Queue(DIRECT_QUEUE1);
    }

    @Bean
    public DirectExchange directExchange() {
        return new DirectExchange(DIRECT_EXCHANGE);
    }

    @Bean
    public Binding directBinding1() {
        return BindingBuilder.bind(directQueue1()).to(directExchange()).with("direct.pwl");
    }
}
package com.lubansoft.occ.admin.common.controller;

import com.lubansoft.occ.admin.common.DirectSender;
import com.lubansoft.occ.admin.common.FanoutSender;
import com.lubansoft.occ.admin.common.TopicSender;
import com.lubansoft.occ.common.model.MQMessage;
import com.lubansoft.occ.common.util.StringUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@EnableAutoConfiguration
@RequestMapping("/common")
public class CommonController {
    @Autowired
    private DirectSender directSender;

    @Autowired
    private FanoutSender fanoutSender;

    @Autowired
    private TopicSender topicSender;

    //根据企业id查询菜单列表
    @GetMapping("/message/send/{type}")
    public ResponseEntity<?> getMainMenuByEpId(@PathVariable("type") int type) throws Exception {
        MQMessage message = new MQMessage();
        message.setMessageId(StringUtil.getUUID());
        message.setMessage("测试rabbitmq消息!");
        if (type ==1) {
            directSender.send(message);
        }
        if (type==2) {
            fanoutSender.send(message);
        }
        if (type==3) {
            topicSender.send(message);
        }
        return ResponseEntity.success(200,Boolean.TRUE);
    }
}

package com.lubansoft.occ.admin.common.controller;

import com.lubansoft.occ.common.util.Constant;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.HashMap;
import java.util.Map;

@RestController
@EnableAutoConfiguration
@RequestMapping("/common")
public class CommonController {
    @GetMapping("/sessions/change/{attribute}")
    public ResponseEntity<?> changeSession(HttpServletRequest request,
                                              HttpServletResponse response,
                                           @PathVariable("attribute") String attribute
    ) throws Exception {
        //测试集群
        String jessionId = Constant.LUBAN_SUMMARY_REDIS_SESSION_KEY+request.getSession().getId();
        Map<String,String> map = new HashMap<String,String>();
        map.put("jessionId",jessionId);
        String url = "http://" + request.getServerName() //服务器地址
                + ":"
                + request.getServerPort()           //端口号
                + request.getContextPath()      //项目名称
                + request.getServletPath();
        map.put("attribute",url);
        request.getSession().setAttribute("attribute",url);
        return ResponseEntity.success(200,map);
    }


    @GetMapping("/sessions/get")
    public ResponseEntity<?> getSession(HttpServletRequest request,
                                              HttpServletResponse response
    ) throws Exception {
        String jessionId = Constant.LUBAN_SUMMARY_REDIS_SESSION_KEY+request.getSession().getId();
        Map<String,String> map = new HashMap<String,String>();
        map.put("jessionId",jessionId);
        map.put("attribute",(String)request.getSession().getAttribute("attribute"));
        return ResponseEntity.success(200,map);
    }
}

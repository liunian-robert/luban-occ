package com.lubansoft.occ.admin.websocket;

import io.netty.handler.codec.http.HttpHeaders;
import io.netty.handler.timeout.IdleStateEvent;
import org.springframework.stereotype.Component;
import org.yeauty.annotation.*;
import org.yeauty.pojo.Session;

import java.io.IOException;
import java.util.concurrent.atomic.AtomicInteger;

@ServerEndpoint(path = "/ws",host="127.0.0.1",port=8000,optionConnectTimeoutMillis=6000000)
@Component
public class WebSocketReceiver {
    private static AtomicInteger count= new AtomicInteger(0);
    @OnOpen
    public void onOpen(Session session, HttpHeaders headers) throws IOException {
        System.out.println("new connection");
        System.out.println("连接数：   " + count.addAndGet(1) );
        //String paramValue = parameterMap.getParameter("paramKey");
        //System.out.println(paramValue);
    }

    @OnClose
    public void onClose(Session session) throws IOException {
        System.out.println("one connection closed");
    }

    @OnError
    public void onError(Session session, Throwable throwable) {
        throwable.printStackTrace();
    }

    @OnMessage
    public void onMessage(Session session, String message) {
        System.out.println(message);
        session.sendText("Hello Netty!");
    }

    @OnBinary
    public void onBinary(Session session, byte[] bytes) {
        for (byte b : bytes) {
            System.out.println(b);
        }
        session.sendBinary(bytes);
    }

    @OnEvent
    public void onEvent(Session session, Object evt) {
        if (evt instanceof IdleStateEvent) {
            IdleStateEvent idleStateEvent = (IdleStateEvent) evt;
            switch (idleStateEvent.state()) {
                case READER_IDLE:
                    System.out.println("read idle");
                    break;
                case WRITER_IDLE:
                    System.out.println("write idle");
                    break;
                case ALL_IDLE:
                    System.out.println("all idle");
                    break;
                default:
                    break;
            }
        }
    }

}

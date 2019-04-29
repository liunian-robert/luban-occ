package com.lubansoft.occ.admin.common.timedtask;

import org.apache.log4j.Logger;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;


/**
 * 需要做定时任务方法类
 *
 * @author zhangyapo
 * @date 2019/3/11 17:27
 */
@Component
public class TimedTask {

    private final Logger logger = Logger.getLogger(this.getClass().getName());
    public final static long ONE_Minute =  60 * 1000;
    /**
     *定时修改合同签约的地区
     */
    @Scheduled(fixedRate = 1 * ONE_Minute)
    public void updateContractSign() {


        try {

        } catch (Exception e) {
            e.printStackTrace();
            logger.error("定时同步合同签约的地区任务失败", e);
        }

    }
}

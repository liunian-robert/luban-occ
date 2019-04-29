package com.lubansoft.occ.web.common.util;

public interface EchartsConstant {

    /**
     * @author cuizq
     * @description Echarts图表标题
     * @date 2019-02-21 13:49:38
     */
    public interface Title {
        String COMPLETION_RATE = "合同签约完成率";
        String CONTRACT_AREA_SCALE = "合同签约区域分布";
        String CONTRACT_PLAN = "合同签约";

        String PURCHASE_CENTRALIZED_SCALE = "集采占比";
        String PURCHASE_MATERIAL_SCALE = "采购金额";

        String STAFF_PROFESSION_RATE = "职称占比";
        String STAFF_EDUCATION_RATE = "学历占比";
        String WORKER_RATE = "劳务占比";
        String WORKER_HOLDER_RATE = "持证上岗率";

        String PLAN_PROFIT_TARGET = "计划利润指标";

        String QS_QUALIFIED_RATE = "质量合格率";

        String CIVILIZATION_RATE = "文明工地达标率";

        String MANAGE_AREA_SCALE = "地区完成指标";
    }

    /**
     * @author cuizq
     * @description Echarts图表类型
     * @date 2019-02-21 13:50:51
     */
    public interface Type {
        /**
         * @description 水球形进度条
         */
        String LIQUID_FILL = "liquidFill";

        /**
         * @description 柱状图
         */
        String BAR = "bar";

        /**
         * @description 雷达图
         */
        String RADAR = "radar";

        /**
         * @description 饼形图
         */
        String PIE = "pie";

        /**
         *
         */
        String CATEGORY = "category";

        /**
         * @description 折线图
         */
        String LINE = "line";
    }

    /**
     * @author cuizq
     * @description Echarts颜色
     * @date 2019-02-21 17:35:10
     */
    public interface Color {

        /**
         * 人力资源模块
         */
        public interface Hr {


            //===================职称占比颜色============================
            //初级工程师 开始颜色
            String JUNIOR_ENGINEER_START_COLOR = "#71B8E7";
            //初级工程师 结束颜色
            String JUNIOR_ENGINEER_END_COLOR = "#4A86F3";


            //中级工程师开始颜色
            String INTERMEDIATE_ENGINEER_START_COLOR = "#8C62D0";
            //中级工程师结束颜色
            String INTERMEDIATE_ENGINEER_END_COLOR = "#7B4FD1";

            //高级工程师开始颜色
            String SENIOR_ENGINEER_START_COLOR = "#DA8160";
            //高级工程师结束颜色
            String SENIOR_ENGINEER_END_COLOR = "#E46A4E";

            //专家及以上开始颜色
            String EXPERT_START_COLOR = "#AF5279";
            //专家及以上结束颜色
            String EXPERT_END_COLOR = "#944265";

            //其他 开始颜色
            String OTHER_START_COLOR = "#7584AA";
            //其他职称 结束颜色
            String OTHER_END_COLOR = "#8394B8";


        //===================学历占比颜色============================

            //专科 开始颜色
            String SPECIALTY_START_COLOR = "#71B8E7";
            //专科 结束颜色
            String SPECIALTY_END_COLOR = "#4A86F3";

            //本科 开始颜色
            String UNDERGRADUATE_START_COLOR = "#8C62D0";
            //本科结束颜色
            String UNDERGRADUATE_END_COLOR = "#7B4FD1";

            //本科以上 开始颜色
            String OVER_UNDERGRADUATE_START_COLOR = "#DA8160";
            //本科以上 结束颜色
            String OVER_UNDERGRADUATE_END_COLOR = "#E46A4E";

            //其他学历 开始颜色
            String OTHER_DIPLOMA_START_COLOR = "#7584AA";
            //其他颜色结束颜色
            String OTHER_DIPLOMA_END_COLOR = "#8394B8";

            //================
        }


        //项目经营中需要的颜色
        public interface  FundsTrend{
            //计划成本 颜色
            String PLAN_COST_COLOR = "#4B87F1";
            //计划收入 颜色
            String PLAN_INCOME_COLOR = "#4B87F2";
            //实际成本 颜色
            String ACTUAL_COST_COLOR = "#4B87F3";
            //实际收入 颜色
            String ACTUAL_INCOME_COLOR = "#4B87F4";


            //累计计划成本 颜色
            String TOTAL_PLAN_COST_COLOR = "#4B87F1";
            //累计计划收入 颜色
            String TOTAL_PLAN_INCOME_COLOR = "#4B87F2";
            //累计计划利润 颜色
            String TOTAL_PLAN_PROFIT_COLOR = "#4B87F3";
            //累计实际成本 颜色
            String TOTAL_ACTUAL_COST_COLOR = "#4B87F4";
            //累计实际收入 颜色
            String TOTAL_ACTUAL_INCOME_COLOR = "#4B87F5";
            //累计实际利润 颜色
            String TOTAL_ACTUAL_PROFIT_COLOR = "#4B87F6";
        }

        //项目经营中的颜色常量
        interface  Manage{
            //房建 颜色
            String FANG_JIAN_COLOR = "#9A661D";
            //市政 颜色
            String SHI_ZHENG_COLOR = "#AA1B3D";
            //累计 颜色
            String TOTAL_FJ_SZ_COLOR = "#1F5BD4";

        }


    }

    /**
     * @author cuizq
     * @description 图例名称
     * @date 2019-02-22 13:21:10
     */
    public interface Name {
        String CONTRACT_PLAN = "计划";
        String CONTRACT_REAL = "实际";

        String PURCHASE_CENTRALIZED_SCALE = "集采占比";
        String PURCHASE_AMOUNT = "采购金额";
        String PURCHASE_TYPE_OTHER = "其他";


        String FILED_OTHER = "其他";
        String FILED_JUNIOR_ENGINEER = "初级工程师";
        String FILED_INTERMEDIATE_ENGINEER = "中级工程师";
        String FILED_SENIOR_ENGINEER = "高级工程师";
        String FILED_EXPERT = "专家及以上";


        String FILED_OTHER_DIPLOMA = "其他";
        String FILED_SPECIALTY = "专科";
        String FILED_UNDERGRADUATE = "本科";
        String FILED_OVER_UNDERGRADUATE = "本科以上";

        String WORKER_RATE = "劳务占比";
        String DONGBEI = "东北区";
        String HUADONG = "华东区";
        String HUABEI = "华北区";
        String HUAZHONG = "华中区";
        String HUANAN = "华南区";
        String XINAN = "西南区";
        String XIBEI = "西北区";

        String HOLDER_RATE = "持证";
        String UNHOLDER_RATE = "其他";

        String PLAN_COST = "计划成本";
        String PLAN_INCOME = "计划收入";
        String ACTUAL_COST = "实际成本";
        String ACTUAL_INCOME = "实际收入";

        String TOTAL_PLAN_COST = "累计计划成本";
        String TOTAL_PLAN_INCOME = "累计计划收入";
        String TOTAL_PLAN_PROFIT = "累计计划利润";
        String TOTAL_ACTUAL_COST = "累计实际成本";
        String TOTAL_ACTUAL_INCOME = "累计实际收入";
        String TOTAL_ACTUAL_PROFIT = "累计实际利润";

        String QS_HIGH = "优质";
        String QS_QUALIFIED = "合格";
        String QS_OTHER = "其他";

        String FANG_JIAN = "房建";
        String SHI_ZHENG = "市政";
        String TOTAL_FJ_SZ = "累计";
    }
}

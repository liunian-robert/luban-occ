package com.lubansoft.occ.admin.common.model;


import java.util.concurrent.ConcurrentHashMap;

/**
 * 系统日志类
 * @author zhangyapo
 * @date 2018/1/23 10:43
 */
public abstract class SystemLog {

    public static final String QUAOTATION_MARK = "\"%\"";
    public static final String PERCENT_MARK = "%";
    public static final String OPERATE_PREFFIX ="将 ";
    public static final String OPERATE_SPLIT ="由 ";
    public static final String ADD_OPERATE = "新增了";
    public static final String CUSTOM_MOD_OPERATE = "修改了";
    public static final String DELETE_OPERATE = "删除了";
    public static final String MOD_OPERATE = "变更为";
    public static final String RECOVER_OPERATE = "还原为";


    public static final int ADD = 1;
    public static final int MOD = 2;
    public static final int DEL = 3;
    public static final int REC = 4;

    /**
     * 获取新增操作对应的operobject
     *
     * @param moduleName
     * @return
     * @throws Exception
     * @author zhangyapo
     * @date 2018/1/23 15:25
     **/
    public String getAddOperObject(String moduleName) {
        return SystemLog.ADD_OPERATE + moduleName;
    }

    /**
     * 获取更新操作作对应的operobject
     *
     * @param moduleName
     * @return
     * @throws Exception
     * @author zhangyapo
     * @date 2018/1/23 15:25
     **/
    public String getCustomModOperObject(String moduleName) {
        return SystemLog.CUSTOM_MOD_OPERATE + moduleName;
    }

    /**
     * 获取更新操作作对应的operobject
     *
     * @param filedName
     * @return
     * @throws Exception
     * @author zhangyapo
     * @date 2018/1/23 15:25
     **/
    public String getModOperObject(String filedName, String from, String to) {
        return SystemLog.OPERATE_PREFFIX + filedName +SystemLog.OPERATE_SPLIT+from + SystemLog.MOD_OPERATE + to;
    }

    /**
     * 获取删除操作作对应的operobject(不满足要求的自己覆盖该方法)
     * @param moduleName
     * @return
     * @throws Exception
     * @author zhangyapo
     * @date 2018/1/23 15:25
     **/
    public String getDelOperObject(String moduleName){
        return SystemLog.DELETE_OPERATE + moduleName;
    }


    /**
     * 获取还原操作对应的operobject(不满足要求的自己覆盖该方法)
     * @param filedName
     * @return
     * @throws Exception
     * @author zhangyapo
     * @date 2018/1/23 15:25
     **/
    private String getRecovOperContent(String filedName,String from,String to) {
        return SystemLog.OPERATE_PREFFIX + filedName +SystemLog.OPERATE_SPLIT+from + SystemLog.RECOVER_OPERATE + to;
    }

    public static String getModuleName(String moduleType) {
        String module = null;
        switch(moduleType){
            case "go_con_met":
            case "go_con_met_company":
                module = new ContractLog().ContractLog.MODULE;
                break;
            case "go_con_amount":
                module = new ContractLog().ContractLog.MODULE_AMOUNT;
                break;
            case "go_hr_staff":
                module = new HumanResourceLog().HumanResourceLog.MODULE_DEPT_STAFF;
                break;
            case "go_hr_ebopp":
                module = new HumanResourceLog().HumanResourceLog.MODULE_ORG_EBOPP;
                break;
            case "go_hr_topp":
                module = new HumanResourceLog().HumanResourceLog.MODULE_ORG_TOPP;
                break;
            case "go_hr_worker":
            case "go_hr_worker_company":
                module = new HumanResourceLog().HumanResourceLog.MODULE_DEPT_WORKER;
                break;
            case "go_srq_harvest":
                module = new ScientificLog().ScientificLog.MODULE_ORG_HARVEST;
                break;
            case "go_srq_subject":
                module = new ScientificLog().ScientificLog.MODULE_ORG_SUBJECT;
                break;
            case "go_qs_qc":
            case "go_qs_qc_company":
                module = new SafetyQualifiedLog().SafetyQualifiedLog.MODULE__DEPT_QUANLITY_QUALIFIED;
                break;
            case "go_qs_qe":
            case "go_qs_qe_company":
                module = new SafetyQualifiedLog().SafetyQualifiedLog.MODULE_ORG_QUANLITY_ENGINEER;
                break;
            case "go_qs_sa":
            case "go_qs_sa_company":
                module = new SafetyQualifiedLog().SafetyQualifiedLog.MODULE_DEPT_SAFETY_ACCIDENT;
                break;
            case "go_mp_procurement":
            case "go_mp_procurement_company":
                module = new MaterialProcurementLog().MaterialProcurementLog.MODULE;
                break;
            case "1":
                module = EnterpriseNewsLog.getInstance().MODULE_ENT_NEWS;
                break;
            case "2":
                module = EnterpriseNewsLog.getInstance().MODULE_PARTY_NEWS;
                break;
            case "3":
                module = EnterpriseNewsLog.getInstance().MODULE_UNION_NEWS;
                break;
            case "go_pro_com":
                module = ProjectManagementLog.getInstance().MODULE_PROFIT_COMPARISON;
                break;
            case "go_pro_norm":
                module = ProjectManagementLog.getInstance().MODULE_PROFIT_NORM;
                break;
            case "go_funds_trend":
                module = ProjectManagementLog.getInstance().MODULE_FUNDS_TREND;
                break;
            default:
                module="";
                break;
        }
        return module;
    }

    public static String getRecovOperObject(String moduleType,String filedType,String from,String to) {
        String content = null;
        switch(moduleType){
            case "go_con_met":
            case "go_con_met_company":
                content = SystemLog.OPERATE_PREFFIX + ContractLog.getInstance().getFiled(filedType) +SystemLog.OPERATE_SPLIT+from + SystemLog.RECOVER_OPERATE + to;
                break;
            case "go_con_amount":
                content = SystemLog.OPERATE_PREFFIX + ContractLog.getInstance().getFiled(filedType) +SystemLog.OPERATE_SPLIT+from + SystemLog.RECOVER_OPERATE + to;
                break;
            case "go_hr_staff":
            case "go_hr_worker":
            case "go_hr_ebopp":
            case "go_hr_topp":
            case "go_hr_worker_company":
                content = SystemLog.OPERATE_PREFFIX + HumanResourceLog.getInstance().getFiled(filedType) +SystemLog.OPERATE_SPLIT+from + SystemLog.RECOVER_OPERATE + to;
                break;
            case "go_srq_harvest":
            case "go_srq_subject":
                content = SystemLog.OPERATE_PREFFIX + ScientificLog.getInstance().getFiled(filedType) +SystemLog.OPERATE_SPLIT+from + SystemLog.RECOVER_OPERATE + to;
                break;
            case "go_qs_qc":
            case "go_qs_qc_company":
            case "go_qs_qe":
            case "go_qs_qe_company":
            case "go_qs_sa":
            case "go_qs_sa_company":
                content = SystemLog.OPERATE_PREFFIX + SafetyQualifiedLog.getInstance().getFiled(filedType) +SystemLog.OPERATE_SPLIT+from + SystemLog.RECOVER_OPERATE + to;
                break;
            case "go_mp_procurement":
            case "go_mp_procurement_company":
                content = SystemLog.OPERATE_PREFFIX + MaterialProcurementLog.getInstance().getFiled(filedType) +SystemLog.OPERATE_SPLIT+from + SystemLog.RECOVER_OPERATE + to;
                break;
            case "go_pro_com":
            case "go_pro_norm":
            case "go_funds_trend":
                content = SystemLog.OPERATE_PREFFIX + ProjectManagementLog.getInstance().getFiled(filedType) +SystemLog.OPERATE_SPLIT+from + SystemLog.RECOVER_OPERATE + to;
                break;
            default:
                content="";
                break;
        }
        return content;
    }


    //安全质量
    public static class SafetyQualifiedLog extends SystemLog {
        public static final String MODULE="安全质量";
        public static final String MODULE_DEPT_SAFETY_ACCIDENT = "安全事故率";
        public static final String MODULE__DEPT_QUANLITY_QUALIFIED = "质量合格率";
        public static final String MODULE_DEPT_QUANLITY_ENGINEER = "优质工程名单";

        public static final String MODULE_ORG_SAFETY_ACCIDENT = "安全事故率";
        public static final String MODULE__ORG_QUANLITY_QUALIFIED = "质量合格率";
        public static final String MODULE_ORG_QUANLITY_ENGINEER = "优质工程名单";

        public static final String FILED_GENERAL_ACCIDENT_QUANTITY="一般事故";
        public static final String FILED_MAJOR_ACCIDENT_QUANTIRY="重大事故";
        public static final String FILED_MAJOR_DEATH_QUANTIRY="重大事故死亡人数";
        public static final String FILED_NO_MAJOR_ITEM_DATE="无重大质量施工问题时间";

        public static SafetyQualifiedLog SafetyQualifiedLog = null;
        public static final ConcurrentHashMap<String,String> filedMap = new ConcurrentHashMap();
        private SafetyQualifiedLog() {
            filedMap.put("general_accident_quantity",FILED_GENERAL_ACCIDENT_QUANTITY);
            filedMap.put("major_accident_quantity",FILED_MAJOR_ACCIDENT_QUANTIRY);
            filedMap.put("major_death_quantity",FILED_MAJOR_DEATH_QUANTIRY);
            filedMap.put("no_major_item_date",FILED_NO_MAJOR_ITEM_DATE);
        }
        public String getFiled(String filedType) {
            return filedMap.get(filedType);
        }

        public static SafetyQualifiedLog getInstance() {
            if (SafetyQualifiedLog == null) {
                SafetyQualifiedLog = new SafetyQualifiedLog();
            }
            return SafetyQualifiedLog;
        }


    }

    //人力资源
    public static class ProjectManagementLog extends SystemLog {
        public static final String MODULE="项目经营";
        public static final String MODULE_CODE_PROFIT_COMPARISON = "go_pro_com";
        public static final String MODULE_CODE_PROFIT_NORM = "go_pro_norm";
        public static final String MODULE_CODE_FUNDS_TREND = "go_funds_trend";

        public static final String MODULE_PROFIT_COMPARISON = "利润对比";
        public static final String MODULE_PROFIT_NORM = "产值指标";
        public static final String MODULE_FUNDS_TREND = "资金走势";

        public static final String FILED_PLAN_INCOME="计划收入";
        public static final String FILED_ACTUAL_INCOME="实际收入";
        public static final String FILED_PLAN_COST="计划成本";
        public static final String FILED_ACTUAL_COST="实际成本";

        public static final String FILED_PLAN_OUTPUT_VALUE="计划产值";
        public static final String FILED_ACTUAL_OUTPUT_VALUE="实际产值";

        public static final String FILED_TOTAL_INCOME="总收入";
        public static final String FILED_TOTAL_COST="总支出";
        public static final String FILED_PRODUCT_COST="生产支出";
        public static final String FILED_MANAGE_COST="管理支出";

        private Integer totalWorkerNum;
        private Integer holderNum;
        private Integer unlicensedNum;
        public static final String FILED_TOTAL_WORKER_NUM="劳务总人数";
        public static final String FILED_HOLDER_NUM="持证人数";
        public static final String FILED_UNLICENSED_NUM="无证人数";

        public static ProjectManagementLog ProjectManagementLog = null;
        public static final ConcurrentHashMap<String,String> filedMap = new ConcurrentHashMap();

        private ProjectManagementLog() {
            filedMap.put("plan_income",FILED_PLAN_INCOME);
            filedMap.put("actual_income",FILED_ACTUAL_INCOME);
            filedMap.put("plan_cost",FILED_PLAN_COST);
            filedMap.put("actual_cost",FILED_ACTUAL_COST);


            filedMap.put("plan_output_value",FILED_PLAN_OUTPUT_VALUE);
            filedMap.put("actual_output_value",FILED_ACTUAL_OUTPUT_VALUE);

            filedMap.put("total_income",FILED_TOTAL_INCOME);
            filedMap.put("total_cost",FILED_TOTAL_COST);
            filedMap.put("product_cost",FILED_PRODUCT_COST);
            filedMap.put("manage_cost",FILED_MANAGE_COST);
        }

        public static ProjectManagementLog getInstance() {
            if (ProjectManagementLog == null) {
                ProjectManagementLog = new ProjectManagementLog();
            }
            return ProjectManagementLog;
        }
        public String getFiled(String filedType) {
            return filedMap.get(filedType);
        }

    }

    //人力资源
    public static class HumanResourceLog extends SystemLog {
        public static final String MODULE="人力资源";
        public static final String MODULE_CODE_DEPT_WORKER = "go_hr_worker";
        public static final String MODULE_CODE_DEPT_STAFF = "go_hr_staff";
        public static final String MODULE_DEPT_STAFF = "在职人员";
        public static final String MODULE_DEPT_WORKER = "劳务人员";

        public static final String MODULE_ORG_STAFF = "公司人员";
        public static final String MODULE_ORG_TOPP = "项目人员职称";
        public static final String MODULE_ORG_EBOPP = "项目人员学历";
        public static final String MODULE_ORG_WORKER = "劳务人员";

        public static final String FILED_OTHER_DIPLOMA="其他";
        public static final String FILED_SPECIALTY_NUM="专科人数";
        public static final String FILED_UNDERGRADUATE_NUM="本科人数";
        public static final String FILED_OVER_UNDERGRADUATE_NUM="本科以上人数";

        public static final String FILED_OTHER_NUM="其他";
        public static final String FILED_ASSISTANT_ENGINEER="助理工程师";
        public static final String FILED_JUNIOR_ENGINEER="初级工程师";
        public static final String FILED_INTERMEDIATE_ENGINEER="中级工程师";
        public static final String FILED_SENIOR_ENGINEER="高级工程师";
        public static final String FILED_EXPERT="专家及以上";

        private Integer totalWorkerNum;
        private Integer holderNum;
        private Integer unlicensedNum;
        public static final String FILED_TOTAL_WORKER_NUM="劳务总人数";
        public static final String FILED_HOLDER_NUM="持证人数";
        public static final String FILED_UNLICENSED_NUM="无证人数";

        public static HumanResourceLog HumanResourceLog = null;
        public static final ConcurrentHashMap<String,String> filedMap = new ConcurrentHashMap();

        private HumanResourceLog() {
            filedMap.put("other_diploma",FILED_OTHER_DIPLOMA);
            filedMap.put("specialty_num",FILED_SPECIALTY_NUM);
            filedMap.put("undergraduate_num",FILED_UNDERGRADUATE_NUM);
            filedMap.put("over_undergraduate_num",FILED_OVER_UNDERGRADUATE_NUM);


            filedMap.put("other_num",FILED_OTHER_NUM);
            filedMap.put("assistant_engineer",FILED_ASSISTANT_ENGINEER);
            filedMap.put("junior_engineer",FILED_JUNIOR_ENGINEER);
            filedMap.put("intermediate_engineer",FILED_INTERMEDIATE_ENGINEER);
            filedMap.put("senior_engineer",FILED_SENIOR_ENGINEER);
            filedMap.put("expert",FILED_EXPERT);

            filedMap.put("total_worker_num",FILED_TOTAL_WORKER_NUM);
            filedMap.put("holder_num",FILED_HOLDER_NUM);
            filedMap.put("unlicensed_num",FILED_UNLICENSED_NUM);
        }

        public static HumanResourceLog getInstance() {
            if (HumanResourceLog == null) {
                HumanResourceLog = new HumanResourceLog();
            }
            return HumanResourceLog;
        }
        public String getFiled(String filedType) {
            return filedMap.get(filedType);
        }

    }

    //合约指标
    public static class ContractLog extends SystemLog {
        public static final String MODULE="合约指标";
        public static final String MODULE_AMOUNT="计划签约";
        public static final String MODULE_CODE = "go_con_met";
        public static final String MODULE_AMOUNT_CODE="go_con_amount";
        public static final String MODULE_DEPT_CONTRACT = "合约指标";
        public static final String MODULE_ORG_CONTRACT = "合约指标";
        public static final String FILED_CONTRACT_MONEY="合同金额";
        public static final String FILED_AMOUNT="年度计划签约金额";

        public static ContractLog ContractLog = null;
        public static final ConcurrentHashMap<String,String> filedMap = new ConcurrentHashMap();
        public static ContractLog getInstance() {
            if (ContractLog == null) {
                ContractLog = new ContractLog();
            }
            return ContractLog;
        }

        private ContractLog() {
            filedMap.put("contract_money",FILED_CONTRACT_MONEY);
            filedMap.put("amount",FILED_AMOUNT);
        }

        public String getFiled(String filedType) {
            return filedMap.get(filedType);
        }


        /**
         * 获取新增操作对应的operobject
         *
         * @param moduleName
         * @return
         * @throws Exception
         * @author zhangyapo
         * @date 2018/1/23 15:25
         **/
        @Override
        public String getAddOperObject(String moduleName) {
            return super.getAddOperObject(moduleName);
        }

        /**
         * 获取更新操作作对应的operobject
         *
         * @param filedName
         * @param from
         * @param to
         * @return
         * @throws Exception
         * @author zhangyapo
         * @date 2018/1/23 15:25
         **/
        @Override
        public String getModOperObject(String filedName, String from, String to) {
            return super.getModOperObject(filedName, from, to);
        }

        /**
         * 获取删除操作作对应的operobject(不满足要求的自己覆盖该方法)
         *
         * @param moduleName
         * @return
         * @throws Exception
         * @author zhangyapo
         * @date 2018/1/23 15:25
         **/
        @Override
        public String getDelOperObject(String moduleName) {
            return super.getDelOperObject(moduleName);
        }
    }

    //集团新闻
    public static class EnterpriseNewsLog extends SystemLog {
        public static final String MODULE="集团新闻";
        public static final String MODULE_CODE = "go_com_news";

        public static final String MODULE_ENT_NEWS="集团新闻";
        public static final String MODULE_PARTY_NEWS="党建新闻";
        public static final String MODULE_UNION_NEWS="工会新闻";

        public static EnterpriseNewsLog EnterpriseNewsLog = null;
        public static final ConcurrentHashMap<String,String> filedMap = new ConcurrentHashMap();
        public static EnterpriseNewsLog getInstance() {
            if (EnterpriseNewsLog == null) {
                EnterpriseNewsLog = new EnterpriseNewsLog();
            }
            return EnterpriseNewsLog;
        }

        private EnterpriseNewsLog() {
        }


        public String getModule(int type) {
            String content = null;
            switch(type){
                case 1:
                    content = MODULE_ENT_NEWS;
                    break;
                case 2:
                    content = MODULE_PARTY_NEWS;
                    break;
                case 3:
                    content = MODULE_UNION_NEWS;
                    break;
                default:
                    content="";
                    break;
            }
            return content;
        }

        public String getFiled(String filedType) {
            return filedMap.get(filedType);
        }


        /**
         * 获取新增操作对应的operobject
         *
         * @param moduleName
         * @return
         * @throws Exception
         * @author zhangyapo
         * @date 2018/1/23 15:25
         **/
        @Override
        public String getAddOperObject(String moduleName) {
            return super.getAddOperObject(moduleName);
        }

        /**
         * 获取更新操作作对应的operobject
         *
         * @param filedName
         * @param from
         * @param to
         * @return
         * @throws Exception
         * @author zhangyapo
         * @date 2018/1/23 15:25
         **/
        @Override
        public String getModOperObject(String filedName, String from, String to) {
            return super.getModOperObject(filedName, from, to);
        }

        /**
         * 获取删除操作作对应的operobject(不满足要求的自己覆盖该方法)
         *
         * @param moduleName
         * @return
         * @throws Exception
         * @author zhangyapo
         * @date 2018/1/23 15:25
         **/
        @Override
        public String getDelOperObject(String moduleName) {
            return super.getDelOperObject(moduleName);
        }
    }
    //物资采购
    public static class MaterialProcurementLog extends SystemLog {
        public static final String MODULE="物资采购";
        public static final String MODULE_CODE = "go_mp_procurement";
        public static final String MODULE_CODE_ORG = "go_mp_procurement_company";
        public static final String MODULE_DEPT_MATERIAL_PROCUREMENT = "物资采购";
        public static final String MODULE_ORG_MATERIAL_PROCUREMENT = "物资采购";
        public static final String FILED_PURCHASE_MONEY="采购金额";

        public static MaterialProcurementLog MaterialProcurementLog = null;
        public static final ConcurrentHashMap<String,String> filedMap = new ConcurrentHashMap();
        private MaterialProcurementLog() {
            filedMap.put("purchase_money",FILED_PURCHASE_MONEY);
        }
        public String getFiled(String filedType) {
            return filedMap.get(filedType);
        }
        public static MaterialProcurementLog getInstance() {
            if (MaterialProcurementLog == null) {
                MaterialProcurementLog = new MaterialProcurementLog();
            }
            return MaterialProcurementLog;
        }

        /**
         * 获取新增操作对应的operobject
         *
         * @param moduleName
         * @return
         * @throws Exception
         * @author zhangyapo
         * @date 2018/1/23 15:25
         **/
        @Override
        public String getAddOperObject(String moduleName) {
            return super.getAddOperObject(moduleName);
        }

        /**
         * 获取更新操作作对应的operobject
         *
         * @param filedName
         * @param from
         * @param to
         * @return
         * @throws Exception
         * @author zhangyapo
         * @date 2018/1/23 15:25
         **/
        @Override
        public String getModOperObject(String filedName, String from, String to) {
            return super.getModOperObject(filedName, from, to);
        }

        /**
         * 获取删除操作作对应的operobject(不满足要求的自己覆盖该方法)
         *
         * @param moduleName
         * @return
         * @throws Exception
         * @author zhangyapo
         * @date 2018/1/23 15:25
         **/
        @Override
        public String getDelOperObject(String moduleName) {
            return super.getDelOperObject(moduleName);
        }

    }

    //科研指标
    public static class ScientificLog extends SystemLog {
        public static final String MODULE="科研指标";
        public static final String MODULE_CODE_SUBJECT = "go_srq_subject";
        public static final String MODULE_CODE_HARVEST = "go_srq_harvest";
        public static final String MODULE_ORG_HARVEST = "科研成果";
        public static final String MODULE_ORG_SUBJECT = "科研课题";
        public static final String FILED_RESEARCH_FUND="科研经费";
        public static final ConcurrentHashMap<String,String> filedMap = new ConcurrentHashMap();
        public static ScientificLog ScientificLog = null;

        private ScientificLog() {
            filedMap.put("research_fund",FILED_RESEARCH_FUND);
        }
        public String getFiled(String filedType) {
            return filedMap.get(filedType);
        }

        public static ScientificLog getInstance() {
            if (ScientificLog == null) {
                ScientificLog = new ScientificLog();
            }
            return ScientificLog;
        }

        /**
         * 获取新增操作对应的operobject
         *
         * @param moduleName
         * @return
         * @throws Exception
         * @author zhangyapo
         * @date 2018/1/23 15:25
         **/
        @Override
        public String getAddOperObject(String moduleName) {
            return super.getAddOperObject(moduleName);
        }

        /**
         * 获取删除操作作对应的operobject(不满足要求的自己覆盖该方法)
         *
         * @param moduleName
         * @return
         * @throws Exception
         * @author zhangyapo
         * @date 2018/1/23 15:25
         **/
        @Override
        public String getDelOperObject(String moduleName) {
            return super.getDelOperObject(moduleName);
        }

        /**
         * 获取更新操作作对应的operobject
         *
         * @param filedName
         * @param from
         * @param to
         * @return
         * @throws Exception
         * @author zhangyapo
         * @date 2018/1/23 15:25
         **/
        @Override
        public String getModOperObject(String filedName, String from, String to) {
            return super.getModOperObject(filedName, from, to);
        }

    }

}



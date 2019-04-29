package com.lubansoft.occ.admin.common.model;

import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

public enum Module {
    /**
     * 模块枚举类型
     */
    QS_SA("go_qs_sa",1),
    CON_MET("go_con_met",2),
    HR_STAFF("go_hr_staff",3),
    HR_WORKER("go_hr_worker",4),
    MP_PROCUREMENT("go_mp_procurement",5),
    SQR_HARVEST("go_srq_harvest",6),
    QS_NMP("go_qs_nmp",7),
    QS_SA_COMPANY("go_qs_sa_company",8),
    CON_MET_COMPANY("go_con_met_company",9),
    HR_TOPP("go_hr_topp",10),
    HR_EBOPP("go_hr_ebopp",11),
    HR_WORKER_COMPANY("go_hr_worker_company",12),
    MP_PROCUREMENT_COMPANY("go_mp_procurement_company",13),
    SQR_SUBJECT("go_srq_subject",14),
    GO_MAP("go_map", 15),
    QS_QC("go_qs_qc",16),
    MP_PTYPE("go_mp_ptype", 17),
    QS_QC_COMPANY("go_qs_qc_company",18),
    QS_QE("go_qs_qe",19),
    QS_QE_COMPANY("go_qs_qe_company",20),
    GO_CON_AMOUNT("go_con_amount",21),
    GO_PRO_COM("go_pro_com",22),
    GO_PRO_NORM("go_pro_norm",23),
    GO_FUNDS_TREND("go_funds_trend",24);


    public static ConcurrentHashMap<String,String> moduleMap = new ConcurrentHashMap<>();
    static {
        moduleMap.put("go_qs_sa","安全质量");
        moduleMap.put("go_qs_sa_company","安全质量");
        moduleMap.put("go_qs_qe","安全质量");
        moduleMap.put("go_qs_qe_company","安全质量");
        moduleMap.put("go_qs_qc","安全质量");
        moduleMap.put("go_qs_qc_company","安全质量");
        moduleMap.put("go_srq_harvest","科研指标");
        moduleMap.put("go_srq_subject","科研指标");
        moduleMap.put("go_hr_staff","科研指标");
    }

    public static String getModuleName(String modulecode) {
        return moduleMap.get(modulecode);
    }

    //成员变量
    private String name;
    private int index;

    //构造方法
    private Module(String name,int index){
        this.name = name;
        this.index = index;
    }

    //覆盖方法
    @Override
    public String toString() {
        return this.name;
    }
}

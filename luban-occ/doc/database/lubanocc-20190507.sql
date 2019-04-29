#计划签约金额
ALTER TABLE `go_con_amount`
ADD COLUMN `child_id`  varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '子节点ID' AFTER `update_at`;
ALTER TABLE `go_con_amount`
ADD COLUMN `sign_time`  datetime NOT NULL DEFAULT '0000-00-00 00:00:00' COMMENT '签约时间' AFTER `child_id`;
ALTER TABLE `go_con_amount`
ADD COLUMN `is_update`  tinyint(1) NOT NULL DEFAULT 0 COMMENT '是否更新(0:未更新 1：已经更新)' AFTER `sign_time`;
ALTER TABLE `go_con_amount`
ADD COLUMN `is_delete`  tinyint(1) NOT NULL DEFAULT 0 COMMENT '是否删除：0：未删除，1：删除' AFTER `is_update`;
ALTER TABLE `go_con_amount`
ADD COLUMN `origin`  tinyint(1) NOT NULL DEFAULT 0 COMMENT '数所来源(0:手动录入,1：汇总)' AFTER `is_delete`;

update go_con_amount set child_id = orgid where origin=0;

update go_con_amount set sign_time = create_at;

#实际签约金额汇总表
ALTER TABLE `go_con_met_company`
CHANGE COLUMN `dept_id` `child_id`  varchar(36) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '' COMMENT '子层级节点ID' AFTER `orgid`;


#资金走势
ALTER TABLE `go_funds_trend`
CHANGE COLUMN `dept_id` `child_id`  varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '' COMMENT '组织层级子层级ID' AFTER `orgid`;

#物资采购
update go_mp_ptype set org_type=1 where org_type=0;

#人力资源-在职人员添加人员所属
ALTER TABLE `go_hr_staff`
ADD COLUMN `belong`  varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '人员所属' AFTER `person_type`;
ALTER TABLE `go_hr_staff`
ADD COLUMN `origin`  tinyint(1) NOT NULL DEFAULT 0 COMMENT '数所来源(0:手动录入,1：汇总)' AFTER `belong`;

#人力资源-在职人员添加人员所属数据升级
update `go_hr_staff` set belong=org_id where origin=0;

#劳务人员汇总
ALTER TABLE `go_hr_worker_company`
CHANGE COLUMN `dept_id` `child_id`  varchar(36) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '' COMMENT '子层级结点ID' AFTER `orgid`;

#利润对比
ALTER TABLE `go_pro_com`
CHANGE COLUMN `dept_id` `child_id`  varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '' COMMENT '组织层级子层级节点ID' AFTER `orgid`;

#产值指标
ALTER TABLE `go_pro_norm`
CHANGE COLUMN `dept_id` `child_id`  varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '' COMMENT '公司层级子层级节点ID' AFTER `orgid`;
ALTER TABLE `go_pro_norm`
MODIFY COLUMN `plan_output_value`  decimal(20,2) NOT NULL DEFAULT 0 COMMENT '计划产值' AFTER `child_id`;
ALTER TABLE `go_pro_norm`
MODIFY COLUMN `actual_output_value`  decimal(20,2) NOT NULL DEFAULT 0 COMMENT '实际产值' AFTER `plan_output_value`;

# go_qs_qc_company`
ALTER TABLE `go_qs_qc_company`
CHANGE COLUMN `dept_id` `child_id`  varchar(36) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '' COMMENT '子结点层级ID' AFTER `orgid`;

#go_qs_qe_company
ALTER TABLE `go_qs_qe_company`
CHANGE COLUMN `dept_id` `child_id`  varchar(36) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '' COMMENT '子结点层级ID' AFTER `orgid`;

#go_qs_sa_company
ALTER TABLE `go_qs_sa_company`
CHANGE COLUMN `dept_id` `child_id`  varchar(36) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '' COMMENT '子结点层级ID' AFTER `orgid`;

#科研成果
ALTER TABLE `go_srq_harvest`
ADD COLUMN `child_id`  varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '' COMMENT '子结点ID' AFTER `org_id`;
ALTER TABLE `go_srq_harvest`
ADD COLUMN `origin`  tinyint(1) NOT NULL DEFAULT 0 COMMENT '数据来源(0：手动录入，1：数据汇总)' AFTER `child_id`;

update `go_srq_harvest` set child_id=org_id where origin=0;

#科研指标
ALTER TABLE `go_srq_subject`
ADD COLUMN `child_id`  varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '' COMMENT '子结点ID' AFTER `org_id`;
ALTER TABLE `go_srq_subject`
ADD COLUMN `origin`  tinyint(1) NOT NULL DEFAULT 0 COMMENT '数据来源(0：手动录入，1：数据汇总)' AFTER `child_id`;

update `go_srq_subject` set child_id=org_id where origin=0;




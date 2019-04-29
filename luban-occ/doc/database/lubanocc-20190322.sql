/*
Navicat MySQL Data Transfer

Source Server         : center(192.168.3.75)
Source Server Version : 50558
Source Host           : 192.168.3.75:3306
Source Database       : luban-occ

Target Server Type    : MYSQL
Target Server Version : 50558
File Encoding         : 65001

Date: 2019-03-18 16:39:38
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- 工程运营指挥中心采集端-合约指标年度计划签约金额表
-- ----------------------------
DROP TABLE IF EXISTS `go_con_amount`;
CREATE TABLE `go_con_amount` (
  `id` varchar(32) NOT NULL DEFAULT '' COMMENT '主键uuid',
  `epid` int(11) NOT NULL DEFAULT '0' COMMENT '企业id',
  `orgid` varchar(32) NOT NULL DEFAULT '' COMMENT '节点id',
  `org_type` tinyint(4) NOT NULL DEFAULT '1' COMMENT '节点类型，1：分公司，2：项目',
  `year` varchar(20) NOT NULL DEFAULT '' COMMENT '年度',
  `amount` decimal(20,3) NOT NULL DEFAULT '0.000' COMMENT '年度计划金额',
  `create_by` varchar(50) NOT NULL DEFAULT '' COMMENT '创建人',
  `create_at` datetime NOT NULL DEFAULT '0000-00-00 00:00:00' COMMENT '创建时间',
  `update_by` varchar(50) NOT NULL DEFAULT '' COMMENT '更新人',
  `update_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='合约指标年度计划签约金额表';

-- ----------------------------
-- 工程运营指挥中心采集端-合约指标表
-- ----------------------------
DROP TABLE IF EXISTS `go_con_met`;
CREATE TABLE `go_con_met` (
  `id` varchar(32) NOT NULL DEFAULT '' COMMENT '主键uuid',
  `epid` int(11) NOT NULL DEFAULT '0' COMMENT '企业id',
  `dept_id` varchar(36) NOT NULL DEFAULT '' COMMENT '项目部id',
  `number` varchar(50) NOT NULL DEFAULT '' COMMENT '合同编号',
  `contract_type` varchar(50) NOT NULL DEFAULT '' COMMENT '合同类型',
  `contract_money` decimal(20,2) NOT NULL DEFAULT '0.00' COMMENT '合同金额',
  `sign_time` datetime NOT NULL DEFAULT '0000-00-00 00:00:00' COMMENT '签约时间',
  `location_type` tinyint(1) NOT NULL DEFAULT '0' COMMENT '1:东北 2:华东 3：华北 4：华中 5：华南 6：西南 7:西北',
  `is_update` tinyint(4) NOT NULL DEFAULT '0' COMMENT '属性是否删除',
  `is_delete` tinyint(4) NOT NULL DEFAULT '0' COMMENT '软删除标志位，0：未删除，1：删除',
  `create_by` varchar(50) NOT NULL DEFAULT '' COMMENT '创建人员',
  `create_at` datetime NOT NULL DEFAULT '0000-00-00 00:00:00' COMMENT '创建时间',
  `update_by` varchar(50) NOT NULL DEFAULT '' COMMENT '更新人员',
  `update_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`),
  KEY `deptIdIndex` (`dept_id`) USING BTREE,
  KEY `signTimeIndex` (`sign_time`) USING BTREE,
  KEY `createAtIndex` (`create_at`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='工程运营指挥中心采集端-合约指标表';

-- ----------------------------
-- 工程运营指挥中心采集端-合约指标(汇总)表
-- ----------------------------
DROP TABLE IF EXISTS `go_con_met_company`;
CREATE TABLE `go_con_met_company` (
  `id` varchar(32) CHARACTER SET utf8 NOT NULL DEFAULT '' COMMENT '主键uuid',
  `epid` int(11) NOT NULL DEFAULT '0' COMMENT '企业id',
  `orgid` varchar(36) CHARACTER SET utf8 NOT NULL DEFAULT '' COMMENT '节点id',
  `dept_id` varchar(36) CHARACTER SET utf8 NOT NULL DEFAULT '' COMMENT '项目部id',
  `number` varchar(50) CHARACTER SET utf8 NOT NULL DEFAULT '' COMMENT '合约编号',
  `contract_type` varchar(50) CHARACTER SET utf8 NOT NULL DEFAULT '' COMMENT '合同类型',
  `contract_money` decimal(20,2) NOT NULL DEFAULT '0.00' COMMENT '合同金额',
  `sign_time` datetime NOT NULL DEFAULT '0000-00-00 00:00:00' COMMENT '签约时间',
  `location_type` tinyint(4) NOT NULL DEFAULT '0' COMMENT '1:东北 2:华东 3：华北 4：华中 5：华南 6：西南 7:西北',
  `is_update` int(11) NOT NULL DEFAULT '0' COMMENT '属性是否修改(0:不更新，1：更新)',
  `is_delete` tinyint(4) NOT NULL DEFAULT '0' COMMENT '是否删除(0:不删，1：删除)',
  `create_by` varchar(50) CHARACTER SET utf8 NOT NULL DEFAULT '' COMMENT '创建人',
  `create_at` datetime NOT NULL DEFAULT '0000-00-00 00:00:00' COMMENT '创建时间',
  `update_by` varchar(50) CHARACTER SET utf8 NOT NULL DEFAULT '' COMMENT '修改人',
  `update_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`),
  KEY `orgidIndex` (`orgid`) USING BTREE,
  KEY `deptIdIndex` (`orgid`) USING BTREE,
  KEY `signTimeIndex` (`sign_time`) USING BTREE,
  KEY `createAtIndex` (`create_at`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- 工程运营指挥中心采集端-集团新闻表
-- ----------------------------
DROP TABLE IF EXISTS `go_cop_news`;
CREATE TABLE `go_cop_news` (
  `id` varchar(32) CHARACTER SET utf8 NOT NULL COMMENT '集团新闻主键ID',
  `epid` int(11) NOT NULL COMMENT '企业ID',
  `orgid` varchar(32) CHARACTER SET utf8 NOT NULL COMMENT '组织结构ID',
  `title` varchar(100) CHARACTER SET utf8 NOT NULL DEFAULT '' COMMENT '新闻标题',
  `content` mediumtext CHARACTER SET utf8 NOT NULL COMMENT '新闻内容',
  `cover` varchar(32) CHARACTER SET utf8 NOT NULL DEFAULT '' COMMENT '封面uuid',
  `type` tinyint(1) NOT NULL DEFAULT '0' COMMENT '新闻类型(1:集团新闻 2:党建新闻 3:工会新闻)',
  `time` datetime NOT NULL DEFAULT '2019-02-23 18:15:43' COMMENT '新闻发布时间',
  `is_delete` tinyint(1) NOT NULL DEFAULT '0' COMMENT '是否删除(0:已经删除 1:删除)',
  `create_at` datetime NOT NULL DEFAULT '0000-00-00 00:00:00' COMMENT '创建时间',
  `create_by` varchar(50) CHARACTER SET utf8 NOT NULL DEFAULT '' COMMENT '创建人',
  `update_by` varchar(50) CHARACTER SET utf8 NOT NULL DEFAULT '' COMMENT '更新人',
  `update_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`),
  KEY `orgidIndex` (`orgid`) USING BTREE,
  KEY `timeIndex` (`time`) USING BTREE,
  KEY `createAtIndex` (`create_at`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- 工程运营指挥中心采集端-集团新闻附件表
-- ----------------------------
DROP TABLE IF EXISTS `go_cop_news_attachment`;
CREATE TABLE `go_cop_news_attachment` (
  `id` varchar(32) CHARACTER SET utf8 NOT NULL COMMENT '集团新闻主键ID',
  `epid` int(11) NOT NULL COMMENT '企业ID',
  `file_name` varchar(100) CHARACTER SET utf8 NOT NULL DEFAULT '' COMMENT '封面名称',
  `uuid` varchar(32) CHARACTER SET utf8 NOT NULL DEFAULT '' COMMENT '封面文件ID',
  `md5` varchar(32) CHARACTER SET utf8 NOT NULL COMMENT '文件MD5',
  `file_size` bigint(20) NOT NULL DEFAULT '0' COMMENT '文件大小',
  `type` tinyint(1) NOT NULL DEFAULT '0' COMMENT '附件类型(1:封面附件 2:内容附件)',
  `news_id` varchar(32) CHARACTER SET utf8 NOT NULL COMMENT '新闻ID',
  `is_delete` tinyint(1) NOT NULL DEFAULT '0' COMMENT '是否删除(0:已经删除 1:删除)',
  `create_at` datetime NOT NULL DEFAULT '0000-00-00 00:00:00' COMMENT '创建时间',
  `create_by` varchar(50) CHARACTER SET utf8 NOT NULL DEFAULT '' COMMENT '创建人',
  `update_by` varchar(50) CHARACTER SET utf8 NOT NULL DEFAULT '' COMMENT '更新人',
  `update_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- 工程运营指挥中心采集端-资金走势表
-- ----------------------------
DROP TABLE IF EXISTS `go_funds_trend`;
CREATE TABLE `go_funds_trend` (
  `id` varchar(32) CHARACTER SET utf8 NOT NULL DEFAULT '' COMMENT '资金走势主键',
  `epid` int(11) NOT NULL COMMENT '企业ID',
  `orgid` varchar(32) CHARACTER SET utf8 NOT NULL COMMENT '组织结构ID',
  `dept_id` varchar(32) CHARACTER SET utf8 DEFAULT '' COMMENT '直属项目部或分公司ID',
  `total_income` decimal(20,2) NOT NULL DEFAULT '0.00' COMMENT '总收入',
  `total_cost` decimal(20,2) NOT NULL DEFAULT '0.00' COMMENT '总支出',
  `product_cost` decimal(20,2) NOT NULL DEFAULT '0.00' COMMENT '生产支出',
  `manage_cost` decimal(20,2) NOT NULL DEFAULT '0.00' COMMENT '管理支出',
  `total_income_update` tinyint(1) NOT NULL DEFAULT '0' COMMENT '总收入是否更改(0：未更改 1：更改)',
  `total_cost_update` tinyint(1) NOT NULL DEFAULT '0' COMMENT '总支出是否更改(0：未更改 1：更改)',
  `product_cost_update` tinyint(1) NOT NULL DEFAULT '0' COMMENT '生产支出是否更改(0：未更改 1：更改)',
  `manage_cost_update` tinyint(1) NOT NULL DEFAULT '0' COMMENT '管理支出是否更改(0：未更改 1：更改)',
  `is_update` tinyint(1) NOT NULL DEFAULT '0' COMMENT '字段是否有更新',
  `is_delete` tinyint(1) NOT NULL DEFAULT '0' COMMENT '是否删除(0:未删除 1:删除)',
  `time` datetime NOT NULL COMMENT '时间',
  `origin` tinyint(1) NOT NULL DEFAULT '0' COMMENT '数据来源(0:手动录入 1：govern同步)',
  `org_type` tinyint(1) NOT NULL COMMENT '组织结构类型(1：公司，2:项目部)',
  `create_at` datetime NOT NULL DEFAULT '0000-00-00 00:00:00' COMMENT '创建时间',
  `create_by` varchar(50) CHARACTER SET utf8 NOT NULL DEFAULT '' COMMENT '创建人',
  `update_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  `update_by` varchar(50) CHARACTER SET utf8 NOT NULL DEFAULT '' COMMENT '更新人',
  PRIMARY KEY (`id`),
  KEY `orgidIndex` (`orgid`) USING BTREE,
  KEY `deptIndex` (`dept_id`) USING BTREE,
  KEY `timeIndex` (`time`) USING BTREE,
  KEY `createAtIndex` (`create_at`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- 工程运营指挥中心采集端-修改历史记录表
-- ----------------------------
DROP TABLE IF EXISTS `go_history`;
CREATE TABLE `go_history` (
  `id` varchar(32) CHARACTER SET utf8 NOT NULL DEFAULT '' COMMENT '主键uuid',
  `epid` int(11) NOT NULL DEFAULT '0' COMMENT '企业id',
  `orgid` varchar(36) CHARACTER SET utf8 NOT NULL DEFAULT '' COMMENT '节点id',
  `org_type` tinyint(4) NOT NULL DEFAULT '0' COMMENT '节点类型(1:分公司 2：项目)',
  `module_type` varchar(50) CHARACTER SET utf8 NOT NULL DEFAULT '' COMMENT '模块类型',
  `data_id` varchar(32) CHARACTER SET utf8 NOT NULL DEFAULT '' COMMENT '数据id',
  `field_type` varchar(50) CHARACTER SET utf8 NOT NULL DEFAULT '' COMMENT '字段类型',
  `field_value` varchar(100) CHARACTER SET utf8 NOT NULL DEFAULT '' COMMENT '字段值',
  `create_by` varchar(50) CHARACTER SET utf8 NOT NULL DEFAULT '' COMMENT '创建人',
  `create_at` datetime NOT NULL DEFAULT '0000-00-00 00:00:00' COMMENT '创建时间',
  `is_init_data` tinyint(4) NOT NULL DEFAULT '0' COMMENT '是否初始值',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- 工程运营指挥中心采集端-学历汇总表
-- ----------------------------
DROP TABLE IF EXISTS `go_hr_ebopp`;
CREATE TABLE `go_hr_ebopp` (
  `id` varchar(32) CHARACTER SET utf8 NOT NULL DEFAULT '' COMMENT '主键uuid',
  `epid` int(11) NOT NULL DEFAULT '0' COMMENT '企业id',
  `orgid` varchar(36) CHARACTER SET utf8 NOT NULL DEFAULT '' COMMENT '节点id',
  `dept_id` varchar(36) CHARACTER SET utf8 NOT NULL DEFAULT '' COMMENT '项目部id',
  `specialty_num` int(11) NOT NULL DEFAULT '0' COMMENT '专科人数',
  `undergraduate_num` int(11) NOT NULL DEFAULT '0' COMMENT '本科人数',
  `over_undergraduate_num` int(11) NOT NULL DEFAULT '0' COMMENT '本科以上人数',
  `other_diploma` int(11) NOT NULL DEFAULT '0' COMMENT '其他文凭人数',
  `specialty_num_update` tinyint(1) NOT NULL DEFAULT '0',
  `undergraduate_num_update` tinyint(1) NOT NULL,
  `over_undergraduate_num_update` tinyint(1) NOT NULL DEFAULT '0',
  `other_diploma_update` tinyint(1) NOT NULL DEFAULT '0',
  `is_update` int(11) NOT NULL DEFAULT '0' COMMENT '属性是否修改',
  `is_delete` tinyint(4) NOT NULL DEFAULT '0' COMMENT '是否删除',
  `create_by` varchar(50) CHARACTER SET utf8 NOT NULL DEFAULT '' COMMENT '创建人',
  `create_at` datetime NOT NULL DEFAULT '0000-00-00 00:00:00' COMMENT '创建时间',
  `update_by` varchar(50) CHARACTER SET utf8 NOT NULL DEFAULT '' COMMENT '修改人',
  `update_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- 工程运营指挥中心采集端-员工表
-- ----------------------------
DROP TABLE IF EXISTS `go_hr_staff`;
CREATE TABLE `go_hr_staff` (
  `id` varchar(32) NOT NULL DEFAULT '' COMMENT '主键uuid',
  `epid` int(11) NOT NULL DEFAULT '0' COMMENT '企业id',
  `org_id` varchar(36) NOT NULL DEFAULT '' COMMENT '组织节点id',
  `person_name` varchar(50) NOT NULL DEFAULT '' COMMENT '人员姓名',
  `id_card` varchar(32) NOT NULL DEFAULT '' COMMENT '身份证',
  `work_years` tinyint(4) NOT NULL DEFAULT '0' COMMENT '工作年限',
  `education` tinyint(4) NOT NULL DEFAULT '0' COMMENT '学历，1：专科，2：本科，3：本科及以上 4:其他',
  `position` varchar(50) NOT NULL DEFAULT '' COMMENT '职位',
  `profession` tinyint(4) NOT NULL DEFAULT '0' COMMENT '职称,1：无，2：助理工程师，3：初级工程师，4：中级工程师，5：高级工程师，6：专家及以上',
  `person_type` tinyint(4) NOT NULL DEFAULT '0' COMMENT '人员类型,1：公司，2:项目部',
  `is_delete` tinyint(4) NOT NULL DEFAULT '0' COMMENT '软删除标志位，0：未删除，1：删除',
  `create_by` varchar(50) NOT NULL DEFAULT '' COMMENT '创建人员',
  `create_at` datetime NOT NULL DEFAULT '0000-00-00 00:00:00' COMMENT '创建时间',
  `update_by` varchar(50) NOT NULL DEFAULT '' COMMENT '更新人员',
  `update_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='工程运营指挥中心采集端-员工表';

-- ----------------------------
-- 工程运营指挥中心采集端-职称汇总表
-- ----------------------------
DROP TABLE IF EXISTS `go_hr_topp`;
CREATE TABLE `go_hr_topp` (
  `id` varchar(32) CHARACTER SET utf8 NOT NULL DEFAULT '' COMMENT '主键uuid',
  `epid` int(11) NOT NULL DEFAULT '0' COMMENT '企业id',
  `orgid` varchar(36) CHARACTER SET utf8 NOT NULL DEFAULT '' COMMENT '节点id',
  `dept_id` varchar(36) CHARACTER SET utf8 NOT NULL DEFAULT '' COMMENT '项目部id',
  `other_num` int(11) NOT NULL DEFAULT '0' COMMENT '其他',
  `assistant_engineer` int(11) NOT NULL DEFAULT '0' COMMENT '助理工程师',
  `junior_engineer` int(11) NOT NULL DEFAULT '0' COMMENT '初级工程师',
  `intermediate_engineer` int(11) NOT NULL DEFAULT '0' COMMENT '中级工程师',
  `senior_engineer` int(11) NOT NULL DEFAULT '0' COMMENT '高级工程师',
  `expert` int(11) NOT NULL DEFAULT '0' COMMENT '专家及以上',
  `other_num_update` tinyint(1) NOT NULL,
  `assistant_engineer_update` tinyint(1) NOT NULL DEFAULT '0',
  `junior_engineer_update` tinyint(4) NOT NULL DEFAULT '0',
  `intermediate_engineer_update` tinyint(4) NOT NULL DEFAULT '0',
  `senior_engineer_update` tinyint(4) NOT NULL DEFAULT '0',
  `expert_update` tinyint(1) NOT NULL DEFAULT '0',
  `is_update` int(11) NOT NULL DEFAULT '0' COMMENT '属性是否修改',
  `is_delete` tinyint(4) NOT NULL DEFAULT '0' COMMENT '是否删除',
  `create_by` varchar(50) CHARACTER SET utf8 NOT NULL DEFAULT '' COMMENT '创建人',
  `create_at` datetime NOT NULL DEFAULT '0000-00-00 00:00:00' COMMENT '创建时间',
  `update_by` varchar(50) CHARACTER SET utf8 NOT NULL DEFAULT '' COMMENT '修改人',
  `update_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- 工程运营指挥中心采集端-劳务人员表
-- ----------------------------
DROP TABLE IF EXISTS `go_hr_worker`;
CREATE TABLE `go_hr_worker` (
  `id` varchar(32) NOT NULL DEFAULT '' COMMENT '主键uuid',
  `epid` int(11) NOT NULL DEFAULT '0' COMMENT '企业id',
  `dept_id` varchar(36) NOT NULL DEFAULT '' COMMENT '项目部id',
  `person_name` varchar(50) NOT NULL DEFAULT '' COMMENT '人员姓名',
  `id_card` varchar(36) NOT NULL DEFAULT '' COMMENT '身份证',
  `work_type` varchar(50) NOT NULL DEFAULT '' COMMENT '工种',
  `certificate` varchar(50) NOT NULL DEFAULT '' COMMENT '持证情况',
  `location_type` tinyint(1) NOT NULL DEFAULT '0' COMMENT '1:东北 2:华东 3：华北 4：华中 5：华南 6：西南 7:西北',
  `is_delete` tinyint(4) NOT NULL DEFAULT '0' COMMENT '软删除标志位，0：未删除，1：删除',
  `create_by` varchar(50) NOT NULL DEFAULT '' COMMENT '创建人员',
  `create_at` datetime NOT NULL DEFAULT '0000-00-00 00:00:00' COMMENT '创建时间',
  `update_by` varchar(50) NOT NULL DEFAULT '' COMMENT '更新人员',
  `update_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`),
  KEY `deptIdIndex` (`dept_id`) USING BTREE,
  KEY `createAtIndex` (`create_at`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='工程运营指挥中心采集端-劳务人员表';

-- ----------------------------
-- 工程运营指挥中心采集端-劳务人员(汇总)表
-- ----------------------------
DROP TABLE IF EXISTS `go_hr_worker_company`;
CREATE TABLE `go_hr_worker_company` (
  `id` varchar(32) CHARACTER SET utf8 NOT NULL DEFAULT '' COMMENT '主键uuid',
  `epid` int(11) NOT NULL DEFAULT '0' COMMENT '企业id',
  `orgid` varchar(36) CHARACTER SET utf8 NOT NULL DEFAULT '' COMMENT '节点id',
  `dept_id` varchar(36) CHARACTER SET utf8 NOT NULL DEFAULT '' COMMENT '项目部id',
  `total_worker_num` int(11) NOT NULL DEFAULT '0' COMMENT '劳务总人数',
  `holder_num` int(11) NOT NULL DEFAULT '0' COMMENT '持证人数',
  `unlicensed_num` int(11) NOT NULL DEFAULT '0' COMMENT '无证人数',
  `location_type` tinyint(1) NOT NULL DEFAULT '0' COMMENT '1:东北 2:华东 3：华北 4：华中 5：华南 6：西南 7:西北',
  `total_worker_num_update` tinyint(2) NOT NULL DEFAULT '0' COMMENT '总劳务人数更新状态',
  `holder_num_update` tinyint(2) NOT NULL DEFAULT '0' COMMENT '有证人数更新状态',
  `unlicensed_num_update` tinyint(2) NOT NULL DEFAULT '0' COMMENT '无证人数更新状态',
  `is_update` int(11) NOT NULL DEFAULT '0' COMMENT '属性是否修改',
  `is_delete` tinyint(4) NOT NULL DEFAULT '0' COMMENT '是否删除',
  `create_by` varchar(50) CHARACTER SET utf8 NOT NULL DEFAULT '' COMMENT '创建人',
  `create_at` datetime NOT NULL DEFAULT '0000-00-00 00:00:00' COMMENT '创建时间',
  `update_by` varchar(50) CHARACTER SET utf8 NOT NULL DEFAULT '' COMMENT '修改人',
  `update_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`),
  KEY `orgidIndex` (`orgid`) USING BTREE,
  KEY `deptIdIndex` (`dept_id`) USING BTREE,
  KEY `createAtIndex` (`create_at`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- 工程运营指挥中心采集端-类型表
-- ----------------------------
DROP TABLE IF EXISTS `go_map`;
CREATE TABLE `go_map` (
  `id` varchar(32) NOT NULL COMMENT '主键uuid',
  `epid` varchar(20) NOT NULL DEFAULT '' COMMENT '企业id',
  `value` tinyint(4) NOT NULL DEFAULT '0' COMMENT '序号',
  `type` tinyint(4) NOT NULL DEFAULT '0' COMMENT '对应类型',
  `key` varchar(20) NOT NULL COMMENT '名称缩写',
  `name` varchar(200) NOT NULL DEFAULT '' COMMENT '对应名称',
  `sort` tinyint(4) NOT NULL DEFAULT '0' COMMENT '排序',
  `create_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `orgid` varchar(36) NOT NULL DEFAULT '' COMMENT '节点id，当org_type=1时该字段存分公司id，org_type=2时该字段存项目id',
  `org_type` tinyint(4) NOT NULL DEFAULT '1' COMMENT '节点类型',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='工程运营指挥中心采集端-映射表';

-- ----------------------------
-- 初始化工程运营指挥中心采集端-类型表
-- ----------------------------
INSERT INTO `go_map` VALUES ('1', '0', '1', '1', 'wmgd', '文明工地', '1', '2018-12-20 21:13:40', '', '1');
INSERT INTO `go_map` VALUES ('10', '0', '1', '4', 'zlgcs', '助理工程师', '1', '2018-12-20 21:13:40', '', '1');
INSERT INTO `go_map` VALUES ('11', '0', '2', '4', 'cjgcs', '初级工程师', '2', '2018-12-20 21:13:40', '', '1');
INSERT INTO `go_map` VALUES ('12', '0', '3', '4', 'zjgcs', '中级工程师', '3', '2018-12-20 21:13:40', '', '1');
INSERT INTO `go_map` VALUES ('13', '0', '4', '4', 'gjgcs', '高级工程师', '4', '2018-12-20 21:13:40', '', '1');
INSERT INTO `go_map` VALUES ('14', '0', '5', '4', 'zjjys', '专家及以上', '5', '2018-12-20 21:13:40', '', '1');
INSERT INTO `go_map` VALUES ('15', '0', '6', '4', 'wu', '无', '6', '2018-12-20 21:13:40', '', '1');
INSERT INTO `go_map` VALUES ('16', '0', '1', '5', 'jzcg', '集中采购', '1', '2018-12-20 21:13:40', '', '1');
INSERT INTO `go_map` VALUES ('17', '0', '2', '5', 'hycg', '合约采购', '2', '2018-12-20 21:13:40', '', '1');
INSERT INTO `go_map` VALUES ('18', '0', '3', '5', 'ybcg', '一般采购', '3', '2018-12-20 21:13:40', '', '1');
INSERT INTO `go_map` VALUES ('19', '0', '1', '6', 'gjjkt', '国家级课题', '1', '2018-12-20 21:13:40', '', '1');
INSERT INTO `go_map` VALUES ('2', '0', '2', '1', 'ptgd', '普通工地', '2', '2018-12-20 21:13:40', '', '1');
INSERT INTO `go_map` VALUES ('20', '0', '2', '6', 'ssjkt', '省市级课题', '2', '2018-12-20 21:13:40', '', '1');
INSERT INTO `go_map` VALUES ('21', '0', '3', '6', 'qyjkt', '企业级课题', '3', '2018-12-20 21:13:40', '', '1');
INSERT INTO `go_map` VALUES ('3', '0', '1', '2', 'yzgc', '优秀', '1', '2018-12-20 21:13:40', '', '1');
INSERT INTO `go_map` VALUES ('4', '0', '2', '2', 'hggc', '合格', '2', '2018-12-20 21:13:40', '', '1');
INSERT INTO `go_map` VALUES ('5', '0', '3', '2', 'bhggc', '不合格', '3', '2018-12-20 21:13:40', '', '1');
INSERT INTO `go_map` VALUES ('6', '0', '1', '3', 'zk', '专科', '1', '2018-12-20 21:13:40', '', '1');
INSERT INTO `go_map` VALUES ('7', '0', '2', '3', 'bk', '本科', '2', '2018-12-20 21:13:40', '', '1');
INSERT INTO `go_map` VALUES ('8', '0', '3', '3', 'bkjys', '本科以上', '3', '2018-12-20 21:13:40', '', '1');
INSERT INTO `go_map` VALUES ('9', '0', '4', '3', 'qt', '其他', '4', '2018-12-20 21:13:40', '', '1');

-- ----------------------------
-- 工程运营指挥中心采集端-项目监控表
-- ----------------------------
DROP TABLE IF EXISTS `go_monitor_video`;
CREATE TABLE `go_monitor_video` (
  `id` varchar(32) CHARACTER SET utf8 NOT NULL COMMENT '监控关注',
  `epid` int(11) NOT NULL COMMENT '企业ID',
  `orgid` varchar(32) CHARACTER SET utf8 NOT NULL COMMENT '组织结构ID',
  `ppid` bigint(20) NOT NULL COMMENT '代理工程ID',
  `camera_key` varchar(100) CHARACTER SET utf8 NOT NULL COMMENT '相机Key',
  `is_attention` tinyint(1) NOT NULL DEFAULT '0' COMMENT '是否关注(0：未关注 1：关注)',
  `is_hidden` tinyint(1) NOT NULL DEFAULT '0' COMMENT '是否隐藏(0：未隐藏 1：隐藏)',
  `org_type` tinyint(1) NOT NULL DEFAULT '1' COMMENT '组织结构类型(1：公司，2:项目部)',
  `create_by` varchar(50) CHARACTER SET utf8 NOT NULL DEFAULT '' COMMENT '创建人',
  `create_at` datetime NOT NULL DEFAULT '0000-00-00 00:00:00' COMMENT '创建时间',
  `update_by` varchar(50) CHARACTER SET utf8 NOT NULL DEFAULT '' COMMENT '更新人',
  `update_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`),
  KEY `orgidIndex` (`orgid`) USING BTREE,
  KEY `ppidIndex` (`ppid`) USING BTREE,
  KEY `cameraKeyIndex` (`camera_key`) USING BTREE,
  KEY `createAtIndex` (`create_at`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- 工程运营指挥中心采集端-物资采购表
-- ----------------------------
DROP TABLE IF EXISTS `go_mp_procurement`;
CREATE TABLE `go_mp_procurement` (
  `id` varchar(32) NOT NULL DEFAULT '' COMMENT '主键uuid',
  `epid` int(11) NOT NULL DEFAULT '0' COMMENT '企业id',
  `orgid` varchar(32) NOT NULL DEFAULT '' COMMENT '节点id',
  `dept_id` varchar(32) NOT NULL DEFAULT '' COMMENT '项目部id',
  `purchase_type` varchar(50) NOT NULL DEFAULT '' COMMENT '采购类型',
  `purchase_way` tinyint(4) NOT NULL DEFAULT '0' COMMENT '采购方式，1：集中采购，2：合约采购，3：一般采购',
  `purchase_money` decimal(20,3) NOT NULL DEFAULT '0.000' COMMENT '采购金额',
  `purchase_time` datetime NOT NULL DEFAULT '0000-00-00 00:00:00' COMMENT '采购时间',
  `is_update` tinyint(4) NOT NULL DEFAULT '0' COMMENT '属性值是否修改，0：未修改，1：已修改',
  `is_delete` tinyint(4) NOT NULL DEFAULT '0' COMMENT '软删除标志位，0：未删除，1：删除',
  `create_by` varchar(50) NOT NULL DEFAULT '' COMMENT '创建人员',
  `create_at` datetime NOT NULL DEFAULT '0000-00-00 00:00:00' COMMENT '创建时间',
  `update_by` varchar(50) NOT NULL DEFAULT '' COMMENT '更新人员',
  `update_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`),
  KEY `orgidIndex` (`orgid`) USING BTREE,
  KEY `deptIdIndex` (`dept_id`) USING BTREE,
  KEY `purchaseTimeIndex` (`purchase_time`) USING BTREE,
  KEY `createAtIndex` (`create_at`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='工程运营指挥中心采集端-物资采购表(项目级)';

-- ----------------------------
-- 工程运营指挥中心采集端-物资采购(汇总)表
-- ----------------------------
DROP TABLE IF EXISTS `go_mp_procurement_company`;
CREATE TABLE `go_mp_procurement_company` (
  `id` varchar(32) CHARACTER SET utf8 NOT NULL DEFAULT '' COMMENT '主键uuid',
  `epid` int(11) NOT NULL DEFAULT '0' COMMENT '企业id',
  `orgid` varchar(36) CHARACTER SET utf8 NOT NULL DEFAULT '' COMMENT '节点id',
  `dept_id` varchar(36) CHARACTER SET utf8 NOT NULL DEFAULT '' COMMENT '项目部id',
  `purchase_type` varchar(50) CHARACTER SET utf8 NOT NULL DEFAULT '' COMMENT '采购类型',
  `purchase_way` tinyint(4) NOT NULL DEFAULT '0' COMMENT '采购方式，1：集中采购，2：合约采购，3：一般采购',
  `purchase_money` decimal(20,3) NOT NULL DEFAULT '0.000' COMMENT '采购金额',
  `purchase_time` datetime NOT NULL DEFAULT '0000-00-00 00:00:00' COMMENT '采购时间',
  `is_update` int(11) NOT NULL DEFAULT '0' COMMENT '属性值是否修改，0：未修改，1：已修改',
  `is_delete` tinyint(4) NOT NULL DEFAULT '0' COMMENT '是否删除',
  `create_by` varchar(50) CHARACTER SET utf8 NOT NULL DEFAULT '' COMMENT '创建人',
  `create_at` datetime NOT NULL DEFAULT '0000-00-00 00:00:00' COMMENT '创建时间',
  `update_by` varchar(50) CHARACTER SET utf8 NOT NULL DEFAULT '' COMMENT '修改人',
  `update_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`),
  KEY `orgidIndex` (`orgid`) USING BTREE,
  KEY `deptIdIndex` (`dept_id`) USING BTREE,
  KEY `purchaseTimeIndex` (`purchase_time`) USING BTREE,
  KEY `createAtIndex` (`create_at`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='工程运营指挥中心采集端-物资采购表(分公司级)';

-- ----------------------------
-- 工程运营指挥中心采集端-物资采购-采购类型表
-- ----------------------------
DROP TABLE IF EXISTS `go_mp_ptype`;
CREATE TABLE `go_mp_ptype` (
  `id` varchar(32) NOT NULL DEFAULT '' COMMENT '主键uuid',
  `purchase_type` varchar(50) NOT NULL DEFAULT '' COMMENT '采购类型',
  `epid` int(11) NOT NULL DEFAULT '0' COMMENT '企业id',
  `org_type` tinyint(4) NOT NULL DEFAULT '1' COMMENT '节点类型，0:企业，1：分公司，2：项目',
  `org_id` varchar(32) NOT NULL DEFAULT '' COMMENT '节点id',
  `create_by` varchar(50) NOT NULL DEFAULT '' COMMENT '创建人',
  `create_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00' ON UPDATE CURRENT_TIMESTAMP COMMENT '创建时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='采购类型表，存放用于大屏显示所用的采购类型。公司级和项目级都存在此表，以org_type和org_id来区分。';

-- ----------------------------
-- 工程运营指挥中心采集端-操作日志表
-- ----------------------------
DROP TABLE IF EXISTS `go_operation_log`;
CREATE TABLE `go_operation_log` (
  `id` varchar(32) NOT NULL COMMENT '日志ID',
  `orgid` varchar(32) NOT NULL COMMENT '组织机构ID',
  `epid` int(11) NOT NULL COMMENT '企业ID',
  `username` varchar(32) NOT NULL COMMENT '用户名',
  `module_code` varchar(32) NOT NULL COMMENT '操作模块code',
  `module_name` varchar(32) NOT NULL COMMENT '操作模块名称',
  `org_name` varchar(200) NOT NULL COMMENT '组织机构名称',
  `operation_content` text NOT NULL COMMENT '操作内容',
  `operation_type` int(4) NOT NULL COMMENT '操作类型(1:新增2:删除3:更新4:还原)',
  `type` int(4) NOT NULL COMMENT '操作层级(0:分公司 1:项目部)',
  `operation_date` datetime NOT NULL COMMENT '操作时间',
  `create_by` varchar(50) NOT NULL DEFAULT '' COMMENT '创建人员',
  PRIMARY KEY (`id`),
  KEY `usernameIndex` (`username`) USING BTREE,
  KEY `operationDateIndex` (`operation_date`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT COMMENT='采集系统操作日志';

-- ----------------------------
-- 工程运营指挥中心采集端-利润对比表
-- ----------------------------
DROP TABLE IF EXISTS `go_pro_com`;
CREATE TABLE `go_pro_com` (
  `id` varchar(32) CHARACTER SET utf8 NOT NULL DEFAULT '' COMMENT '利润对比主键',
  `epid` int(11) NOT NULL COMMENT '企业ID',
  `orgid` varchar(32) CHARACTER SET utf8 NOT NULL COMMENT '组织结构ID',
  `dept_id` varchar(32) CHARACTER SET utf8 NOT NULL DEFAULT '' COMMENT '直属项目部或分公司ID',
  `plan_income` decimal(20,2) NOT NULL DEFAULT '0.00' COMMENT '计划收入',
  `actual_income` decimal(20,2) NOT NULL DEFAULT '0.00' COMMENT '实际收入',
  `plan_cost` decimal(20,2) NOT NULL DEFAULT '0.00' COMMENT '计划成本',
  `actual_cost` decimal(20,2) NOT NULL DEFAULT '0.00' COMMENT '实际成本',
  `plan_income_update` tinyint(1) NOT NULL DEFAULT '0' COMMENT '计划收入是否更改(0：未更改 1：更改)',
  `actual_income_update` tinyint(1) NOT NULL DEFAULT '0' COMMENT '实际收入是否更改(0：未更改 1：更改)',
  `plan_cost_update` tinyint(1) NOT NULL DEFAULT '0' COMMENT '计划成本是否更改(0：未更改 1：更改)',
  `actual_cost_update` tinyint(1) NOT NULL DEFAULT '0' COMMENT '实际成本是否更改(0：未更改 1：更改)',
  `is_update` tinyint(1) NOT NULL DEFAULT '0' COMMENT '字段是否有更新',
  `is_delete` tinyint(1) NOT NULL DEFAULT '0' COMMENT '是否删除(0:未删除 1:删除)',
  `time` datetime NOT NULL COMMENT '时间',
  `origin` tinyint(1) NOT NULL DEFAULT '0' COMMENT '数据来源(0:手动录入 1：govern同步)',
  `org_type` tinyint(1) NOT NULL COMMENT '组织结构类型(1：公司，2:项目部)',
  `create_at` datetime NOT NULL DEFAULT '0000-00-00 00:00:00' COMMENT '创建时间',
  `create_by` varchar(50) CHARACTER SET utf8 NOT NULL DEFAULT '' COMMENT '创建人',
  `update_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  `update_by` varchar(50) CHARACTER SET utf8 NOT NULL DEFAULT '' COMMENT '更新人',
  PRIMARY KEY (`id`),
  KEY `orgidIndex` (`orgid`) USING BTREE,
  KEY `deptIdIndex` (`dept_id`) USING BTREE,
  KEY `timeIndex` (`time`) USING BTREE,
  KEY `createAtIndex` (`create_at`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- 工程运营指挥中心采集端-产值指标表
-- ----------------------------
DROP TABLE IF EXISTS `go_pro_norm`;
CREATE TABLE `go_pro_norm` (
  `id` varchar(32) CHARACTER SET utf8 NOT NULL DEFAULT '' COMMENT '产值指标主键ID',
  `epid` int(11) NOT NULL COMMENT '企业ID',
  `orgid` varchar(32) CHARACTER SET utf8 NOT NULL COMMENT '组织结构ID',
  `dept_id` varchar(32) CHARACTER SET utf8 NOT NULL DEFAULT '' COMMENT '直属项目部或分公司ID',
  `plan_output_value` decimal(20,0) NOT NULL DEFAULT '0' COMMENT '计划产值',
  `actual_output_value` decimal(20,0) NOT NULL DEFAULT '0' COMMENT '实际产值',
  `plan_output_value_update` tinyint(1) NOT NULL DEFAULT '0' COMMENT '计划产值是否更改(0：未更改 1：更改)',
  `actual_output_value_update` tinyint(1) NOT NULL DEFAULT '0' COMMENT '实际产值是否更改(0：未更改 1：更改)',
  `is_update` tinyint(1) NOT NULL DEFAULT '0' COMMENT '字段是否有更新',
  `is_delete` tinyint(1) NOT NULL DEFAULT '0' COMMENT '是否删除(0:未删除 1:删除)',
  `time` datetime NOT NULL COMMENT '时间',
  `origin` tinyint(1) NOT NULL DEFAULT '0' COMMENT '数据来源(0:手动录入 1：govern同步)',
  `org_type` tinyint(1) NOT NULL COMMENT '组织结构类型(1：公司，2:项目部)',
  `location_type` tinyint(1) NOT NULL DEFAULT '0' COMMENT '1:东北 2:华东 3：华北 4：华中 5：华南 6：西南 7:西北',
  `project_type` tinyint(1) NOT NULL DEFAULT '1' COMMENT '项目类型：1:房建 2： 基建',
  `create_at` datetime NOT NULL DEFAULT '0000-00-00 00:00:00' COMMENT '创建时间',
  `create_by` varchar(50) CHARACTER SET utf8 NOT NULL DEFAULT '' COMMENT '创建人',
  `update_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  `update_by` varchar(50) CHARACTER SET utf8 NOT NULL DEFAULT '' COMMENT '更新人',
  PRIMARY KEY (`id`),
  KEY `orgidIndex` (`orgid`) USING BTREE,
  KEY `deptIdIndex` (`dept_id`) USING BTREE,
  KEY `timeIndex` (`time`) USING BTREE,
  KEY `createAt` (`create_at`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- 工程运营指挥中心采集端-无重大问题时间表
-- ----------------------------
DROP TABLE IF EXISTS `go_qs_nmp`;
CREATE TABLE `go_qs_nmp` (
  `id` varchar(32) CHARACTER SET utf8 NOT NULL DEFAULT '' COMMENT '主键uuid',
  `epid` int(11) NOT NULL DEFAULT '0' COMMENT '企业id',
  `orgid` varchar(36) CHARACTER SET utf8 NOT NULL DEFAULT '' COMMENT '项目部id',
  `org_type` tinyint(2) NOT NULL DEFAULT '0' COMMENT '组织结点类型 0:企业 1：分公司 2：项目部',
  `module_type` varchar(50) CHARACTER SET utf8 NOT NULL DEFAULT '' COMMENT '模块类型',
  `no_major_item_date` datetime NOT NULL DEFAULT '0000-00-00 00:00:00' COMMENT '无重大问题时间',
  `is_update` tinyint(1) NOT NULL DEFAULT '0' COMMENT '是否更新(0：未更新 1：更新)',
  `create_by` varchar(50) CHARACTER SET utf8 NOT NULL DEFAULT '' COMMENT '创建人',
  `create_at` datetime NOT NULL DEFAULT '0000-00-00 00:00:00' COMMENT '创建时间',
  `update_by` varchar(50) CHARACTER SET utf8 NOT NULL DEFAULT '' COMMENT '更新人员',
  `update_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- 工程运营指挥中心采集端-质量合格率表
-- ----------------------------
DROP TABLE IF EXISTS `go_qs_qc`;
CREATE TABLE `go_qs_qc` (
  `id` varchar(32) NOT NULL DEFAULT '' COMMENT '主键uuid',
  `epid` int(11) NOT NULL DEFAULT '0' COMMENT '企业id',
  `dept_id` varchar(36) NOT NULL DEFAULT '' COMMENT '项目部id',
  `evaluation_id` tinyint(4) NOT NULL DEFAULT '0' COMMENT '工地评比情况，1：文明工地，2：普通工地',
  `qualified_id` tinyint(4) NOT NULL DEFAULT '0' COMMENT '质量合格情况，1：优秀工程，2：合格工程，3：不合格工程',
  `evaluation_time` datetime NOT NULL DEFAULT '0000-00-00 00:00:00' COMMENT '评比时间',
  `is_delete` tinyint(4) NOT NULL DEFAULT '0' COMMENT '软删除标志位，0：未删除，1：删除',
  `create_by` varchar(50) NOT NULL DEFAULT '' COMMENT '创建人员',
  `create_at` datetime NOT NULL DEFAULT '0000-00-00 00:00:00' COMMENT '创建时间',
  `update_by` varchar(50) NOT NULL DEFAULT '' COMMENT '更新人员',
  `update_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`),
  KEY `deptIdIndex` (`dept_id`) USING BTREE,
  KEY `evaluationTimeIndex` (`evaluation_time`) USING BTREE,
  KEY `createAtIndex` (`create_at`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='工程运营指挥中心采集端-质量合格率表';

-- ----------------------------
-- 工程运营指挥中心采集端-质量合格率(汇总)表
-- ----------------------------
DROP TABLE IF EXISTS `go_qs_qc_company`;
CREATE TABLE `go_qs_qc_company` (
  `id` varchar(32) CHARACTER SET utf8 NOT NULL DEFAULT '' COMMENT '主键uuid',
  `epid` int(11) NOT NULL DEFAULT '0' COMMENT '企业id',
  `orgid` varchar(36) CHARACTER SET utf8 NOT NULL DEFAULT '' COMMENT '节点id',
  `dept_id` varchar(36) CHARACTER SET utf8 NOT NULL DEFAULT '' COMMENT '项目部id',
  `evaluation_id` tinyint(4) NOT NULL DEFAULT '0' COMMENT '公司评比情况',
  `qualified_id` tinyint(4) NOT NULL DEFAULT '0' COMMENT '质量合格情况',
  `evaluation_time` datetime NOT NULL DEFAULT '0000-00-00 00:00:00' COMMENT '评比时间',
  `is_delete` tinyint(4) NOT NULL DEFAULT '0' COMMENT '是否删除',
  `create_by` varchar(50) CHARACTER SET utf8 NOT NULL DEFAULT '' COMMENT '创建人',
  `create_at` datetime NOT NULL DEFAULT '0000-00-00 00:00:00' COMMENT '创建时间',
  `update_by` varchar(50) CHARACTER SET utf8 NOT NULL DEFAULT '' COMMENT '修改人',
  `update_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`),
  KEY `orgidIndex` (`orgid`) USING BTREE,
  KEY `deptIdIndex` (`dept_id`) USING BTREE,
  KEY `evaluationTimeIndex` (`evaluation_time`) USING BTREE,
  KEY `createAtIndex` (`create_at`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- 工程运营指挥中心采集端-优质工程表
-- ----------------------------
DROP TABLE IF EXISTS `go_qs_qe`;
CREATE TABLE `go_qs_qe` (
  `id` varchar(32) NOT NULL DEFAULT '' COMMENT '主键uuid',
  `epid` int(11) NOT NULL DEFAULT '0' COMMENT '企业id',
  `dept_id` varchar(36) NOT NULL DEFAULT '' COMMENT '项目部id',
  `award` varchar(50) NOT NULL DEFAULT '' COMMENT '获奖情况',
  `award_time` datetime NOT NULL DEFAULT '0000-00-00 00:00:00' COMMENT '获奖时间',
  `is_delete` tinyint(4) NOT NULL DEFAULT '0' COMMENT '软删除标志位，0：未删除，1：删除',
  `create_by` varchar(50) NOT NULL DEFAULT '' COMMENT '创建人员',
  `create_at` datetime NOT NULL DEFAULT '0000-00-00 00:00:00' COMMENT '创建时间',
  `update_by` varchar(50) NOT NULL DEFAULT '' COMMENT '更新人员',
  `update_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`),
  KEY `deptIdIndex` (`dept_id`) USING BTREE,
  KEY `awardTimeIndex` (`award_time`) USING BTREE,
  KEY `createAtIndex` (`create_at`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='工程运营指挥中心采集端-优质工程表';

-- ----------------------------
-- 工程运营指挥中心采集端-优质工程(汇总)表
-- ----------------------------
DROP TABLE IF EXISTS `go_qs_qe_company`;
CREATE TABLE `go_qs_qe_company` (
  `id` varchar(32) CHARACTER SET utf8 NOT NULL DEFAULT '' COMMENT '主键uuid',
  `epid` int(11) NOT NULL DEFAULT '0' COMMENT '企业id',
  `orgid` varchar(36) CHARACTER SET utf8 NOT NULL DEFAULT '' COMMENT '节点id',
  `dept_id` varchar(36) CHARACTER SET utf8 NOT NULL DEFAULT '' COMMENT '项目部id',
  `award` varchar(50) CHARACTER SET utf8 NOT NULL DEFAULT '' COMMENT '获奖情况',
  `award_time` datetime NOT NULL DEFAULT '0000-00-00 00:00:00' COMMENT '获奖时间',
  `is_delete` tinyint(4) NOT NULL DEFAULT '0' COMMENT '是否删除',
  `create_by` varchar(50) CHARACTER SET utf8 NOT NULL DEFAULT '' COMMENT '创建人',
  `create_at` datetime NOT NULL DEFAULT '0000-00-00 00:00:00' COMMENT '创建时间',
  `update_by` varchar(50) CHARACTER SET utf8 NOT NULL DEFAULT '' COMMENT '修改人',
  `update_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`),
  KEY `orgidIndex` (`orgid`) USING BTREE,
  KEY `deptIdIndex` (`dept_id`) USING BTREE,
  KEY `awardTimeIndex` (`award_time`) USING BTREE,
  KEY `createAtIndex` (`create_at`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- 工程运营指挥中心采集端-安全事故率表
-- ----------------------------
DROP TABLE IF EXISTS `go_qs_sa`;
CREATE TABLE `go_qs_sa` (
  `id` varchar(32) NOT NULL DEFAULT '' COMMENT '主键uuid',
  `epid` int(11) NOT NULL DEFAULT '0' COMMENT '企业id',
  `dept_id` varchar(36) NOT NULL DEFAULT '' COMMENT '项目部id',
  `general_accident_quantity` int(11) NOT NULL DEFAULT '0' COMMENT '一般事故数量',
  `major_accident_quantity` int(11) NOT NULL DEFAULT '0' COMMENT '重大事故数量',
  `major_death_quantity` int(11) NOT NULL DEFAULT '0' COMMENT '重大事故死亡人数',
  `general_accident_quantity_update` tinyint(2) NOT NULL DEFAULT '0' COMMENT '一般安全事故更新状态',
  `major_accident_quantity_update` tinyint(2) NOT NULL DEFAULT '0' COMMENT '重大事故更新状态',
  `major_death_quantity_update` tinyint(2) NOT NULL DEFAULT '0' COMMENT '重大死亡人数的更新状态',
  `count_time` datetime NOT NULL DEFAULT '0000-00-00 00:00:00' COMMENT '时间',
  `is_update` tinyint(4) NOT NULL DEFAULT '0' COMMENT '属性是否修改 二进制标识 0000表示无字段修改',
  `is_delete` tinyint(4) NOT NULL DEFAULT '0' COMMENT '软删除标志位，0：未删除，1：删除',
  `create_by` varchar(50) NOT NULL DEFAULT '' COMMENT '创建人员',
  `create_at` datetime NOT NULL DEFAULT '0000-00-00 00:00:00' COMMENT '创建时间',
  `update_by` varchar(50) NOT NULL DEFAULT '' COMMENT '更新人员',
  `update_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00' ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`),
  KEY `deptIdIndex` (`dept_id`) USING BTREE,
  KEY `countTimeIndex` (`count_time`) USING BTREE,
  KEY `createAtIndex` (`create_at`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='工程运营指挥中心采集端-安全事故率表';

-- ----------------------------
-- 工程运营指挥中心采集端-安全事故率(汇总)表
-- ----------------------------
DROP TABLE IF EXISTS `go_qs_sa_company`;
CREATE TABLE `go_qs_sa_company` (
  `id` varchar(32) CHARACTER SET utf8 NOT NULL DEFAULT '' COMMENT '主键uuid',
  `epid` int(11) NOT NULL DEFAULT '0' COMMENT '企业id',
  `orgid` varchar(36) CHARACTER SET utf8 NOT NULL DEFAULT '' COMMENT '节点id',
  `dept_id` varchar(36) CHARACTER SET utf8 NOT NULL DEFAULT '' COMMENT '项目部id',
  `general_accident_quantity` int(11) NOT NULL DEFAULT '0' COMMENT '一般事故数量',
  `major_accident_quantity` int(11) NOT NULL DEFAULT '0' COMMENT '重大事故数量',
  `major_death_quantity` int(11) NOT NULL DEFAULT '0' COMMENT '重大事故死亡人数',
  `general_accident_quantity_update` tinyint(2) NOT NULL DEFAULT '0' COMMENT '一般事故的更新状态',
  `major_accident_quantity_update` tinyint(2) NOT NULL DEFAULT '0' COMMENT '重大事故的更新状态',
  `major_death_quantity_update` tinyint(2) NOT NULL DEFAULT '0' COMMENT '重大死亡人数的更新状态',
  `count_time` datetime NOT NULL DEFAULT '0000-00-00 00:00:00' COMMENT '统计时间',
  `is_update` int(11) NOT NULL DEFAULT '0' COMMENT '属性是否修改',
  `is_delete` tinyint(4) NOT NULL DEFAULT '0' COMMENT '是否删除',
  `create_by` varchar(50) CHARACTER SET utf8 NOT NULL DEFAULT '' COMMENT '创建人',
  `create_at` datetime NOT NULL DEFAULT '0000-00-00 00:00:00' COMMENT '创建时间',
  `update_by` varchar(50) CHARACTER SET utf8 NOT NULL DEFAULT '' COMMENT '修改人',
  `update_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`),
  KEY `orgidIndex` (`orgid`) USING BTREE,
  KEY `deptIdIndex` (`dept_id`) USING BTREE,
  KEY `countTimeIndex` (`count_time`) USING BTREE,
  KEY `createAtIndex` (`create_at`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- 工程运营指挥中心采集端-科研成果表
-- ----------------------------
DROP TABLE IF EXISTS `go_srq_harvest`;
CREATE TABLE `go_srq_harvest` (
  `id` varchar(32) NOT NULL DEFAULT '' COMMENT '主键uuid',
  `epid` int(11) NOT NULL DEFAULT '0' COMMENT '企业id',
  `org_id` varchar(36) NOT NULL DEFAULT '' COMMENT '组织节点id',
  `org_type` tinyint(4) NOT NULL DEFAULT '0' COMMENT '节点类型，1：公司，2：项目部',
  `topic` varchar(50) NOT NULL DEFAULT '' COMMENT '科研主题',
  `awards` varchar(50) NOT NULL DEFAULT '' COMMENT '获奖情况',
  `research_fund` decimal(20,2) NOT NULL DEFAULT '0.00' COMMENT '科研经费',
  `award_time` datetime NOT NULL DEFAULT '0000-00-00 00:00:00' COMMENT '获奖时间',
  `is_update` tinyint(4) NOT NULL DEFAULT '0' COMMENT '属性值是否修改，0：未修改，1：已修改',
  `is_delete` tinyint(4) NOT NULL DEFAULT '0' COMMENT '软删除标志位，0：未删除，1：删除',
  `create_by` varchar(50) NOT NULL DEFAULT '' COMMENT '创建人员',
  `create_at` datetime NOT NULL DEFAULT '0000-00-00 00:00:00' COMMENT '创建时间',
  `update_by` varchar(50) NOT NULL DEFAULT '' COMMENT '更新人员',
  `update_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`),
  KEY `orgidIndex` (`org_id`) USING BTREE,
  KEY `awardTimeIndex` (`award_time`) USING BTREE,
  KEY `createAtIndex` (`create_at`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='工程运营指挥中心采集端-科研成果表';

-- ----------------------------
-- 工程运营指挥中心采集端-科研课题表
-- ----------------------------
DROP TABLE IF EXISTS `go_srq_subject`;
CREATE TABLE `go_srq_subject` (
  `id` varchar(32) NOT NULL DEFAULT '' COMMENT '主键uuid',
  `epid` int(11) NOT NULL DEFAULT '0' COMMENT '企业id',
  `org_id` varchar(36) NOT NULL DEFAULT '' COMMENT '组织节点id',
  `org_type` tinyint(4) NOT NULL DEFAULT '0' COMMENT '节点类型，1：公司，2：项目部',
  `name` varchar(50) NOT NULL DEFAULT '' COMMENT '课题名称',
  `level` tinyint(4) NOT NULL DEFAULT '0' COMMENT '课题级别，1：国家级课题，2：省市级课题，3：企业级课题',
  `declare_time` datetime NOT NULL DEFAULT '0000-00-00 00:00:00' COMMENT '申报时间',
  `is_delete` tinyint(4) NOT NULL DEFAULT '0' COMMENT '软删除标志位，0：未删除，1：删除',
  `create_by` varchar(50) NOT NULL DEFAULT '' COMMENT '创建人员',
  `create_at` datetime NOT NULL DEFAULT '0000-00-00 00:00:00' COMMENT '创建时间',
  `update_by` varchar(50) NOT NULL DEFAULT '' COMMENT '更新人员',
  `update_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`),
  KEY `orgidIndex` (`org_id`) USING BTREE,
  KEY `declareTimeIndex` (`declare_time`) USING BTREE,
  KEY `createAtIndex` (`create_at`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='工程运营指挥中心采集端-科研课题表';

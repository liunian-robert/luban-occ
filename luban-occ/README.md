# 相关组件
springBoot、 disconf、Dubbo、Mybatis、Pagehelper、Druid、Mysql

#  系统说明
1.采用JDK1.8及以上
2.除disconf自身配置文件启动时由jvm参数指定外，其他配置文件采用@Configuration配置类方式加载，
  2.1) disconf配置文件映射目录包：com.lubansoft.occ.web.common.disconf.component
  2.2) Configuration配置类所在目录包：com.lubansoft.occ.web.common.configuration

# JVM启动变量设置
# -Dcom.lubansoft.app.config.dir=F:/config/config-occ/ 
-Dcom.lubansoft.app.log.dir=F:/config/config-occ/log/ 
-Ddisconf.conf=F:/config/config-occ/disconf.properties 
-Dserver.port=8089 -Dserver.servlet.context-path=/luban-occ-web
-Dfile.encoding=utf-8 
-Xms1024M -Xmx2048M -server -XX:PermSize=256M -XX:MaxPermSize=512M

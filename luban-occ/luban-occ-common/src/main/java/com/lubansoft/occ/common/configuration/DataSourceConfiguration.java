package com.lubansoft.occ.common.configuration;

import com.alibaba.druid.pool.DruidDataSource;
import com.lubansoft.occ.common.disconf.component.DataSourceConfig;
import com.lubansoft.occ.common.util.CustomLogger;
import org.apache.ibatis.session.SqlSessionFactory;
import org.mybatis.spring.SqlSessionFactoryBean;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.boot.autoconfigure.AutoConfigureAfter;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;
import org.springframework.jdbc.datasource.DataSourceTransactionManager;

import javax.sql.DataSource;

@Configuration
@AutoConfigureAfter(DisconfConfiguration.class)
@MapperScan(basePackages = {"com.lubansoft.occ.web.**.dao"}, sqlSessionFactoryRef = "sqlSessionFactory")
public class DataSourceConfiguration {

	@Autowired
    private DataSourceConfig dataSourceConfig;
	
	/**
	 * 	加入到Spring容器中，并扫描spring.datasource前缀的配置
	 * @return
	 * @throws Exception 
	 */
    @Bean(name = "dataSource")
    @Primary
    public DataSource dataSource() throws Exception{
    	CustomLogger.getLog().info("初始化数据库连接池");
        DruidDataSource datasource = new DruidDataSource();
        datasource.setUrl(dataSourceConfig.getUrl());  
        datasource.setUsername(dataSourceConfig.getUsername());  
        datasource.setPassword(dataSourceConfig.getPassword());  
        datasource.setDriverClassName(dataSourceConfig.getDriverClassName());  
  
        //configuration  
        datasource.setInitialSize(dataSourceConfig.getInitialSize());  
        datasource.setMinIdle(dataSourceConfig.getMinIdle());  
        datasource.setMaxActive(dataSourceConfig.getMaxActive());  
        datasource.setMaxWait(dataSourceConfig.getMaxWait());  
        datasource.setTimeBetweenEvictionRunsMillis(dataSourceConfig.getTimeBetweenEvictionRunsMillis());  
        datasource.setValidationQuery(dataSourceConfig.getValidationQuery());  
        datasource.setTestWhileIdle(dataSourceConfig.getTestWhileIdle());  
        datasource.setTestOnBorrow(dataSourceConfig.getTestOnBorrow());  
        datasource.setTestOnReturn(dataSourceConfig.getTestOnReturn());  
        datasource.setPoolPreparedStatements(dataSourceConfig.getPoolPreparedStatements());  
        datasource.setMaxPoolPreparedStatementPerConnectionSize(dataSourceConfig.getMaxPoolPreparedStatementPerConnectionSize());  
        datasource.setConnectionProperties(dataSourceConfig.getConnectionProperties());
        datasource.setFilters(dataSourceConfig.getFilters());
        
        CustomLogger.getLog().info("初始化数据库连接池完成");
        
        return datasource;
    }
    
    @Primary
    @Bean(name = "transactionManager")
    public DataSourceTransactionManager transactionManager(@Qualifier("dataSource") DataSource dataSource) {
        return new DataSourceTransactionManager(dataSource);
    }
    
    @Primary
    @Bean(name = "sqlSessionFactory")
    public SqlSessionFactory sqlSessionFactory(@Qualifier("dataSource") DataSource dataSource) throws Exception {
        SqlSessionFactoryBean factoryBean = new SqlSessionFactoryBean();
        factoryBean.setDataSource(dataSource);
        //factoryBean.setTypeAliasesPackage("demo.model");
        factoryBean.getObject().getConfiguration().setMapUnderscoreToCamelCase(true);
 
        return factoryBean.getObject();
    }
}

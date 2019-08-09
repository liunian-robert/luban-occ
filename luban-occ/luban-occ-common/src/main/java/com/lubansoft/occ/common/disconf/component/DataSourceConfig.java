package com.lubansoft.occ.common.disconf.component;

import com.baidu.disconf.client.common.annotations.DisconfFile;
import com.baidu.disconf.client.common.annotations.DisconfFileItem;
import org.springframework.stereotype.Component;

@Component
@DisconfFile(filename = "mysql-occ.properties")
public class DataSourceConfig {

	private String url;  
    private String username;  
    private String password;  
    private String driverClassName;  
    private int initialSize;  
    private int minIdle;  
    private int maxActive;  
    private int maxWait;  
    private int timeBetweenEvictionRunsMillis;  
    //private int minEvictableIdleTimeMillis;  
    private String validationQuery;  
    private boolean testWhileIdle;  
    private boolean testOnBorrow;  
    private boolean testOnReturn;  
    private boolean poolPreparedStatements;  
    private int maxPoolPreparedStatementPerConnectionSize;  
    private String filters;  
    private String connectionProperties;

  //private boolean useGlobalDataSourceStat;
    
    @DisconfFileItem(associateField = "url",name = "datasource.mysql.occ.url")  
    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }
    @DisconfFileItem(associateField = "username",name = "datasource.mysql.occ.username")  
    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }
    @DisconfFileItem(associateField = "password",name = "datasource.mysql.occ.password")  
    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
    @DisconfFileItem(associateField = "driverClassName",name = "datasource.mysql.occ.driver-class-name")  
    public String getDriverClassName() {
        return driverClassName;
    }

    public void setDriverClassName(String driverClassName) {
        this.driverClassName = driverClassName;
    }
    @DisconfFileItem(associateField = "initialSize",name = "datasource.mysql.occ.initialSize")  
    public int getInitialSize() {
        return initialSize;
    }

    public void setInitialSize(int initialSize) {
        this.initialSize = initialSize;
    }
    @DisconfFileItem(associateField = "minIdle",name = "datasource.mysql.occ.minIdle")  
    public int getMinIdle() {
        return minIdle;
    }

    public void setMinIdle(int minIdle) {
        this.minIdle = minIdle;
    }
    @DisconfFileItem(associateField = "maxActive",name = "datasource.mysql.occ.maxActive")  
    public int getMaxActive() {
        return maxActive;
    }

    public void setMaxActive(int maxActive) {
        this.maxActive = maxActive;
    }
    @DisconfFileItem(associateField = "maxWait",name = "datasource.mysql.occ.maxWait")  
    public int getMaxWait() {
        return maxWait;
    }

    public void setMaxWait(int maxWait) {
        this.maxWait = maxWait;
    }
    @DisconfFileItem(associateField = "timeBetweenEvictionRunsMillis",name = "datasource.mysql.occ.timeBetweenEvictionRunsMillis")  
    public int getTimeBetweenEvictionRunsMillis() {
        return timeBetweenEvictionRunsMillis;
    }

    public void setTimeBetweenEvictionRunsMillis(int timeBetweenEvictionRunsMillis) {
        this.timeBetweenEvictionRunsMillis = timeBetweenEvictionRunsMillis;
    }
    /*@DisconfFileItem(associateField = "minEvictableIdleTimeMillis",name = "datasource.mysql.occ.minEvictableIdleTimeMillis")  
    public int getMinEvictableIdleTimeMillis() {
        return minEvictableIdleTimeMillis;
    }

    public void setMinEvictableIdleTimeMillis(int minEvictableIdleTimeMillis) {
        this.minEvictableIdleTimeMillis = minEvictableIdleTimeMillis;
    }*/
    @DisconfFileItem(associateField = "validationQuery",name = "datasource.mysql.occ.validationQuery")  
    public String getValidationQuery() {
        return validationQuery;
    }

    public void setValidationQuery(String validationQuery) {
        this.validationQuery = validationQuery;
    }
    @DisconfFileItem(associateField = "testWhileIdle",name = "datasource.mysql.occ.testWhileIdle")  
    public boolean getTestWhileIdle() {
        return testWhileIdle;
    }

    public void setTestWhileIdle(boolean testWhileIdle) {
        this.testWhileIdle = testWhileIdle;
    }
    @DisconfFileItem(associateField = "testOnBorrow",name = "datasource.mysql.occ.testOnBorrow")
    public boolean getTestOnBorrow() {
        return testOnBorrow;
    }

    public void setTestOnBorrow(boolean testOnBorrow) {
        this.testOnBorrow = testOnBorrow;
    }
    @DisconfFileItem(associateField = "testOnReturn",name = "datasource.mysql.occ.testOnReturn")
    public boolean getTestOnReturn() {
        return testOnReturn;
    }

    public void setTestOnReturn(boolean testOnReturn) {
        this.testOnReturn = testOnReturn;
    }
    @DisconfFileItem(associateField = "poolPreparedStatements",name = "datasource.mysql.occ.poolPreparedStatements")
    public boolean getPoolPreparedStatements() {
        return poolPreparedStatements;
    }

    public void setPoolPreparedStatements(boolean poolPreparedStatements) {
        this.poolPreparedStatements = poolPreparedStatements;
    }
    @DisconfFileItem(associateField = "maxPoolPreparedStatementPerConnectionSize",
    		name = "datasource.mysql.occ.maxPoolPreparedStatementPerConnectionSize")
    public int getMaxPoolPreparedStatementPerConnectionSize() {
        return maxPoolPreparedStatementPerConnectionSize;
    }

    public void setMaxPoolPreparedStatementPerConnectionSize(int maxPoolPreparedStatementPerConnectionSize) {
        this.maxPoolPreparedStatementPerConnectionSize = maxPoolPreparedStatementPerConnectionSize;
    }
    @DisconfFileItem(associateField = "filters",name = "datasource.mysql.occ.filters")
    public String getFilters() {
        return filters;
    }

    public void setFilters(String filters) {
        this.filters = filters;
    }
    @DisconfFileItem(associateField = "connectionProperties",name = "datasource.mysql.occ.connectionProperties")
    public String getConnectionProperties() {
        return connectionProperties;
    }

    public void setConnectionProperties(String connectionProperties) {
        this.connectionProperties = connectionProperties;
    }

}

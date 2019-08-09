package com.lubansoft.occ.common.disconf.component;

import com.baidu.disconf.client.common.annotations.DisconfFile;
import com.baidu.disconf.client.common.annotations.DisconfFileItem;
import org.springframework.stereotype.Component;

@Component
@DisconfFile(filename = "application-dubbo-config.properties")
public class DubboConfig {

	private String applicationName;  
    private String protocol;  
    private String host;
    private String port;
    private Integer protocolPort;
    
    
    @DisconfFileItem(associateField = "applicationName",name = "dubbo.application.name")
	public String getApplicationName() {
		return applicationName;
	}
	public void setApplicationName(String applicationName) {
		this.applicationName = applicationName;
	}
	
	@DisconfFileItem(associateField = "protocol",name = "dubbo.registry.protocol")
	public String getProtocol() {
		return protocol;
	}
	public void setProtocol(String protocol) {
		this.protocol = protocol;
	}
	
	@DisconfFileItem(associateField = "host",name = "dubbo.registry.host")
	public String getHost() {
		return host;
	}
	public void setHost(String host) {
		this.host = host;
	}
	
	@DisconfFileItem(associateField = "port",name = "dubbo.registry.port")
	public String getPort() {
		return port;
	}
	public void setPort(String port) {
		this.port = port;
	}
	
	@DisconfFileItem(associateField = "protocolPort",name = "dubbo.protocol.port")
	public Integer getProtocolPort() {
		return protocolPort;
	}
	public void setProtocolPort(Integer protocolPort) {
		this.protocolPort = protocolPort;
	}
    
}

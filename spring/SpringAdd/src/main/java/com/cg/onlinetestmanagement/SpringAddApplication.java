package com.cg.onlinetestmanagement;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@SpringBootApplication
@EnableDiscoveryClient
public class SpringAddApplication {

	public static void main(String[] args) {
		SpringApplication.run(SpringAddApplication.class, args);
	}

}

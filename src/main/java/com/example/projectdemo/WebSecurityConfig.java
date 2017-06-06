package com.example.projectdemo;

import javax.sql.DataSource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

//@Configuration
//@EnableWebSecurity
//<dependency>
//<groupId>org.springframework.security</groupId>
//<artifactId>spring-security-web</artifactId>
//<version>4.2.2.RELEASE</version>
//</dependency>
//<dependency>
//<groupId>org.springframework.security</groupId>
//<artifactId>spring-security-config</artifactId>
//<version>4.2.2.RELEASE</version>
//</dependency>
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {
	@Autowired
	DataSource dataSource;

	@Autowired
	public void configAuthentication(AuthenticationManagerBuilder auth) throws Exception {
		auth.jdbcAuthentication().dataSource(dataSource)
				.usersByUsernameQuery("select user_name, password from users where user_name=?")
				.authoritiesByUsernameQuery("select user_name from users where user_name=?");
	}

	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http.authorizeRequests().antMatchers("/hello").access("hasRole('ROLE_ADMIN')").anyRequest().permitAll().and()
				.formLogin().loginPage("/login").usernameParameter("username").passwordParameter("password").and()
				.logout().logoutSuccessUrl("/login?logout").and().exceptionHandling().accessDeniedPage("/403").and()
				.csrf();
	}
}
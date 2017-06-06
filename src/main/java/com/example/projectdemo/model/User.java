package com.example.projectdemo.model;

public class User {
	private Long id;
	private String name;
	private String password;
	private String user_name;
	
	public User() {}

	public User(Long id, String name, String email) {
		this.id = id;
		this.name = name;
		this.password = email;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getUser_name() {
		return user_name;
	}

	public void setUser_name(String user_name) {
		this.user_name = user_name;
	}
}

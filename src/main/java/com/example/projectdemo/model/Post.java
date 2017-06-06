package com.example.projectdemo.model;

import java.sql.Timestamp;

public class Post {

	private Long id;
	private String post_title;
	private String sub_title;
	private String post_content;
	private Timestamp created;
	private int user_id;
	private String creater_name;

	/**
	 * @return the user_id
	 */
	public int getUser_id() {
		return user_id;
	}

	/**
	 * @param user_id
	 *            the user_id to set
	 */
	public void setUser_id(int user_id) {
		this.user_id = user_id;
	}

	/**
	 * @return the id
	 */
	public Long getId() {
		return id;
	}

	/**
	 * @param id
	 *            the id to set
	 */
	public void setId(Long id) {
		this.id = id;
	}

	/**
	 * @return the post_title
	 */
	public String getPost_title() {
		return post_title;
	}

	/**
	 * @param post_title
	 *            the post_title to set
	 */
	public void setPost_title(String post_title) {
		this.post_title = post_title;
	}

	/**
	 * @return the post_content
	 */
	public String getPost_content() {
		return post_content;
	}

	/**
	 * @param post_content
	 *            the post_content to set
	 */
	public void setPost_content(String post_content) {
		this.post_content = post_content;
	}

	/**
	 * @return the created
	 */
	public Timestamp getCreated() {
		return created;
	}

	/**
	 * @param created
	 *            the created to set
	 */
	public void setCreated(Timestamp created) {
		this.created = created;
	}

	/**
	 * @return the creater_name
	 */
	public String getCreater_name() {
		return creater_name;
	}

	/**
	 * @param creater_name the creater_name to set
	 */
	public void setCreater_name(String creater_name) {
		this.creater_name = creater_name;
	}

	/**
	 * @return the sub_title
	 */
	public String getSub_title() {
		return sub_title;
	}

	/**
	 * @param sub_title the sub_title to set
	 */
	public void setSub_title(String sub_title) {
		this.sub_title = sub_title;
	}

}

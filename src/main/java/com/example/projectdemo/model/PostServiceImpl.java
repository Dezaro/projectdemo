package com.example.projectdemo.model;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Map;
import java.sql.Timestamp;
import javax.sql.DataSource;

import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

@Service
public class PostServiceImpl implements PostService {
	private JdbcTemplate jdbcTemplate;

	public PostServiceImpl(DataSource dataSource) {
		super();
		this.jdbcTemplate = new JdbcTemplate(dataSource);
	}

	@Override
	public Collection<Post> listPosts(int start, int limit) {
		String query = "SELECT p.*, u.name FROM projectdemo.post p JOIN projectdemo.users u on p.user_id = u.id ORDER BY p.created DESC LIMIT ?,?";

		Collection<Post> posts = new ArrayList<>();

		List<Map<String, Object>> rows = this.jdbcTemplate.queryForList(query, start, limit);
		for (Map<String, Object> row : rows) {
			Post post = new Post();
			post.setId((Long) row.get("id"));
			post.setPost_title((String) row.get("post_title"));
			post.setSub_title((String) row.get("sub_title"));
			post.setPost_content((String) row.get("post_content"));
			post.setUser_id((int) row.get("user_id"));
			post.setCreated((Timestamp) row.get("created"));
			post.setCreater_name((String) row.get("name"));
			posts.add(post);
		}
		return posts;
	}

	@Override
	public Long createPost(Post post) {
		String query = "INSERT INTO `projectdemo`.`post` (`post_title`, `sub_title`, `post_content`, `user_id`, `created`) VALUES (?, ?, ?, ?, NOW());";
		this.jdbcTemplate.update(query, post.getPost_title(), post.getSub_title(), post.getPost_content(), 1);
		return this.jdbcTemplate.queryForObject("SELECT LAST_INSERT_ID()", Long.class);
	}

	@Override
	public Post getPost(Long id) {
		String query = "SELECT * FROM projectdemo.post WHERE id = ?";
		Post post = this.jdbcTemplate.queryForObject(query, new Object[] { id },
				new BeanPropertyRowMapper<Post>(Post.class));
		return post;
	}

	@Override
	public void updatePost(Post post) {
		String query = "UPDATE post SET post_title = ?, post_content = ? WHERE id = ?";
		this.jdbcTemplate.update(query, post.getPost_title(), post.getPost_content(), post.getId());
	}

	@Override
	public void deletePost(Long id) {
		String query = "DELETE FROM projectdemo.post WHERE id = ?";
		this.jdbcTemplate.update(query, id);
	}

}

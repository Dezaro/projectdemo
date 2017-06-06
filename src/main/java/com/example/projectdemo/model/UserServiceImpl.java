package com.example.projectdemo.model;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Map;

import javax.sql.DataSource;

import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {
	private JdbcTemplate jdbcTemplate;

	public UserServiceImpl(DataSource dataSource) {
		this.jdbcTemplate = new JdbcTemplate(dataSource);
	}

	@Override
	public Collection<User> listUsers() {
		String query = "SELECT * FROM users";

		Collection<User> users = new ArrayList<>();

		List<Map<String, Object>> rows = this.jdbcTemplate.queryForList(query);
		for (Map<String, Object> row : rows) {
			User user = new User();
			user.setId((Long) row.get("id"));
			user.setName((String) row.get("user_name"));
			user.setPassword((String) row.get("password"));
			users.add(user);
		}

		return users;
	}

	@Override
	public Long createUser(User user) {
		String query = "INSERT INTO projectdemo.users(user_name, password) VALUES(?, ?)";
		this.jdbcTemplate.update(query, user.getUser_name(), user.getPassword());
		String last_id = "SELECT LAST_INSERT_ID()";
		Long id =  this.jdbcTemplate.queryForObject(last_id, Long.class);
		return id;
	}

	@Override
	public User getUser(Long id) {
		String query = "SELECT * FROM users WHERE id = ?";

		User user = this.jdbcTemplate.queryForObject(query, new Object[] { id },
				new BeanPropertyRowMapper<User>(User.class));

		return user;
	}

	@Override
	public void updateUser(User user) {
		String query = "UPDATE users SET user_name = ?, password = ? WHERE id = ?";
		this.jdbcTemplate.update(query, user.getUser_name(), user.getPassword(), user.getId());
	}

	@Override
	public void deleteUser(Long id) {
		String query = "DELETE FROM projectdemo.users WHERE id = ?";
		this.jdbcTemplate.update(query, id);
	}
}

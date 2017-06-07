package com.example.projectdemo.model;

import javax.sql.DataSource;

import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

@Service
public class AuthenticationServiceImpl implements AuthenticationService {

	private JdbcTemplate jdbcTemplate;

	public AuthenticationServiceImpl(DataSource dataSource) {
		jdbcTemplate = new JdbcTemplate(dataSource);
	}

	@Override
	public User authentication(String username, String password) {
		try {
			String query = "SELECT * FROM users WHERE user_name = ? AND password = ?";

			User user = this.jdbcTemplate.queryForObject(query, new Object[] { username, password },
					new BeanPropertyRowMapper<User>(User.class));

			return user;
		} catch (EmptyResultDataAccessException dataAccessException) {
			return null;
		}
	}

}

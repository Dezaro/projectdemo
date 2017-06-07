package com.example.projectdemo.api;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.projectdemo.model.User;
import com.example.projectdemo.model.UserService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping(path = "/api/users")
public class UserApi {
	@Autowired
	private UserService userService;

	@GetMapping
	public Collection<User> listUsers() {
		return this.userService.listUsers();
	}

	@GetMapping(path = "{id}")
	public User getUser(@PathVariable Long id) {
		return this.userService.getUser(id);
	}

	@PostMapping()
	public Long createUser(@RequestBody User user) {
		return this.userService.createUser(user);
	}

	@PutMapping()
	public void updateUser(@RequestBody User user) {
		this.userService.updateUser(user);
	}
	
	@DeleteMapping(path = "{id}")
	public void deleteUser(@PathVariable Long id) {
		this.userService.deleteUser(id);
	}
}

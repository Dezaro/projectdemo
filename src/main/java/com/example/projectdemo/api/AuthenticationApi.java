package com.example.projectdemo.api;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.projectdemo.model.AuthenticationService;
import com.example.projectdemo.model.User;

@RestController
@RequestMapping(path = "/api/authentication")
public class AuthenticationApi {
	@Autowired
	private AuthenticationService authenticationService;

	@PostMapping
	public void login(HttpServletRequest request) {
		String username = request.getParameter("username");
		String password = request.getParameter("password");
		User user = this.authenticationService.authentication(username, password);
		System.out.println(user.getId());
	}

}

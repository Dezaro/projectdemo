package com.example.projectdemo.api;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.projectdemo.model.AuthenticationService;
import com.example.projectdemo.model.User;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/")
public class AuthenticationApi {
	@Autowired
	private AuthenticationService authenticationService;


    @PostMapping("/login")
	public void login(HttpServletRequest request) {
		String username = request.getParameter("username");
		String password = request.getParameter("password");
		User user = this.authenticationService.authentication(username, password);
		if (user == null) {
			System.out.println("Its null");
		} else {
			request.getSession().setAttribute("user", user);
		}
	}

	@GetMapping
	public void logout(HttpServletRequest request) {
		request.getSession().setAttribute("user", null);
	}

}

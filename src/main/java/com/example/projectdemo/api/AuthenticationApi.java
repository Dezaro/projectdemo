package com.example.projectdemo.api;

import java.io.IOException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.JSONException;
import org.json.JSONObject;
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
@RequestMapping("/authentication")
public class AuthenticationApi {
	@Autowired
	private AuthenticationService authenticationService;

    @PostMapping
	public void login(HttpServletRequest request, HttpServletResponse response) throws JSONException, IOException {
		String username = request.getParameter("username");
		String password = request.getParameter("password");
		int status = HttpServletResponse.SC_OK;
		User user = this.authenticationService.authentication(username, password);
		JSONObject obj = new JSONObject();
		if (user == null) {
			obj.put("authentication", false);
			obj.put("message", "invalid username or password");
			status = HttpServletResponse.SC_BAD_REQUEST;
		} else {
			request.getSession().setAttribute("user", user);
			obj.put("username", user.getUser_name());
			obj.put("name", user.getName());
		}
		response.setContentType("application/json");
		response.setStatus(status);
		response.getWriter().print(obj);
	}

	@GetMapping
	public void logout(HttpServletRequest request, HttpServletResponse response) throws JSONException, IOException {
		JSONObject obj = new JSONObject();
		request.getSession().setAttribute("user", null);
		obj.put("authentication", false);
		obj.put("message", "loguot successful");
		response.setContentType("application/json");
		response.setStatus(HttpServletResponse.SC_OK);
		response.getWriter().print(obj);
	}

}

package com.example.projectdemo;

import java.io.IOException;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.annotation.WebFilter;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.example.projectdemo.model.User;

@Component
@CrossOrigin(origins = "http://localhost:3000")
@WebFilter("/**")
public class RequestsFilter implements Filter {

	@Override
	public void destroy() {

	}

	@Override
	public void init(FilterConfig filterConfig) throws ServletException {

	}

	@Override
	public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
			throws IOException, ServletException {
		HttpServletRequest httpRequest = (HttpServletRequest) request;
		HttpServletResponse httpResponse = (HttpServletResponse) response;
		httpResponse.addHeader("Access-Control-Allow-Credentials", "true");
		httpResponse.addHeader("Access-Control-Allow-Origin", "http://localhost:3000");
		httpResponse.addHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
		httpResponse.addHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

		if (httpRequest.getMethod().equals("OPTIONS")) {
			httpResponse.setStatus(HttpServletResponse.SC_OK);
			return;
		}

		User user = (User) httpRequest.getSession().getAttribute("user");

		if (httpRequest.getRequestURI().compareTo("/authentication") == 0) {
			chain.doFilter(request, response);
			return;
		}

		if (httpRequest.getRequestURI().compareTo("/api/posts") == 0) {
			chain.doFilter(request, response);
			return;
		}

		if (user != null) {
			chain.doFilter(request, response);
		} else {

			JSONObject obj = new JSONObject();
			try {
				obj.put("success", false);
				obj.put("message", "401 Unauthorizied");
				obj.put("status code", HttpServletResponse.SC_UNAUTHORIZED);
			} catch (JSONException e) {
				e.printStackTrace();
			}
			httpResponse.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
			response.setContentType("application/json");
			response.getWriter().print(obj);
		}
	}

}

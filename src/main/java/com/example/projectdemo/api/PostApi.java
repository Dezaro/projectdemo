package com.example.projectdemo.api;

import java.util.Collection;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

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

import com.example.projectdemo.model.Post;
import com.example.projectdemo.model.PostService;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping(path = "/api/posts")
public class PostApi {

	@Autowired
	private PostService postService;

	@GetMapping
	public Collection<Post> listUsers(HttpServletRequest request) {
		int start, limit;
		Map<String, String[]> paramMap = request.getParameterMap();
		if (!paramMap.containsKey("start") && !paramMap.containsKey("limit")) {
			start = 0;
			limit = 5;
		} else {
			start = Integer.parseInt(request.getParameter("start"));
			limit = Integer.parseInt(request.getParameter("limit"));
		}
		return this.postService.listPosts(start, limit);
	}
	
	@PostMapping()
	public Long createPost(@RequestBody Post post) {
		return this.postService.createPost(post);
	}
	
	@GetMapping(path = "{id}")
	public Post getPost(@PathVariable Long id) {
		return this.postService.getPost(id);
	}
	
	@PutMapping()
	public void updatePost(@RequestBody Post post) {
		this.postService.updatePost(post);
	}
	
	@DeleteMapping(path = "{id}")
	public void deletePost(@PathVariable Long id) {
		this.postService.deletePost(id);
	}
}

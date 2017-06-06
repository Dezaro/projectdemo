package com.example.projectdemo.model;

import java.util.Collection;


public interface PostService {
	Collection<Post> listPosts(int start, int limit);
	
	Long createPost(Post post);
	
	Post getPost(Long id);
	
	void updatePost(Post post);
	
	void deletePost(Long id);
}

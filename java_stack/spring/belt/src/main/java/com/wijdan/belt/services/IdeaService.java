package com.wijdan.belt.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.wijdan.belt.models.Idea;
import com.wijdan.belt.models.User;
import com.wijdan.belt.repositories.IdeaRepository;
import com.wijdan.belt.repositories.UserRepository;


@Service
public class IdeaService {
	@Autowired
	private IdeaRepository ideaRepository;
	@Autowired
	private UserRepository userRepository;
	
//  Get all ideas
	public ArrayList<Idea> allIdeas() {
		return (ArrayList<Idea>) ideaRepository.findAll();
	}
	
//	 create
	public Idea create(Idea idea) {
		return ideaRepository.save(idea);
	}
	
//	 update
	public Idea update(Idea idea) {
		return ideaRepository.save(idea);
	}
	
//	 get one
	public Idea findIdea(Long id) {
		return ideaRepository.findById(id).orElse(null);
	}
	
//	delete
	public void delete(Long id) {
		ideaRepository.deleteById(id);
	}
	
//	like idea
	public void likeIdea(Long idea_id, Long user_id) {
		User user = userRepository.findById(user_id).orElse(null);
		Idea idea = findIdea(idea_id);
		List<User> likedBy = idea.getLikedBy();
		likedBy.add(user);
		idea.setLikedBy(likedBy);
		ideaRepository.save(idea);
	}
	
//	unlike idea
	public void unLikeIdea(Long idea_id, Long user_id) {
		User user = userRepository.findById(user_id).orElse(null);
		Idea idea = findIdea(idea_id);
		List<User> likedBy = idea.getLikedBy();
		likedBy.remove(user);
		idea.setLikedBy(likedBy);
		ideaRepository.save(idea);
	}
}

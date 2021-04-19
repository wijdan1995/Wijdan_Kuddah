package com.wijdan.dojooverflow.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.wijdan.dojooverflow.models.Answer;
import com.wijdan.dojooverflow.models.Question;
import com.wijdan.dojooverflow.models.Tag;
import com.wijdan.dojooverflow.repositories.AnswerRepository;
import com.wijdan.dojooverflow.repositories.QuestionRepository;
import com.wijdan.dojooverflow.repositories.TagRepository;

@Service
public class AppService {
	private QuestionRepository questionRepo;
	private TagRepository tagRepo;
	private AnswerRepository answerRepo;
	public AppService(QuestionRepository questionRepo, AnswerRepository answerRepo, TagRepository tagRepo) {
		this.questionRepo = questionRepo;
		this.tagRepo = tagRepo;
		this.answerRepo = answerRepo;
	}

	public List<Question> allQuestions() {
		return questionRepo.findAll();
	}
	public Question findQuestion(Long id) {
		return questionRepo.findById(id).orElse(null);
	}
	
	public Tag findOrCreate(String subject) {
		Optional<Tag> tag = tagRepo.findBySubject(subject);
		if(tag.isPresent()) {
			return tag.get();			
		} else {
			return tagRepo.save(new Tag(subject));
		}
	}
	
	public Question createQuestion(Question newQuestion) {
		String[] tagsNames = newQuestion.getTagsInput().split(",");
		List<Tag> tags = new ArrayList<Tag>();
		for(String name : tagsNames) {
			Tag tag = findOrCreate(name);
			if(!tags.contains(tag)) {
				tags.add(tag);
			}
				
		}
		newQuestion.setTags(tags);
		return questionRepo.save(newQuestion);
		
	}
	
	public Answer createAnswer(Answer answer) {
		return answerRepo.save(answer);
	}
	
}

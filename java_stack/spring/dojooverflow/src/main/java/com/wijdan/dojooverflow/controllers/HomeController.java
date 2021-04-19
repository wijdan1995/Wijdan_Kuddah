package com.wijdan.dojooverflow.controllers;

import javax.validation.Valid;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.wijdan.dojooverflow.models.Answer;
import com.wijdan.dojooverflow.models.Question;
import com.wijdan.dojooverflow.services.AppService;

@Controller
public class HomeController {
	private final AppService appService;
	public HomeController(AppService appService) {
		this.appService = appService;
	}
	
	@RequestMapping("/")
	public String redir() {
		return "redirect:/questions";
	}
	
	@RequestMapping("/questions")
	public String Index(Model model) {
		model.addAttribute("questions", appService.allQuestions());
		return "index.jsp";
	}
	
	@RequestMapping("/questions/new")
	public String New(@ModelAttribute("newQuestion") Question newQuestion) {
		return "new.jsp";
	}
	
	@RequestMapping( value="/questions" , method=RequestMethod.POST)
	public String create(@Valid @ModelAttribute("newQuestion") Question newQuestion, BindingResult result) {
		if(result.hasErrors())
			return "/new.jsp";
		this.appService.createQuestion(newQuestion);
		return "redirect:/questions";
	}
	
	@RequestMapping("/questions/{id}")
	public String show(@PathVariable("id") Long id, @ModelAttribute("answer") Answer answer, Model model) {
		model.addAttribute("question", appService.findQuestion(id));
		return "show.jsp";
	}
	
	@RequestMapping( value="/answers" , method=RequestMethod.POST)
	public String createAns(@Valid @ModelAttribute("newAnswer") Answer newAnswer, BindingResult result) {
		if(result.hasErrors())
			return "/new.jsp";
		Answer ans = this.appService.createAnswer(newAnswer);
		return "redirect:/questions/" + ans.getQuestion().getId();
	}
}

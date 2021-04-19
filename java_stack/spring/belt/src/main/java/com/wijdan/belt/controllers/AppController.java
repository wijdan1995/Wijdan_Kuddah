package com.wijdan.belt.controllers;

import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import com.wijdan.belt.models.Idea;
import com.wijdan.belt.models.User;
import com.wijdan.belt.services.IdeaService;
import com.wijdan.belt.services.UserService;

@Controller
public class AppController {   
    @Autowired
	private UserService userService;
    @Autowired
	private IdeaService ideaService;
    
    
//    user 
    @RequestMapping("/")
    public String registerForm(@ModelAttribute("user") User user) {
        return "registration.jsp";
    }
    
    @RequestMapping(value="/registration", method=RequestMethod.POST)
    public String registerUser(@Valid @ModelAttribute("user") User user, BindingResult result, HttpSession session) {
    	userService.registerUser(user, result);
    	if(result.hasErrors())
    		return "registration.jsp";
		session.setAttribute("user_id", user.getId());
		return "redirect:/ideas";
    	
    }
    
    @RequestMapping(value="/login", method=RequestMethod.POST)
    public String loginUser(@RequestParam("email") String email, @RequestParam("password") String password, Model model, HttpSession session, @ModelAttribute("user") User user) {
    	// System.out.println(email + password);
    	boolean isAuth = this.userService.authenticateUser(email, password);
    	// System.out.println(isAuth);
    	if(isAuth) {
    		User userr = this.userService.findByEmail(email);
    		session.setAttribute("user_id", userr.getId());
    		return "redirect:/ideas";
    	} else {
    		model.addAttribute("error", "Password or email not correct");
    		return "registration.jsp";
    	}
    }
    
    @RequestMapping("/logout")
    public String logout(HttpSession session) {
    	session.invalidate();
    	return "redirect:/";
    }
    
//  ideas
    @RequestMapping("/ideas")
    public String home(HttpSession session, Model model) {
    	Long user_id = (Long) session.getAttribute("user_id");
	  	if(user_id == null) {
	  		return "redirect:/";
	  	}
	  	User user = this.userService.findUserById(user_id);
	  	model.addAttribute("user", user);
	  	model.addAttribute("ideas", ideaService.allIdeas());
	  	return "home.jsp";
  }
    
    @RequestMapping("/ideas/new")
    public String newIdea(HttpSession session, Model model, @ModelAttribute("idea") Idea idea) {
    	Long user_id = (Long) session.getAttribute("user_id");
	  	if(user_id == null) {
	  		return "redirect:/";
	  	}
	  	User user = this.userService.findUserById(user_id);
	  	model.addAttribute("user", user);
	  	return "new.jsp";
  }
    
    @RequestMapping(value="/ideas", method=RequestMethod.POST)
    public String createIdea(HttpSession session, Model model,@Valid @ModelAttribute("idea") Idea idea, BindingResult result) {
    	Long user_id = (Long) session.getAttribute("user_id");
	  	if(user_id == null) {
	  		return "redirect:/";
	  	}
	  	if(result.hasErrors()) {
			return "new.jsp";
		}
	  	User user = this.userService.findUserById(user_id);
	  	idea.setCreator(user);
	  	ideaService.create(idea);
	  	return "redirect:/ideas/" + idea.getId();
  }
    
    @RequestMapping("/ideas/{id}")
    public String showIdea(@PathVariable("id") Long id, HttpSession session, Model model) {
    	Long user_id = (Long) session.getAttribute("user_id");
	  	if(user_id == null) {
	  		return "redirect:/";
	  	}
	  	model.addAttribute("idea", ideaService.findIdea(id));
	  	return "show.jsp";
  }
    
    @RequestMapping("/ideas/{id}/edit")
    public String showEditIdea(@PathVariable("id") Long id, HttpSession session, Model model) {
    	Long user_id = (Long) session.getAttribute("user_id");
	  	if(user_id == null) {
	  		return "redirect:/";
	  	}
	  	User user = this.userService.findUserById(user_id);
	  	Idea idea = ideaService.findIdea(id);
	  	if(user.getId() != idea.getCreator().getId()) {
	  		return "redirect:/ideas";
	  	}
	  	model.addAttribute("user", user);
	  	model.addAttribute("idea", idea );
	  	return "edit.jsp";
  }
    
    @RequestMapping(value="/ideas/{id}/edit", method=RequestMethod.POST)
    public String editIdea(HttpSession session, Model model,@Valid @ModelAttribute("idea") Idea idea, BindingResult result) {
    	Long user_id = (Long) session.getAttribute("user_id");
	  	if(user_id == null) {
	  		return "redirect:/";
	  	}
	  	if(result.hasErrors()) {
			return "edit.jsp";
		}
	  	User user = this.userService.findUserById(user_id);
	  	idea.setCreator(user);
	  	ideaService.update(idea);
	  	return "redirect:/ideas/" + idea.getId();
  }
    
    @RequestMapping("/ideas/{id}/delete")
    public String deleteIdea(@PathVariable("id") Long id, HttpSession session, Model model) {
    	Long user_id = (Long) session.getAttribute("user_id");
	  	if(user_id == null) {
	  		return "redirect:/";
	  	}
	  	User user = this.userService.findUserById(user_id);
	  	Idea idea = ideaService.findIdea(id);
	  	if(user.getId() != idea.getCreator().getId()) {
	  		return "redirect:/ideas";
	  	}
	  	ideaService.delete(id);
	  	return "redirect:/ideas";
  }
    
    @RequestMapping("/ideas/{id}/like")
    public String likeIdea(@PathVariable("id") Long id, HttpSession session, Model model) {
    	Long user_id = (Long) session.getAttribute("user_id");
	  	if(user_id == null) {
	  		return "redirect:/";
	  	}
	  	ideaService.likeIdea(id, user_id);
	  	return "redirect:/ideas";
  }
    
    @RequestMapping("/ideas/{id}/unlike")
    public String unlikeIdea(@PathVariable("id") Long id, HttpSession session, Model model) {
    	Long user_id = (Long) session.getAttribute("user_id");
	  	if(user_id == null) {
	  		return "redirect:/";
	  	}
	  	ideaService.unLikeIdea(id, user_id);
	  	return "redirect:/ideas";
  }
    


}

package com.wijdan.events.controllers;

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

import com.wijdan.events.models.Event;
import com.wijdan.events.models.Message;
import com.wijdan.events.models.User;
import com.wijdan.events.services.EventService;
import com.wijdan.events.services.UserService;

@Controller
public class AppController {   
    @Autowired
	private UserService userService;
    @Autowired
	private EventService eventService;
    
    
//    user 
    @RequestMapping("/")
    public String registerForm(@ModelAttribute("user") User user) {
        return "registrationPage.jsp";
    }
    
    @RequestMapping(value="/registration", method=RequestMethod.POST)
    public String registerUser(@Valid @ModelAttribute("user") User user, BindingResult result, HttpSession session) {
    	userService.registerUser(user, result);
    	if(result.hasErrors())
    		return "registrationPage.jsp";
		session.setAttribute("user_id", user.getId());
		return "redirect:/events";
    	
    }
    
    @RequestMapping(value="/login", method=RequestMethod.POST)
    public String loginUser(@RequestParam("email") String email, @RequestParam("password") String password, Model model, HttpSession session, @ModelAttribute("user") User user) {
    	// System.out.println(email + password);
    	boolean isAuth = this.userService.authenticateUser(email, password);
    	// System.out.println(isAuth);
    	if(isAuth) {
    		User userr = this.userService.findByEmail(email);
    		session.setAttribute("user_id", userr.getId());
    		return "redirect:/events";
    	} else {
    		model.addAttribute("error", "Password or email not correct");
    		return "registrationPage.jsp";
    	}
    }
    
    @RequestMapping("/logout")
    public String logout(HttpSession session) {
    	session.invalidate();
    	return "redirect:/";
    }
    
    
//    event
    @RequestMapping("/events")
    public String home(HttpSession session, Model model, @ModelAttribute("event") Event event) {
    	Long user_id = (Long) session.getAttribute("user_id");
    	if(user_id == null) {
    		return "redirect:/";
    	}
    	User user = this.userService.findUserById(user_id);
    	model.addAttribute("user", user);
    	model.addAttribute("events", eventService.allEvents());
    	return "homePage.jsp";
    }
    
    @RequestMapping(value="/events", method=RequestMethod.POST)
    public String createEvent(HttpSession session, Model model,@Valid @ModelAttribute("event") Event event, BindingResult result) {
    	User loggedInUser = userService.findUserById( (Long) session.getAttribute("user_id") );
		if(loggedInUser == null) {
			return "redirect:/";
		}
		if(result.hasErrors()) {
			return "homePage.jsp";
		}
		event.setHost(loggedInUser);
		eventService.create(event);
		return "redirect:/events";
    }
    
//    show
    @RequestMapping("/events/{id}")
    public String showEvent(@PathVariable("id") Long id, HttpSession session, Model model) {
    	User loggedInUser = userService.findUserById( (Long) session.getAttribute("user_id") );
		if(loggedInUser == null) {
			return "redirect:/";
		}
		model.addAttribute("event", eventService.findEvent(id));
		model.addAttribute("message", new Message());
		return "showPage.jsp";
    }
    
	//  edit page
	  @RequestMapping("/events/{id}/edit")
	  public String showEditEvent(@PathVariable("id") Long id, HttpSession session, Model model) {
	  	User loggedInUser = userService.findUserById( (Long) session.getAttribute("user_id") );
			if(loggedInUser == null || eventService.findEvent(id).getHost() != loggedInUser ) {
				return "redirect:/";
			}
			model.addAttribute("event", eventService.findEvent(id));
			return "editPage.jsp";
	  }
  
	//edit handler
	@RequestMapping(value="/events/{id}/edit", method=RequestMethod.POST)
	public String editEvent(@Valid @ModelAttribute("event") Event event, BindingResult result, @PathVariable("id") Long id, HttpSession session, Model model) {
		User loggedInUser = userService.findUserById( (Long) session.getAttribute("user_id") );
			if(loggedInUser == null) {
				return "redirect:/";
			}
	    	if(result.hasErrors()) {
	    		return "editPage.jsp";
	    	}
	    	event.setHost(loggedInUser);
	    	eventService.update(event);
	    	return "redirect:/events/" + id;
	}
	
//  add message
	@RequestMapping( value="/messages" , method=RequestMethod.POST)
	public String createMessage(@Valid @ModelAttribute("message") Message message, BindingResult result, HttpSession session) {
		User loggedInUser = userService.findUserById( (Long) session.getAttribute("user_id") );
		if(loggedInUser == null) {
			return "redirect:/";
		}
		if(result.hasErrors())
			return "redirect:/events/" + message.getEvent().getId();
		message.setAuthor(loggedInUser);
		Message m = eventService.createMessage(message);
		return "redirect:/events/" + m.getEvent().getId();
	}
    
    @RequestMapping("/events/{id}/delete")
    public String deleteEvent(@PathVariable("id") Long id) {
		eventService.delete(id);
		return "redirect:/events";
    }
    
    @RequestMapping("/events/{user_id}/join/{event_id}")
    public String joinEvent(@PathVariable("user_id") Long user_id, @PathVariable("event_id") Long event_id) {
		eventService.joinEvent(event_id, user_id);
		return "redirect:/events";
    }
    
    @RequestMapping("/events/{user_id}/leave/{event_id}")
    public String leaveEvent(@PathVariable("user_id") Long user_id, @PathVariable("event_id") Long event_id) {
		eventService.leaveEvent(event_id, user_id);
		return "redirect:/events";
    }
    
    

    

}

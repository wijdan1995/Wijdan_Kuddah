package com.wijdan.authentication.controllers;

import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import com.wijdan.authentication.models.User;
import com.wijdan.authentication.services.UserService;
import com.wijdan.authentication.validator.UserValidator;

@Controller
public class Users {
//    private final UserService userService;
//    
//    // NEW
//    private final UserValidator userValidator;
//    
//    
//    public Users(UserService userService, UserValidator userValidator) {
//        this.userService = userService;
//        this.userValidator = userValidator;
//    }
	
//	all this replaced with this V
    
	@Autowired
	private UserService userService;
	@Autowired
	private UserValidator userValidator;
	
    
    @RequestMapping("/registration")
    public String registerForm(@ModelAttribute("user") User user) {
        return "registrationPage.jsp";
    }
    @RequestMapping("/login")
    public String login() {
        return "loginPage.jsp";
    }
    
    @RequestMapping(value="/registration", method=RequestMethod.POST)
    public String registerUser(@Valid @ModelAttribute("user") User user, BindingResult result, HttpSession session) {
        // if result has errors, return the registration page (don't worry about validations just now)
        // else, save the user in the database, save the user id in session, and redirect them to the /home route
    	userValidator.validate(user, result);
    	if(result.hasErrors())
			return "/registrationPage.jsp";
		User newUser = userService.registerUser(user);
		session.setAttribute("user_id", newUser.getId());
		return "redirect:/home";
    	
    }
    
    @RequestMapping(value="/login", method=RequestMethod.POST)
    public String loginUser(@RequestParam("email") String email, @RequestParam("password") String password, Model model, HttpSession session) {
        // if the user is authenticated, save their user id in session
        // else, add error messages and return the login page
    	System.out.println(email + password);
    	boolean isAuth = this.userService.authenticateUser(email, password);
    	System.out.println(isAuth);
    	if(isAuth) {
    		User user = this.userService.findByEmail(email);
    		session.setAttribute("user_id", user.getId());
    		return "redirect:/home";
    	} else {
    		session.setAttribute("error", "Password or email not correct");
    		return "loginPage.jsp";
    	}
    }
    
    @RequestMapping("/home")
    public String home(HttpSession session, Model model) {
        // get user from session, save them in the model and return the home page
    	Long user_id = (Long) session.getAttribute("user_id");
    	if(user_id == null) {
    		return "redirect:/login";
    	}
    	User user = this.userService.findUserById(user_id);
    	model.addAttribute("user", user);
    	return "homePage.jsp";
    }
    
    @RequestMapping("/logout")
    public String logout(HttpSession session) {
        // invalidate session
        // redirect to login page
    	session.invalidate();
    	return "redirect:/login";
    }
}

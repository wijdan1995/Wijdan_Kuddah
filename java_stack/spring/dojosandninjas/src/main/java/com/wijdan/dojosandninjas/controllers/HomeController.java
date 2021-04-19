package com.wijdan.dojosandninjas.controllers;

import javax.validation.Valid;
import org.springframework.validation.BindingResult;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.wijdan.dojosandninjas.models.Dojo;
import com.wijdan.dojosandninjas.models.Ninja;
import com.wijdan.dojosandninjas.services.AppService;

@Controller
public class HomeController {
//	
	private final AppService appService;
	public HomeController(AppService appService) {
		this.appService = appService;
	}
	//	the home page is dojos
	@RequestMapping("/")
	public String redir() {
		return "redirect:/dojos";
	}
	
//	Show all dojos
	@RequestMapping("/dojos")
	public String IndexDojo(Model model) {
		model.addAttribute("dojos", appService.allDojos());
		return "/dojos/index.jsp";
	}
	
//	Show one dojo
	@RequestMapping("/dojos/{id}")
	public String ShowDojo(@PathVariable("id") Long id, Model model) {
		model.addAttribute("dojo", this.appService.findDojo(id));
		return "/dojos/show.jsp";
	}
	
//	Show Create New Dojo page
	@RequestMapping("/dojos/new")
	public String NewDojo(@ModelAttribute("dojo") Dojo dojo) {
		return "/dojos/new.jsp";
	}
	
//	Create New Dojo handler
	@RequestMapping(value="/dojos", method=RequestMethod.POST)
	public String CreateDojo(@Valid @ModelAttribute("dojo") Dojo dojo, BindingResult result) {
		if(result.hasErrors())
			return "/dojos/new.jsp";
		this.appService.createDojo(dojo);
		return "redirect:/dojos";
	}
	
	
// Ninjas handlers
	
	@RequestMapping("/ninjas")
	public String IndexNinja(Model model) {
		model.addAttribute("ninjas", this.appService.allNinjas());
		return "/ninjas/index.jsp";
	}
	
	@RequestMapping("/ninjas/new")
	public String NewNinja(@ModelAttribute("ninja") Ninja ninja, Model model) {
		model.addAttribute("dojos", this.appService.allDojos());
		return "/ninjas/new.jsp";
	}
	@RequestMapping(value="/ninjas", method=RequestMethod.POST)
	public String CreateNinja(@Valid @ModelAttribute("ninja") Ninja ninja, BindingResult result, Model model) {
		if(result.hasErrors()) {
			model.addAttribute("dojos", this.appService.allDojos());
			return "/ninjas/new.jsp";
		}
		this.appService.createNinja(ninja);
		return "redirect:/ninjas";
	}
	

}

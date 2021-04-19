package com.wijdan.firstproject;

import java.util.Date;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class HomeController {
	@RequestMapping("/")
    public String home(Model model) {
		Date date = new Date();
		model.addAttribute("name", "Wijdan");
		model.addAttribute("date", date);
        return "index.jsp";
    }
//	
//	@RequestMapping("/world")
//    public String world() {
//            return "Hello World!";
//    }

}

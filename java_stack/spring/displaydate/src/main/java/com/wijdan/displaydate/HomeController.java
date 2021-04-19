package com.wijdan.displaydate;

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
	
	@RequestMapping("/date")
    public String date(Model model) {
		Date date = new Date();
		model.addAttribute("date", date);
        return "date.jsp";
    }
	
	@RequestMapping("/time")
    public String time(Model model) {
		Date date = new Date();
		model.addAttribute("date", date);
        return "time.jsp";
    }

}


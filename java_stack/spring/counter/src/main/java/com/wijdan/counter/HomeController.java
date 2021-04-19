package com.wijdan.counter;


import javax.servlet.http.HttpSession;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class HomeController {
	@RequestMapping("/")
    public String home(HttpSession session) {
		if(session.getAttribute("counter") != null) {
			Integer counter = (Integer) session.getAttribute("counter");
			session.setAttribute("counter", counter+1);
		} else {
			session.setAttribute("counter", 0);
		}
        return "index.jsp";
    }
	
	@RequestMapping("/counter")
    public String counter(HttpSession session, Model model) {
		Integer counter = (Integer) session.getAttribute("counter");
		model.addAttribute("counter", counter);
        return "counter.jsp";
    }
	

}


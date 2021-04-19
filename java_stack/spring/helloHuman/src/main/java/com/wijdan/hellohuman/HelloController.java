package com.wijdan.hellohuman;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {
	@RequestMapping("/")
    public String index(@RequestParam(value="name", required=false) String name) {
		if (name == null) {
			return "<div>"
					+ "<h1> Hello Human! </h1>"
					+ "<p>Welcome to SpringBoot!</p>"
					+ "</div>";
		} else {
			return "<div>"
					+ "<h1> Hello "+ name +"! </h1>"
					+ "<p>Welcome to SpringBoot!</p>"
					+ "</div>";
		}
    }
}

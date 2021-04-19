package com.wijdan.routing;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class DojoController {
	@RequestMapping("/{name}")
    public String index(@PathVariable("name") String name) {
		if (name.equals("burbank-dojo")) {
			return "Burbank Dojo is located in Southern California";
		} else if (name.equals("san-jose")) {
			return "SJ dojo is the headquarters";
		} else {
			return "The " + name + " is awesome!";
		}
    }

}

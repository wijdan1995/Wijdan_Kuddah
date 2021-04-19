package com.wijdan.firstproject;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class RestControllerAPI {
//	@RequestMapping("")
//  public String hello() {
//          return "Hello everyone!";
//  }
//	
//	@RequestMapping("/world")
//  public String world() {
//          return "Hello World!";
//  }
	
	@RequestMapping("/api")
  public String index(@RequestParam(value="q", required=false) String searchQuery) {
      if(searchQuery == null) {
      	return "You searched for: nothing";
      } else {
      	return "You searched for: " + searchQuery;
      }
  }
	
	@RequestMapping("/m/{track}/{module}/{lesson}")
  public String showLesson(@PathVariable("track") String track, @PathVariable("module") String module, @PathVariable("lesson") String lesson){
  	return "Track: " + track + ", Module: " + module + ", Lesson: " + lesson;
  }
	
	@RequestMapping("/greeting")
  public String index(){
    return "Hello user!";
  }
  // you can be explicit about the request as well
  @RequestMapping(value="/greeting/hello", method=RequestMethod.GET)
  public String hello(){
    return "Hello world! What route did you use to access me?";
  }
  @RequestMapping("/greeting/goodbye")
  public String world(){
    return "Goodbye world!";
  }
}

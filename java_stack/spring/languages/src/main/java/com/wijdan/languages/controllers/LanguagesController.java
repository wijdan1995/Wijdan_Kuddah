package com.wijdan.languages.controllers;

import java.util.List;

import javax.validation.Valid;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.wijdan.languages.models.Language;
import com.wijdan.languages.services.LanguageService;

@Controller
public class LanguagesController {
    private final LanguageService languageService;

    public LanguagesController(LanguageService languageService) {
        this.languageService = languageService;
    }

    @RequestMapping("")
    public String goHome() {
        return "redirect:/languages";
    }

    // route to show all the data
    @RequestMapping("/languages")
    public String index(@ModelAttribute("language") Language language, Model model) {
        List<Language> languages = languageService.allLanguages();
        model.addAttribute("languages", languages);
        return "/languages/index.jsp";
    }

    // route create
    @RequestMapping(value = "/languages", method = RequestMethod.POST)
    public String create(@Valid @ModelAttribute("language") Language language, BindingResult result) {
        if (result.hasErrors()) {
            return "/languages/index.jsp";
        } else {
            languageService.createLanguage(language);
            return "redirect:/languages";
        }
    }

    // show 
    @RequestMapping("/languages/{id}")
    public String show(@PathVariable("id") Long id, Model model) {
        Language language = languageService.findLanguage(id);
        model.addAttribute("language", language);
        return "/languages/show.jsp";
    }

    // go to edit page
    @RequestMapping("/languages/{id}/edit")
    public String edit(@PathVariable("id") Long id, Model model) {
        Language language = languageService.findLanguage(id);
        model.addAttribute("language", language);
        return "/languages/edit.jsp";
    }

    // handle edit
    @RequestMapping(value="/languages/{id}", method=RequestMethod.POST)
    public String update(@Valid @ModelAttribute("language") Language language, BindingResult result, @PathVariable("id") Long id) {
        if (result.hasErrors()) {
            return "/languages/edit.jsp";
        } else {
            languageService.updateLanguage(language);
            return "redirect:/languages/"+ id;
        }
    }

    // delete
    @RequestMapping(value="/languages/{id}/delete", method=RequestMethod.POST)
    public String destroy(@PathVariable("id") Long id) {
        languageService.deleteLanguage(id);
        return "redirect:/languages";
    }

}

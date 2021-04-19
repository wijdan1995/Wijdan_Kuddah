package com.wijdan.productscategories.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import javax.validation.Valid;

import com.wijdan.productscategories.models.Category;
import com.wijdan.productscategories.models.Product;
import com.wijdan.productscategories.services.AppService;

@Controller
public class HomeController {
	private final AppService appService;
	public HomeController(AppService appService) {
		this.appService = appService;
	}
	
//	the home page is products
	@RequestMapping("/")
	public String redir() {
		return "redirect:/products";
	}
	
//	Show all products
	@RequestMapping("/products")
	public String IndexProduct(Model model) {
		model.addAttribute("products", appService.allProducts());
		return "/products/index.jsp";
	}
	
//	Show one product
	@RequestMapping("/products/{id}")
	public String ShowProduct(@PathVariable("id") Long id, Model model) {
		Product product = appService.findProduct(id);
		model.addAttribute("product", product);
		model.addAttribute("categories", appService.findCategoriesNotInProduct(product));
		return "/products/show.jsp";
	}
	
//	Show Create New Product page
	@RequestMapping("/products/new")
	public String NewProduct(@ModelAttribute("product") Product product) {
		return "/products/new.jsp";
	}
	
//	Create New Product handler
	@RequestMapping(value="/products", method=RequestMethod.POST)
	public String CreateProduct(@Valid @ModelAttribute("product") Product product, BindingResult result) {
		if(result.hasErrors())
			return "/products/new.jsp";
		this.appService.createProd(product);
		return "redirect:/products";
	}
	
//	add cat to prod
	@RequestMapping(value="/products/{id}", method=RequestMethod.POST)
	public String productCat(@RequestParam(value="category_id" , required=true) Long category_id,  @PathVariable("id") Long id) {
		appService.addCatToProd(category_id, id);
		return "redirect:/products/" + id;
	}
	
	
//	add prod to cat
	@RequestMapping(value="/categories/{id}", method=RequestMethod.POST)
	public String catProd(@RequestParam(value="product_id" , required=true) Long product_id,  @PathVariable("id") Long id) {
		appService.addProdToCat(product_id, id);
		return "redirect:/categories/" + id;
	}
	
	
// Categories handlers
	
	@RequestMapping("/categories")
	public String IndexCategory(Model model) {
		model.addAttribute("categories", this.appService.allCategories());
		return "/categories/index.jsp";
	}
	
	@RequestMapping("/categories/new")
	public String NewCategory(@ModelAttribute("category") Category category, Model model) {
		return "/categories/new.jsp";
	}
	
//	Show one category
	@RequestMapping("/categories/{id}")
	public String ShowCategory(@PathVariable("id") Long id, Model model) {
		Category category = appService.findCategory(id);
		model.addAttribute("category", category);
		model.addAttribute("products", appService.findProductsNotInCategory(category));
		return "/categories/show.jsp";
	}
	
	@RequestMapping(value="/categories", method=RequestMethod.POST)
	public String CreateCategory(@Valid @ModelAttribute("category") Category category, BindingResult result, Model model) {
		if(result.hasErrors()) {
			model.addAttribute("products", this.appService.allProducts());
			return "/categories/new.jsp";
		}
		this.appService.createCat(category);
		return "redirect:/categories";
	}
}

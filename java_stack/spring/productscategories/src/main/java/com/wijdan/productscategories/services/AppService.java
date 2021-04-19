package com.wijdan.productscategories.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.wijdan.productscategories.models.Category;
import com.wijdan.productscategories.models.Product;
import com.wijdan.productscategories.repositories.CategoryRepository;
import com.wijdan.productscategories.repositories.ProductRepository;

@Service
public class AppService {
	private final CategoryRepository categoryRepo;
	private final ProductRepository productRepo;
	public AppService(CategoryRepository categoryRepo, ProductRepository productRepo) {
		this.categoryRepo = categoryRepo;
		this.productRepo = productRepo;
	}
	
// create product
	public Product createProd(Product newProd) {
		return productRepo.save(newProd);
	}

//create Category
	public Category createCat(Category newCat) {
		return categoryRepo.save(newCat);
	}
	
//	get all products
	public List<Product> allProducts() {
		return (List<Product>) productRepo.findAll();
	}
	
//	get all Categories
	public List<Category> allCategories() {
		return (List<Category>) categoryRepo.findAll();
	}
	
//	get one product
	public Product findProduct(Long id) {
        Optional<Product> product = productRepo.findById(id);
        return product.get();
    }
	
//	get one Category
	public Category findCategory(Long id) {
        Optional<Category> category = categoryRepo.findById(id);
        return category.get();
    }
	
//	get all products not in the Category
	public  List<Product> findProductsNotInCategory(Category category) {
        return productRepo.findByCategoriesNotContains(category);
    }
	
//	 get all Categories the product not in
	public List<Category> findCategoriesNotInProduct(Product product) {
		return categoryRepo.findByProductsNotContains(product);
	}
	
//	addCatToProd
	
	public Product addCatToProd(Long category_id, Long product_id) {
		Product addToProd = findProduct(product_id);
		Category addCat = findCategory(category_id);
//		System.out.println(addToProd.getCategoryInput());
//		System.out.println(addToProd.getCategories());
		List<Category> cats;
		if(addToProd.getCategories() != null) {
			cats = addToProd.getCategories();
		} else {
			cats =  new ArrayList<Category>(); 
		}
		
		cats.add(addCat);
		
		addToProd.setCategories(cats);
        return productRepo.save(addToProd);    
    }
	
//	addProdToCat
	
	public Category addProdToCat(Long product_id, Long category_id) {
		Product addProd = findProduct(product_id);
		Category addToCat = findCategory(category_id);
		List<Product> products;
		if(addToCat.getProducts() != null) {
			products = addToCat.getProducts();
		} else {
			products =  new ArrayList<Product>(); 
		}
		products.add(addProd);
		
		addToCat.setProducts(products);
        return categoryRepo.save(addToCat);    
    }
	
}

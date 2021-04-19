package com.wijdan.productscategories.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.wijdan.productscategories.models.Category;
import com.wijdan.productscategories.models.Product;

@Repository
public interface CategoryRepository extends CrudRepository<Category, Long>{
	List<Category> findByProductsNotContains(Product product);

	Category findByName(String categoryInput);
	
}

package com.management.Quiz.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.management.Quiz.models.Category;
import com.management.Quiz.repository.CategoryRepository;

@Service
public class CategoryService {

  @Autowired
  private CategoryRepository categoryRepository;
  
  public Category addCategory(Category category) {
    return categoryRepository.save(category);
  }
 
  public Category updateCategory(Category category) {
    return categoryRepository.save(category);
  }
  
  public List<Category> getAllCategory() {
    return categoryRepository.findAll();
  }
    

  public void deleteCategoryById(Integer categoryId) {
     categoryRepository.deleteById(categoryId);
  } 

  public Category getCategoryById(Integer categoryId) {
    return categoryRepository.findById(categoryId).get();
  }

  
  
}

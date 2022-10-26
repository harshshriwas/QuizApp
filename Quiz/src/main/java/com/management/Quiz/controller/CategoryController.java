package com.management.Quiz.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.management.Quiz.models.Category;
import com.management.Quiz.models.Users;
import com.management.Quiz.service.CategoryService;
import com.management.Quiz.service.UserService;

@CrossOrigin("*")
@RestController
public class CategoryController {

  @Autowired
  private CategoryService categoryService;

  @RequestMapping(value = "/addcategory", method = RequestMethod.POST)
  public Category createCategory(@RequestBody Category category) {
    return categoryService.addCategory(category);
  }

  
  @RequestMapping(value = "/allcategory", method = RequestMethod.GET)
  public List<Category> getAllCategory() {
    return categoryService.getAllCategory();
  }
  
  @RequestMapping(value = "/getcategory/{categoryId}", method = RequestMethod.GET)
  public Category getCategoryById(@PathVariable("categoryId") Integer categoryId) {
    return categoryService.getCategoryById(categoryId);
  }
  
  @RequestMapping(value = "/category/{categoryId}", method = RequestMethod.DELETE)
  public void deleteCategoryById(@PathVariable("categoryId") Integer categoryId) {
     categoryService.deleteCategoryById(categoryId);
  }
  
  @RequestMapping(value = "/update/category", method = RequestMethod.PUT)
  public Category updateCategoryById(@RequestBody Category category) {
    return categoryService.updateCategory(category);
  }
}

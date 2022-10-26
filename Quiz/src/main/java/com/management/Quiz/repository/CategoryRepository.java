package com.management.Quiz.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.management.Quiz.models.Category;

public interface CategoryRepository extends JpaRepository<Category, Integer>{

}

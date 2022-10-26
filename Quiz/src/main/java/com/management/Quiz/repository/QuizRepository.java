package com.management.Quiz.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.management.Quiz.models.Quiz;

public interface QuizRepository extends JpaRepository<Quiz, Integer>{

}

package com.management.Quiz.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import com.management.Quiz.models.Questions;
import com.management.Quiz.models.Quiz;

public interface QuestionRepository extends JpaRepository<Questions, Integer>{

  List<Questions> findByQuiz(Quiz quiz);

}

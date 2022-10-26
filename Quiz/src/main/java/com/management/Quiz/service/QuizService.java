package com.management.Quiz.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.management.Quiz.models.Quiz;
import com.management.Quiz.repository.QuizRepository;

@Service
public class QuizService {

  @Autowired
  private QuizRepository quizRepository;
  
  public Quiz addQuiz(Quiz quiz) {
    return quizRepository.save(quiz);
  }

  public Quiz updateQuiz(Quiz quiz) {
    return quizRepository.save(quiz);
  }
  
  public List<Quiz> getAllQuiz() {
    return quizRepository.findAll();
  }

  public Quiz getQuizById(Integer quizId) {
    return quizRepository.findById(quizId).get();
  }

  public void deleteQuizById(Integer quizId) {
    quizRepository.deleteById(quizId);
  }



}

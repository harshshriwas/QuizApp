package com.management.Quiz.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.management.Quiz.models.Questions;
import com.management.Quiz.models.Quiz;
import com.management.Quiz.repository.QuestionRepository;

@Service
public class QuestionService {
  
  @Autowired
  private QuestionRepository questionRepository;

  public Questions addQuestion(Questions questions) {
    return questionRepository.save(questions);
  }
  
  public Questions updateQuestion(Questions question) {
    return questionRepository.save(question);
  }

  public List<Questions> getAllQuiz() {
    return questionRepository.findAll();
  }

  public Questions getQuestionById(Integer questionId) {
    return questionRepository.findById(questionId).get();
  }

  public List<Questions> getQuestionsOfQuiz(Quiz quiz){
    return questionRepository.findByQuiz(quiz);
  }
  
  public void deleteQuestionById(Integer questionId) {
    questionRepository.deleteById(questionId);
  }

 


}

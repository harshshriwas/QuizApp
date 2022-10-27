package com.management.Quiz.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.management.Quiz.models.Quiz;
import com.management.Quiz.service.QuizService;

@RestController
@CrossOrigin("*")
public class QuizController {

  @Autowired
  private QuizService quizService;

  @RequestMapping(value = "/addquiz", method = RequestMethod.POST)
  public Quiz createQuiz(@RequestBody Quiz quiz) {
    return quizService.addQuiz(quiz);
  }

 
  @RequestMapping(value = "/allquiz", method = RequestMethod.GET)
  public List<Quiz> getAllQuiz() {
    return quizService.getAllQuiz();
  }
  
  @RequestMapping(value = "/quiz/{quizId}", method = RequestMethod.GET)
  public Quiz getQuizById(@PathVariable("quizId") Integer quizId) {
    return quizService.getQuizById(quizId);
  }
  
  @RequestMapping(value = "/deleteQuiz/{quizId}", method = RequestMethod.DELETE)
  public void deleteQuizById(@PathVariable("quizId") Integer quizId) {
    quizService.deleteQuizById(quizId);
  }
  
  @RequestMapping(value = "/updateQuiz", method = RequestMethod.PUT)
  public Quiz updateQuizById(@RequestBody Quiz quiz) {
    return quizService.updateQuiz(quiz);
  }
}

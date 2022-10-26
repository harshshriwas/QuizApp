package com.management.Quiz.controller;

import java.util.Collections;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.management.Quiz.models.Questions;
import com.management.Quiz.models.Quiz;
import com.management.Quiz.service.QuestionService;
import com.management.Quiz.service.QuizService;

@RestController
@CrossOrigin("*")
public class QuestionController {

  @Autowired
  private QuestionService questionService;
  
  @Autowired
  private QuizService quizService;

  @RequestMapping(value = "/addquestion", method = RequestMethod.POST)
  public Questions createQuestion(@RequestBody Questions questions) {
    return questionService.addQuestion(questions);
  }

 
  @RequestMapping(value = "/allquestion", method = RequestMethod.GET)
  public List<Questions> getAllQuiz() {
    return questionService.getAllQuiz();
  }
  
  @RequestMapping(value = "/question/{qid}", method = RequestMethod.GET)
  public List<Questions> getQuestionsOfQuiz(@PathVariable("qid") Integer qid) {

    Quiz quiz = quizService.getQuizById(qid);
    List<Questions>  question = quiz.getQuestions(); 
    
    if(question.size()>Integer.parseInt(quiz.getNumberOfQuestion())) {
      question = question.subList(0, Integer.parseInt(quiz.getNumberOfQuestion() + 1));
    }
    Collections.shuffle(question);
    return question;
  }
  
  @RequestMapping(value = "/question/{questionId}", method = RequestMethod.GET)
  public Questions getQuestionById(@PathVariable("questionId") Integer questionId) {
    return questionService.getQuestionById(questionId);
  }
  
  @RequestMapping(value = "/delete/{questionId}", method = RequestMethod.GET)
  public void deleteQuestionById(@PathVariable("questionId") Integer questionId) {
    questionService.deleteQuestionById(questionId);
  }
  
  @RequestMapping(value = "/update/question", method = RequestMethod.PUT)
  public Questions updateQuestionById(@RequestBody Questions question) {
    return questionService.updateQuestion(question);
  }
}



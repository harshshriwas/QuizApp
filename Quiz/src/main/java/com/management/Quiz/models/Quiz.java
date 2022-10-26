package com.management.Quiz.models;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name="quiz")
public class Quiz {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private int qid;
  
  private String qtittle;
  
  private String qdescription;
  
  private String maxMarks;
  
  private String numberOfQuestion;
  
  @ManyToOne(fetch = FetchType.EAGER)
  private Category category;

  @OneToMany(mappedBy = "quiz", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
  @JsonIgnore
  private List<Questions> questions = new ArrayList<>();

  public int getQid() {
    return qid;
  }

  public void setQid(int qid) {
    this.qid = qid;
  }

  public String getQtittle() {
    return qtittle;
  }

  public void setQtittle(String qtittle) {
    this.qtittle = qtittle;
  }

  public String getQdescription() {
    return qdescription;
  }

  public void setQdescription(String qdescription) {
    this.qdescription = qdescription;
  }

  public String getMaxMarks() {
    return maxMarks;
  }

  public void setMaxMarks(String maxMarks) {
    this.maxMarks = maxMarks;
  }

  public String getNumberOfQuestion() {
    return numberOfQuestion;
  }

  public void setNumberOfQuestion(String numberOfQuestion) {
    this.numberOfQuestion = numberOfQuestion;
  }

  public Category getCategory() {
    return category;
  }

  public void setCategory(Category category) {
    this.category = category;
  }

  public List<Questions> getQuestions() {
    return questions;
  }

  public void setQuestions(List<Questions> questions) {
    this.questions = questions;
  }
  
  
}

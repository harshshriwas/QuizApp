import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  quiz : Quiz[] = [];
  constructor(public http:HttpClient) { }

  ngOnInit(): void {
    this.getAllQuiz();
  }

  getAllQuiz()
  {
    this.http.get<any>('http://localhost:8080/allquiz').subscribe(
      (response)=>{
        console.log(response)
        this.quiz = response;
      },
      (error)=>{
        console.log("Error in gating data");
      }
    );
  }

}

export interface Quiz {
 
  qid : number,
  qtittle : string,
  qdescription : string,
  maxMarks : number,
  numberOfQuestion : number,
  
}
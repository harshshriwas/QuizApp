import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-load-quiz',
  templateUrl: './load-quiz.component.html',
  styleUrls: ['./load-quiz.component.css']
})
export class LoadQuizComponent implements OnInit {

  quiz : Quiz[] = [];
  q: any;

  constructor(public http:HttpClient, private router:Router) { }

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

  startQuiz(id: any, title: any, maxMarks:any){
    var yes = confirm("Do You Want to Start Quiz");
    
    if(yes){
      this.router.navigate(['/user-dashboard/startquiz/'+id+'/'+title+'/'+maxMarks])
    }
  }
}

export interface Quiz {
 
  qid : number,
  qtittle : string,
  qdescription : string,
  maxMarks : number,
  numberOfQuestion : number,
  
}
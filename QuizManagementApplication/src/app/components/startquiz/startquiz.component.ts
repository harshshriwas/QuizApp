import { LocationStrategy } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-startquiz',
  templateUrl: './startquiz.component.html',
  styleUrls: ['./startquiz.component.css']
})
export class StartquizComponent implements OnInit {

  qid: any;
  qTittle: any;

  marksGot=0;
  correctAnswers=0;
  attempted = 0;
  
  questions : Questions[] = [];
  constructor(private route: ActivatedRoute, public http:HttpClient) { }

  ngOnInit(): void {
    this.preventBackButton();
     this.qid = this.route.snapshot.params['id'];
     this.qTittle = this.route.snapshot.params['tittle'];
     this.getAllQuestions();
  }

  preventBackButton(){
    history.pushState(null, document.title, location.href);
    window.addEventListener('popstate', function (event)
    {
      history.pushState(null, document.title, location.href);
    });
  }

  getAllQuestions()
  {
    this.http.get<any>('http://localhost:8080/question/'+this.qid).subscribe(
      (response)=>{
        console.log(response)
        this.questions = response;

        this.questions.forEach((q)=>{
          q["givenAnswer"] ="";
        });
      },
      (error)=>{
        console.log("Error in gating data");
      }
    );
  }
}


export interface Questions {
 
  quesId : number,
  givenAnswer:string,
  answer : string,
  content : string,
  option1 : string,
  option2 : string,
  option3 : string,
  option4 : string,
  quiz_qid: number
}

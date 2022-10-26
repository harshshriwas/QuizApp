import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-question',
  templateUrl: './view-question.component.html',
  styleUrls: ['./view-question.component.css']
})
export class ViewQuestionComponent implements OnInit {

  qId: any;
  qTittle: any;

  questions : Questions[] = [];
  constructor(public http:HttpClient, private route: ActivatedRoute) { }


  ngOnInit(): void {
  this.qId = this.route.snapshot.params['id'];
  this.qTittle = this.route.snapshot.params['tittle'];
  this.getAllQuestions();
  }
  
  getAllQuestions()
  {
    this.http.get<any>('http://localhost:8080/question/'+this.qId).subscribe(
      (response)=>{
       // console.log(response)
        this.questions = response;
      },
      (error)=>{
        console.log("Error in gating data");
      }
    );
  }

}

export interface Questions {
 
  ques_id : number,
  answer : string,
  content : string,
  option1 : string,
  option2 : string,
  option3 : string,
  option4 : string,
  quiz_qid: number
}
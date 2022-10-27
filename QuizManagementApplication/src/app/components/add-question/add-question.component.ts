import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { VirtualTimeScheduler } from 'rxjs';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {

  qid: any;
  constructor(public http:HttpClient, private route: ActivatedRoute,private router:Router) { }

  question ={
    quiz:{
      qid:''
    },
    content: '',
    option1:'',
    option2:'',
    option3:'',
    option4:'',
    answer:'',
  }


  ngOnInit(): void {
    this.qid = this.route.snapshot.params['id'];
    this.question.quiz.qid = this.qid;
  }
  

  onSubmit(){
    console.log(this.question);
    this.addQuizInfo();
  }

  addQuizInfo()
  {
    this.http.post<any>('http://localhost:8080/addquestion',this.question).subscribe(
      response=>{
        alert("Submited");
      }
    );
  }

     
}


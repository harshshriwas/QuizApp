import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-question',
  templateUrl: './update-question.component.html',
  styleUrls: ['./update-question.component.css']
})
export class UpdateQuestionComponent implements OnInit {

  qId: any;

  constructor(public http: HttpClient, private route: ActivatedRoute) { }

  updateQuestion = new FormGroup({
    quesId: new FormControl(''),
    answer: new FormControl(''),
    content: new FormControl(''),
    option1: new FormControl(''),
    option2: new FormControl(''),
    option3: new FormControl(''),
    option4: new FormControl(''),
    quiz: new FormGroup({
      qid: new FormControl(''),
    }),
  })

  ngOnInit(): void {
    this.qId = this.route.snapshot.params['id'];
    this.getQuestions();
  }

  onSubmit() {
    console.log(this.updateQuestion.value)
   this.updateQuestionInfo();
  }

  getQuestions() {
    this.http.get<any>('http://localhost:8080/questions/' + this.qId).subscribe(
      (response) => {
        console.log(response)
        this.updateQuestion = new FormGroup({
          quesId: new FormControl(this.route.snapshot.params['id']),
          answer: new FormControl(response['answer']),
          content: new FormControl(response['content']),
          option1: new FormControl(response['option1']),
          option2: new FormControl(response['option2']),
          option3: new FormControl(response['option3']),
          option4: new FormControl(response['option4']),
          quiz: new FormGroup({
            qid: new FormControl(response['quiz']['qid']),
          }),
        })
      },
      (error) => {
        console.log("Error in gating data");
      }
    );
  }

  updateQuestionInfo()
  {
    this.http.put<any>('http://localhost:8080/updateQuestion',this.updateQuestion.value).subscribe(
      response=>{
        alert("Submited");
      }, (error)=>{
      alert("error in updating data");
    }
    );
  }

}


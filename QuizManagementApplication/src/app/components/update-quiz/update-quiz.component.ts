import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-quiz',
  templateUrl: './update-quiz.component.html',
  styleUrls: ['./update-quiz.component.css']
})
export class UpdateQuizComponent implements OnInit {
  qid: any;
  category : Category[] = [];
  constructor(public http:HttpClient, private router:Router, private route: ActivatedRoute) { }

  updateQuiz =new FormGroup({
    qid: new FormControl(''),
    qtittle: new FormControl(''),
    qdescription:new FormControl(''),
    maxMarks:new FormControl(''),
    numberOfQuestion: new FormControl(''),
    category :  new FormGroup({
      cid: new FormControl(''),
    })
  });

  ngOnInit(): void {
    this.qid = this.route.snapshot.params['id'];
    this.getAllCategory();
    this.getQuiz();
  }

  onSubmit(){
    this.updateQuestionInfo();
  }

  getAllCategory()
  {
    this.http.get<any>('http://localhost:8080/allcategory').subscribe(
      (response)=>{
        console.log(response)
        this.category = response;
      },
      (error)=>{
        console.log("Error in gating data");
      }
    );
  }

  getQuiz() {
    this.http.get<any>('http://localhost:8080/quiz/' + this.qid).subscribe(
      (response) => {
        console.log(response)
        this.updateQuiz =new FormGroup({
          qid: new FormControl(this.route.snapshot.params['id']),
          qtittle: new FormControl(response['qtittle']),
          qdescription:new FormControl(response['qdescription']),
          maxMarks:new FormControl(response['maxMarks']),
          numberOfQuestion: new FormControl(response['numberOfQuestion']),
          category :  new FormGroup({
            cid: new FormControl(response['category']['cid']),
          })
        });
      },
      (error) => {
        console.log("Error in gating data");
      }
    );
  }

  updateQuestionInfo()
  {
    this.http.put<any>('http://localhost:8080/updateQuiz',this.updateQuiz.value).subscribe(
      response=>{
        alert("Submited");
      }, (error)=>{
      alert("error in updating data");
    }
    );
  }
}

export interface Category {
 
  cid:number;
  tittle: string;
  description: string;
  
}

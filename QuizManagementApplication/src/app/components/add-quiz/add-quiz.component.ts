import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-quiz',
  templateUrl: './add-quiz.component.html',
  styleUrls: ['./add-quiz.component.css']
})
export class AddQuizComponent implements OnInit {

  category : Category[] = [];
  constructor(public http:HttpClient, private router:Router) { }

  creatQuiz =new FormGroup({
    qtittle: new FormControl(''),
    qdescription:new FormControl(''),
    maxMarks:new FormControl(''),
    numberOfQuestion: new FormControl(''),
    // category: { 
    //   cid: new FormControl('')
    // },
  });


  ngOnInit(): void {
    this.getAllCategory();
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

  onSubmit(){
    this.addQuizInfo();
    
  }

  //add quiz info
  addQuizInfo()
  {
    console.log(this.creatQuiz);
    // this.http.post<any>('http://localhost:8080/addquiz',this.creatQuiz.value).subscribe(
    //   response=>{
    //     //console.log(response);
    //     alert("Submited");
    //     this.router.navigate(['home/quiz']);
    //   }
    // );
  }

}

export interface Category {
 
  cid:number;
  tittle: string;
  description: string;
  
}

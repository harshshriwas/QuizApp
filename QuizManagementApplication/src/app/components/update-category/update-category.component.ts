import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.css']
})
export class UpdateCategoryComponent implements OnInit {

  qId: any;

  constructor(public http: HttpClient, private route: ActivatedRoute) { }

  creatCategory =new FormGroup({
    cid:new FormControl(''),
    tittle: new FormControl(''),
    description:new FormControl(''),
  })


  ngOnInit(): void {
    this.qId = this.route.snapshot.params['id'];
    this.getQuestions();
  }

  getQuestions() {
    this.http.get<any>('http://localhost:8080/getcategory/' + this.qId).subscribe(
      (response) => {
        console.log(response)
        this.creatCategory =new FormGroup({
          cid:new FormControl(this.route.snapshot.params['id']),
          tittle: new FormControl(response['tittle']),
          description:new FormControl(response['description']),
        })
      },
      (error) => {
        console.log("Error in gating data");
      }
    );
  }

  onSubmit() {
   this.updateQuestionInfo();
  }



  updateQuestionInfo()
  {
    this.http.put<any>('http://localhost:8080/updateCategory',this.creatCategory.value).subscribe(
      response=>{
        alert("Submited");
      }, (error)=>{
      alert("error in updating data");
    }
    );
  }
}

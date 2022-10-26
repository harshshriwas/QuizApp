import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addcategory',
  templateUrl: './addcategory.component.html',
  styleUrls: ['./addcategory.component.css']
})
export class AddcategoryComponent implements OnInit {

  constructor(public http:HttpClient, private router:Router) { }

  creatCategory =new FormGroup({
    tittle: new FormControl(''),
    description:new FormControl(''),
  })

  ngOnInit(): void {
  }

  onSubmit(){
    this.addCategoryInfo();
    
  }

  //add Category info
  addCategoryInfo()
  {
    console.log(this.creatCategory);
    this.http.post<any>('http://localhost:8080/addcategory',this.creatCategory.value).subscribe(
      response=>{
        //console.log(response);
        alert("Submited");
        this.router.navigate(['home/category']);
      }
    );
  }

}

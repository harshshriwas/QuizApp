import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  
  category : Category[] = [];
  constructor(public http:HttpClient) { }

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

    //delte leave details
    deleteCategory(id:number){
      console.log(id);
      var confim = confirm("Do you want to delete");
      if(confim)
      {
         this.http.delete<any>('http://localhost:8080/deleteCategory/'+id).subscribe(
         response=>{
          alert("Deleted Successfully!..")
          this.ngOnInit();
         }
       );
      }
    }

}

export interface Category {
 
  cid:number;
  tittle: string;
  description: string;
  
}
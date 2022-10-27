import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

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

}

export interface Category {
 
  cid:number;
  tittle: string;
  description: string;
  
}


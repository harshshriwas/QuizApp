import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../login-service.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  category : Category[] = [];
  constructor(public http:HttpClient, public login:LoginServiceService) { }


  public logout()
  {
   localStorage.clear();
    this.login.logout();
  }

  ngOnInit(): void {
    this.preventBackButton();
    this.getAllCategory();
  }

  preventBackButton(){
    history.pushState(null, document.title, location.href);
    window.addEventListener('popstate', function (event)
    {
      history.pushState(null, document.title, location.href);
    });
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


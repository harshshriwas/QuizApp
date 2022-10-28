import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginServiceService } from '../login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  constructor(private http:HttpClient, private router:Router,private login:LoginServiceService) { }

  ngOnInit(): void {
  }

  loginResult =new FormGroup({
    email: new FormControl(''),
    password:new FormControl(''),
  })

  getResultByRollno() {
    this.http.post<any>('http://localhost:8080/login',this.loginResult.value).subscribe(
      response =>{
        if(response)
        {
          // if(response[0]['roll']=="Teacher")
          // {
          //   this.router.navigate(['home']);
          // }
          // else{
          //   this.router.navigate(['serchresult']);
          // }80
          localStorage.setItem('userdetail', JSON.stringify(response));
          if(this.login.getUserRole()==="ADMIN")
              {
                this.router.navigate(['/home']);
              }
              else if(this.login.getUserRole()==="NORMAL")
              {
                this.router.navigate(['/user-dashboard']);
              }
              else{
                this.login.logout();
                
              }
        }
        else{
          alert("Something Went Wrong...!!");
        }
        },
        (error)=>{
          alert("User NOT Found")
        }
      )
      
  }
  
}
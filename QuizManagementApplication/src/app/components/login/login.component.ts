import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  constructor(private http:HttpClient,private router:Router) {

   }

  ngOnInit(): void {
    
  }

  loginResult =new FormGroup({
    email: new FormControl(''),
    password:new FormControl(''),
  })

  getResultByRollno() {
    alert("Login Successfull")
    this.router.navigate(['home']);
  }
  
}
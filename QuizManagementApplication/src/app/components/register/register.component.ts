import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(public http:HttpClient,private router:Router) { }

  creatRegister =new FormGroup({
    email:new FormControl('', Validators.required),
    password:new FormControl('', Validators.required),
    role: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    phonenumber: new FormControl('', Validators.required),
  })

  onSubmit(){
    //this.router.navigate(['home']);
    console.log(this.creatRegister.value);
    this.addCategoryInfo();
  }
  ngOnInit(): void {
   
  }

  addCategoryInfo()
  {
    this.http.post<any>('http://localhost:8080/registerUser',this.creatRegister.value).subscribe(
      response=>{
        //console.log(response);
        alert("User created successfully");
        this.router.navigate(['login']);
      }
    );
  }
}

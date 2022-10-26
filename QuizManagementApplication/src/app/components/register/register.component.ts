import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(public http:HttpClient,private router:Router) { }

  creatRegister =new FormGroup({
    roll: new FormControl(''),
    email:new FormControl(''),
    password:new FormControl('')
  })

  onSubmit(){
    this.router.navigate(['home']);
    
  }
  ngOnInit(): void {
  }

}

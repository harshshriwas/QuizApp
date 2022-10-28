import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from '../login-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public login:LoginServiceService) { }

  ngOnInit(): void {
    
  }

  public logout()
  {
   localStorage.clear();
    this.login.logout();
  }

}

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private router:Router) { }

   //getCurrentUser
  //  public getCurrentUser()
  //  {
  //    return this.http.get('http://localhost:8080/rest/current-user');c
  //  }
 
  //  //generate token
 
  //  public generateToken(logindata:any)
  //  {
  //    return this.http.post('http://localhost:8080/rest/generate-token',logindata);
  //  }
 
  //  //Login user set token in localStorage
 
  //  public loginUser(token:any)
  //  {
  //    localStorage.setItem('token',token)
  //    return true;
  //  }
 
   //getUserRole
   public getUserRole()
   {
     let user = this.getUser();
     console.log("User Roll is = "+user.roll);
     return user.role;
   }
 
   //islogin user is logged in or not
   public isLoggedIn()
   {
     let tokenstr = localStorage.getItem("userdetail");
     if(tokenstr == undefined || tokenstr == '' || tokenstr==null)
     {
       return false;
     }
     else{
       return true;
     }
   }
 
   //logout remove token from localstorage
   public logout()
   {
     localStorage.clear();
     this.router.navigate(['login']);
     
     return true;
   }
 

 
   //set userDeatils
   public setuser(user:any)
   {
     localStorage.setItem("user",JSON.stringify(user));
   }
   //get user
   public getUser()
   {
     let userstr = localStorage.getItem("userdetail");
     if(userstr!=null)
     {
       return JSON.parse(userstr);
     }
     else{
       this.logout();
       this.router.navigate(['login']);
       return null;
     }
   }
}

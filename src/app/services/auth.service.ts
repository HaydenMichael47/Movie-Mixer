import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }


  login(username:string, password:string){
    if(username === "user" && password === "pass")
    {
      return 200;
    }
    else{
      return 403;
    }
  }

  logOut(){
    this.router.navigate(['login'])
  }
}
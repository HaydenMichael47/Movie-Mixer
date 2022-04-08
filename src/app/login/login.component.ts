import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username = "";
  password = "";
  errorMessage = "";
  constructor(private auth:AuthService, private route:Router) { }

  ngOnInit(): void {
  }
  login(){
    if(this.username.trim().length ===0 || this.password.trim().length ===0)
    {
      this.errorMessage = "Username and password is required";
    }
    else{
      this.errorMessage = "";
      let res = this.auth.login(this.username, this.password);
      if(res === 200)
      {
        this.route.navigate(['home'])
      }
      else if(res === 403)
      {
        this.errorMessage = "Incorrect username and password.";
      }
    }
  }

}

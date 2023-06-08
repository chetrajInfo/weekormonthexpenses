import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {

  username: string = '';
  pass: string = '';
  loginError: boolean = false; // Add this property

  //constructor(private http: HttpClient, private router: Router) {}

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
    // If the user is already logged in, redirect them to the dashboard
    if (this.loginService.isLoggedIn()) {
      this.router.navigate(['/dashboard']);


    }
  }

  onCheck(form: NgForm) {

    this.loginService.userLogin(form.value).subscribe(
      response => {
        // navigate to dashboard if login is successful
        //alert('Login Successful');
        console.log("Navigating to dashboard");
        this.router.navigate(['/dashboard']);
      },
      error => {
        if (error.status === 401) {
          // if the request fails with 401 Unauthorized, show an error message
          // alert('Invalid username or password');
          this.loginError = true; //this will make the *ngIf="loginError" of login.component.html page true if username or pass is wrong 
          //and print the message with red color "Username and Password is incorrect in login form"
        }
      }
    );
  }

}


import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent {

username :string ='';
pass : string ='';

  //constructor(private http: HttpClient, private router: Router) {}

  constructor(private loginService: LoginService, private router: Router) {}

  onCheck(form : NgForm){

    this.loginService.userLogin(form.value).subscribe(
      response => {
        // navigate to dashboard if login is successful
        this.router.navigate(['/dashboard']);
      },
      error => {
        if (error.status === 401) {
            // if the request fails with 401 Unauthorized, show an error message
            alert('Invalid username or password');
        }
      }
    );
  }

    //instead of calling the whole api for login here the above code will created first 
    //service class and all the logic will be written there and we will import that 
    //login service file into here

    /*
    this.http.post('http://localhost:8080/api/users/login', form.value).subscribe(
      response => {
        // navigate to dashboard if login is successful
        this.router.navigate(['/dashboard']);
      },
      error => {
        if (error.status === 401) {
            // if the request fails with 401 Unauthorized, show an error message
            alert('Invalid username or password');
        }
      }
    );
    */
  }


import { Component } from '@angular/core';
import {NgForm} from '@angular/forms'

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  isInputFocusedUser: boolean = false;
  isInputFocusedEmail: boolean = false;
  isInputFocusedPhone: boolean = false;
  isInputFocusedPass: boolean = false;
  
  username: string = '';
  email: string = '';
  phone: string = '';
  pass: string = '';

  constructor() { }

  ngOnInit(): void {
    
  }
  saveData():void{
     //alert("Form Clicked") //for checking whether button is working or not
     //console.log("form clicked")
          this.email ="";
          this.phone= "";
          this.username="";
          this.pass="";
  }
  
  limitPhoneLength(event: any) {
    if (this.phone && this.phone.toString().length >= 10) {
      event.preventDefault();
    }
  }
}

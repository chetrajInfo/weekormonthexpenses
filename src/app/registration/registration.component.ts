import { Component } from '@angular/core';
import { ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

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

  emptyFields: boolean = false; // Add this new boolean

  username: string = '';
  email: string = '';
  phone: string = '';
  pass: string = '';

  // ViewChild allows you to access a child component.
// Pass in the component class or the name you set in the template.
  @ViewChild('form') form: NgForm | any;


  constructor() { }

  ngOnInit(): void {
    
  }


  saveData():void {
    if(this.username == "" || this.phone =="" || this.email == "" || this.pass == ""){
      this.emptyFields = true; // Set the flag to true if any field is empty
    }else {
    this.emptyFields = false; // Otherwise, set it to false
    //this.email ="";
    //this.phone= "";
    //this.username="";
    //this.pass="";
    //insetead of using all this.email ="" or this.phone="" and so on just use below code which work perfect
    this.form.resetForm(); // Reset the form state using @viewchild
  }
}

  limitPhoneLength(event: any) {
    if (this.phone && this.phone.toString().length >= 10) {
      event.preventDefault();
    }
  }
}

import { Component } from '@angular/core';
import { ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserserviceService } from '../userservice.service';

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

  facebookURL:string = "https://www.facebook.com/profile.php?id=100087381794234";
  twitterURL:string ="https://twitter.com/?lang=en";

  // ViewChild allows you to access a child component.
// Pass in the component class or the name you set in the template.
  @ViewChild('form') form: NgForm | any;


  /*
saveData():void {
    
    this.submitted = true; // Add this line to set submitted to true when the form is submitted
     
    if(this.username == "" || this.phone =="" || this.email == "" || this.pass == ""){
      this.emptyFields = true; // Set the flag to true if any field is empty
    }else {

      this.userService.registerUser(this.form.value)
    .subscribe(
      response => console.log('Success!', response),
      error => console.error('Error!', error)
    );
    this.emptyFields = false; // Otherwise, set it to false
    this.form.resetForm(); // Reset the form state using @viewchild
  }
}

*/

saveData():void {
  if(this.username == "" || this.phone =="" || this.email == "" || this.pass == ""){
    this.emptyFields = true; 
  } else {
    this.userService.registerUser(this.form.value)
      .subscribe(
        response => console.log('Success!', response),
        error => console.error('Error!', error)
      );
    this.emptyFields = false; 

    // Reset the form state and your variables
    this.form.resetForm();
    this.resetVariables();
  }
}

resetVariables():void {
  this.username = '';
  this.email = '';
  this.phone = '';
  this.pass = '';
}


  limitPhoneLength(event: any) {

    const pattern = /[0-9]/; // Regex pattern to match against input
    let inputChar = String.fromCharCode(event.charCode); // Get the character from the event

    if (!pattern.test(inputChar)) { // If the character is non-numeric, prevent its input
        event.preventDefault();
    }
    if ((this.phone && this.phone.toString().length >= 10 )) {
      event.preventDefault();
    }
  }



  //constructor() { }
  constructor(private userService: UserserviceService){}


}

import { Component, ViewChild } from '@angular/core';
import { RecordService } from '../record.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  record = {
    expensesDate: '',
    expensesFrom: '',
    businessName: '',
    totalAmount: 0,
    notes: '',
  };

  fileToUpload: File | null = null;

  constructor(private recordService: RecordService, private loginService: LoginService, private router: Router) { }

  onLogout(): void {
    // Call the logout method from LoginService
    this.loginService.logout();

    // Optionally, redirect the user to the login page
    this.router.navigate(['/login']);
  }
 
  @ViewChild('fileInput') fileInput: any;

  @ViewChild('save') save: NgForm | any;
  
  handleFileInput(files: FileList | null) {
    if (files && files.length > 0) {
      this.fileToUpload = files.item(0);
    } else {
      console.log("No files selected");
    }
  }
  


  /*
  //this method throw error Argument of type 'File | null' is not assignable to parameter of type 'File'.
  Type 'null' is not assignable to type 'File'.So below is solution checking the null value first

  onSubmit() {
    this.recordService.createRecord(this.record, this.fileToUpload).subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.error(error);
      }
    );
  }

  */
  
  onSubmit() {
    if (this.fileToUpload) {
      this.recordService.createRecord(this.record, this.fileToUpload).subscribe(
        response => {
          console.log(response);
        },
        error => {
          console.error(error);
        }
      );
    } else {
      console.error('No file selected');
    }
    this.save.resetForm();
    // Reset the file input element
    this.fileInput.nativeElement.value = "";
    this.cancel();
  }

/*  
onSubmit() {
  this.recordService.createRecord(this.record, this.fileToUpload ).subscribe(
    response => console.log('Success!', response),
    error => console.error('Error!', error)
  );
  // Reset the form state and your variables
  this.save.resetForm();
  this.cancel();
}
*/

  cancel() {
    // Reset the form values and file selection
    this.record = {
      expensesDate: '',
      expensesFrom: '',
      businessName: '',
      totalAmount: 0,
      notes: '',
    };
    this.fileToUpload = null;
  }
  
  
}

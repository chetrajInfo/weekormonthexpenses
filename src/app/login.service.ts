import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  currentUser: any = null;

  constructor(private http: HttpClient) { }

  userLogin(form: any): Observable<any> {
    return this.http.post('http://localhost:8080/login', form, { withCredentials: true }).pipe(
      tap((user: any) => {
        // Assume the server returns the user information in the response when login is successful
            // Set flag in local storage
            localStorage.setItem('isLoggedIn', 'true');
      })
    );
  }

  isLoggedIn(): boolean {
    //return !!this.currentUser;
    return localStorage.getItem('isLoggedIn') === 'true';
  }

  logout(): void {
    // remove user from local storage to log user out
    localStorage.removeItem('isLoggedIn');
  }
}


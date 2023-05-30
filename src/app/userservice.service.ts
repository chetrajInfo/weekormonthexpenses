import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  private apiUrl = 'http://localhost:8080/api/users';

  constructor(private http: HttpClient) { }

  registerUser(user: User) {
    return this.http.post(this.apiUrl + '/register', user);
  }
}

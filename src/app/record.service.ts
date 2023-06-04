import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecordService {
  private apiUrl = 'http://localhost:8080/api/record/new';

  constructor(private http: HttpClient) { }

  /*createRecord(record: any, file: File): Observable<any> {
    const formData = new FormData();
    formData.append('newRecord', JSON.stringify(record));
    formData.append('receipt', file);
  
    return this.http.post(this.apiUrl, formData);
}*/

createRecord(record: any, file: File): Observable<any> {
  const formData = new FormData();
  formData.append('newRecord', new Blob([JSON.stringify(record)], {
    type: "application/json"
  }));
  formData.append('receipt', file);

  return this.http.post(this.apiUrl, formData);
}
  /*
  createRecord(record: any): Observable<any> {
    const formData = new FormData();
    formData.append('newRecord', JSON.stringify(record));
    //formData.append('receipt', file);

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post(this.apiUrl, formData, { headers });
  }
  */

  /*
  createRecord(record: any, file: File): Observable<any> {
  
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    // Instead of formData, directly send the record object
    return this.http.post(this.apiUrl, record, { headers });
  }
  */



}
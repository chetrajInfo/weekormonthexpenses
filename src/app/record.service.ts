import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecordService {
  private apiUrl = 'http://localhost:8080/api/record/new';

  constructor(private http: HttpClient) { }

  
  createRecord(record: any, file: File): Observable<any> {
    const formData = new FormData();
    formData.append('newRecord', new Blob([JSON.stringify(record)], {
      type: "application/json"
    }));
    formData.append('receipt', file);

    return this.http.post(this.apiUrl, formData);
  }

}
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Api {
  private baseUrl = 'http://localhost:3000';

  constructor(private http:HttpClient) { }

  submitForm(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/register`, data); // replace /enquiry with your actual endpoint
  }
}

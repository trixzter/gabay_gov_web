import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BASE_URL } from '../../app.constants';

@Injectable({
  providedIn: 'root',
})
export class EmailSubscriptionService {
  private API_URL = `${BASE_URL}/emails`; 

  constructor(private http: HttpClient) {}

  addEmail(subscriber_email: string): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post(this.API_URL, { subscriber_email }, { headers });
  }
}
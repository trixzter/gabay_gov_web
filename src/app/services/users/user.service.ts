import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { UserModel } from '../../models/user.model';
import { HttpClient } from '@angular/common/http';

const baseUrl = 'http://localhost:5000';

@Injectable({
  providedIn: 'root'
})
export class UserService {


private users: UserModel[] = [];

  constructor(private http: HttpClient) { }

  create(user: UserModel): Observable<any> {
    return this.http.post(`${baseUrl}/users/register`, user);
  }

  login(credentials: { username: string; password: string }): Observable<any> {
    return this.http.post(`${baseUrl}/users/login`, credentials);
  }

  update(id: number, user: UserModel): Observable<any> {
    return this.http.put(`${baseUrl}/users/${id}`, user);
  }
}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserModel } from '../../models/user.model';
import { HttpClient } from '@angular/common/http';
import { BASE_URL } from '../../app.constants';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users: UserModel[] = [];

  constructor(private http: HttpClient) { }
  
  register(user: UserModel): Observable<any> {
    return this.http.post(`${BASE_URL}/users/register`, user);
  }
  login(user: UserModel): Observable<any> {
    return this.http.post(`${BASE_URL}/users/login`, user);
  }
  updateUser(id: number, user: UserModel): Observable<any> {
    return this.http.put(`${BASE_URL}/users/${id}`, user);
  }
}
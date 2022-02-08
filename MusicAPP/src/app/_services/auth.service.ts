
//This service sends signup, login HTTP POST requests to back-end.
//localstorage
//Permanent Storage.
//No expire date unless you remove it.
//Domain-specific.

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'https://localhost:44305/api/Authentication';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-type': 'appliction/json-patch+json' })
};
@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private http: HttpClient) { }

  login(UserName: string, Password: string): Observable<any> {
    return this.http.post(AUTH_API + '/login', {
      UserName,
      Password
    }, httpOptions);
  }
  register(user): Observable<any> {
    return this.http.post(AUTH_API + '/register', {
      username: user.UserName,
      email: user.Email,
      password: user.Password
    }, httpOptions);
  }
  gettoken() {
    return !!localStorage.getItem("SessionUser");
  }
}

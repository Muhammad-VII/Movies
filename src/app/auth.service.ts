import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { Observable, BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private _HttpClient: HttpClient) { }
  currentUser = new BehaviorSubject(null);
  register(formData:any):Observable<any>
    {
     return this._HttpClient.post("https://route-egypt-api.herokuapp.com/signup", formData);
    }

  login(loginForm: any):Observable<any>
  {
    return this._HttpClient.post("https://route-egypt-api.herokuapp.com/signin", loginForm)  
  }
  saveCurrentUser(){
    let token:any = localStorage.getItem('token')
    this.currentUser.next(jwtDecode(token))
    console.log(this.currentUser)
  }
}

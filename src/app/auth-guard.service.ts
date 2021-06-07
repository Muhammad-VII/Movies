import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService {
  canActivate(): boolean | Observable<boolean> {
    let token = localStorage.getItem('token');
    if (token) {
      return true;
    }
    this._Router.navigateByUrl('/login');
    return false;
  }
  constructor(private _Router: Router) {}
}

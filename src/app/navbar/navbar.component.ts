import { AuthService } from './../auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  isLogin: boolean = false;
  constructor(private _Router: Router, _AuthService: AuthService) {
    _AuthService.currentUser.subscribe(() => {
      if(_AuthService.currentUser.getValue() != null){
        this.isLogin = false;
      }
      else
      {
        this.isLogin = true
      }
    })
    
    let token = localStorage.getItem('token');
    if (token) {
      // logged in
      this.isLogin = false;
    } else {
      // logged out
      this.isLogin = true;
    }
  }

  logout() {
    localStorage.removeItem('token');
    this._Router.navigateByUrl('/login');
  }

  ngOnInit(): void {}
}

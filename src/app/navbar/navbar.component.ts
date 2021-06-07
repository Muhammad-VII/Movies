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
  showNavLinks: boolean = true;
  constructor(private _Router: Router, _AuthService: AuthService) {
    _AuthService.currentUser.subscribe(() => {
      if(_AuthService.currentUser.getValue() != null){
        this.isLogin = true;
      }
      else
      {
        this.isLogin = false
      }
    })
    
    let token = localStorage.getItem('token');
    if (token) {
      // logged in
      this.showNavLinks = true;
    } else {
      // logged out
      this.showNavLinks = false;
    }
    if (_AuthService.currentUser != null) {
      this.isLogin = true;
    } else {
      this.isLogin = false;
    }
  }

  logout() {
    localStorage.removeItem('token');
    this._Router.navigateByUrl('/login');
  }

  ngOnInit(): void {}
}

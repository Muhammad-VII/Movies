import { Router } from '@angular/router';
import { AuthService } from './../auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { fade } from 'src/animation';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
  animations: [fade]
})
export class SigninComponent implements OnInit {

  constructor(private _AuthService:AuthService, private _Router: Router) { }

  ngOnInit(): void {
  }

  loginForm = new FormGroup({
    email: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required])
  })

  submitLoginForm(loginForm: FormGroup) {
    if(loginForm.invalid){
      return;
    }
    this._AuthService.register(this.loginForm.value).subscribe((data) => {
      if (data.message == 'success')
      {
        localStorage.setItem("userToken", data.token)
        this._Router.navigate(['/home']);
      }
      else 
      {
        alert(data.message)
        this.loginForm.reset()
        console.log("m4 tmam")
      }
    });
  }
}

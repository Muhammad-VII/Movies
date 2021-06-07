import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { fade } from 'src/animation';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  animations: [fade],
})
export class RegisterComponent implements OnInit {
  constructor(private _AuthService: AuthService, private _Router: Router) {}

  error: string = ``;
  registerForm = new FormGroup({
    first_name: new FormControl(null, [
      Validators.minLength(3),
      Validators.maxLength(10),
      Validators.required,
      Validators.pattern('^[A-Z][a-z]{3,10}$'),
    ]),
    last_name: new FormControl(null, [
      Validators.minLength(3),
      Validators.maxLength(10),
      Validators.required,
    ]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [
      Validators.pattern('^[A-Z][a-z0-9]{3,8}$'),
      Validators.required,
    ]),
    age: new FormControl(null, [
      Validators.required,
      Validators.min(16),
      Validators.max(80),
    ]),
  });

  submitRegisterForm(registerForm: FormGroup) {
    if(registerForm.invalid){
      return;
    }
    this._AuthService.register(this.registerForm.value).subscribe((response) => {
      if (response.message == 'success')
      {
        this._Router.navigate(['/login']);
      }
      else 
      {
        this.error = response.errors.email.message;
      }
    });
  }

  ngOnInit(): void {}
}

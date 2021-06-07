import { Component, OnInit } from '@angular/core';
import { fade } from 'src/animation';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
  animations: [fade]
})
export class SigninComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

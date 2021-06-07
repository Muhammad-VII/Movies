import { Component, OnInit } from '@angular/core';
import { fade } from 'src/animation';

@Component({
  selector: 'app-tvshows',
  templateUrl: './tvshows.component.html',
  styleUrls: ['./tvshows.component.scss'],
  animations: [fade]
})
export class TvshowsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

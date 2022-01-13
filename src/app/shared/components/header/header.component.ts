import { Component, OnInit } from '@angular/core';
import { Platform } from 'src/generated/graphql';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  platform: Platform = null;
  favicon = false;
  constructor() { }

  ngOnInit(): void {
    if (localStorage.getItem('platform')) {
      this.platform = JSON.parse(localStorage.getItem('platform'))
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { Platform, Program } from 'src/generated/graphql';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css']
})
export class SidemenuComponent implements OnInit {

  platform: Platform;
  constructor() { }

  ngOnInit(): void {
    if (localStorage.getItem('platform')) {
      this.platform = JSON.parse(localStorage.getItem('platform'))
      console.log(this.platform)
    }
  }

  navigate(e) {
    console.log(e.target);
    
  }

}

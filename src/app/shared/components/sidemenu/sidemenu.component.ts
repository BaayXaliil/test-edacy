import { Component, OnInit } from '@angular/core';
import { Platform, Program } from 'src/generated/graphql';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css']
})
export class SidemenuComponent implements OnInit {

  admin;
  platform: Platform;
  constructor() { }

  ngOnInit(): void {
    if (localStorage.getItem('myProgram')) {
      this.platform = JSON.parse(localStorage.getItem('platform'))
    }
    if (location.pathname == "/preview/create-program" || location.pathname == "/preview/new-program")
      this.admin = true;
  }

  navigate(e) {
    console.log(e.target);
    
  }

}

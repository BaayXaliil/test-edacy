import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css']
})
export class SidemenuComponent implements OnInit {

  admin;
  constructor() { }

  ngOnInit(): void {
    console.log(location.pathname)
    if (location.pathname == "/preview/create-program")
      this.admin = true;
  }

  navigate(e) {
    console.log(e.target);
    
  }

}

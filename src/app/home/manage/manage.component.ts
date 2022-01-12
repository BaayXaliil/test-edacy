import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent implements OnInit {

  program;
  constructor() { }

  ngOnInit(): void {
    if (localStorage.getItem('program')) {
      this.program = JSON.parse(localStorage.getItem('program'))
    }
  }

}

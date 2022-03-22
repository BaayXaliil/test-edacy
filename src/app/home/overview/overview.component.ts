import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(observer =>{
      console.log(observer);
    })
    this.route.queryParams.subscribe(params => {
      console.log(params)
    })
    console.log(this.route.snapshot.params)
  }

}

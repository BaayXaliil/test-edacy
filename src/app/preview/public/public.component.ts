import { Component, OnInit } from '@angular/core';
import { FetchProgramsBySourceGQL, Platform, Program } from 'src/generated/graphql';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.css']
})
export class PublicComponent implements OnInit {

  programs = [];
  platform: Platform;

  constructor(private fetchProgramGQL: FetchProgramsBySourceGQL) { }

  ngOnInit(): void {
    if (localStorage.getItem('platform')) {

      this.platform = JSON.parse(localStorage.getItem('platform'))
      let source = this.platform.source
      this.fetchProgramGQL.fetch({ source }).subscribe(result => {
        if (result.errors) {
          console.log(result.errors)
        } else {
          this.programs = result.data.fetchProgramsBySource
          console.log(this.programs);
          
        }
      })
    }
  }

}

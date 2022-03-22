import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/auth/service/auth.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  constructor(private route: ActivatedRoute, private authService: AuthService) { }

  ngOnInit(): void {
    
    let token = this.route.snapshot.params
    console.log(token)
    this.authService.activationCompte(token).subscribe(res => {
      console.log(res)
    }, (err) => {
      console.log(err.error);
    })
  }

}

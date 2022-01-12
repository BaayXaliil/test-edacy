import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FetchMyPlatformGQL } from 'src/generated/graphql';

@Component({
  selector: 'app-login-domain',
  templateUrl: './login-domain.component.html',
  styleUrls: ['./login-domain.component.css']
})
export class LoginDomainComponent implements OnInit {

  domainForm: FormGroup;
  errorMessage: boolean;
  constructor(
    private formBuilder: FormBuilder,
    private fetchMyPlatformGQL: FetchMyPlatformGQL,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.domainForm = this.formBuilder.group({
      domain: new FormControl('', Validators.required)
    })
  }

  login() {
    console.log(this.domainForm.value);
    this.fetchMyPlatformGQL.fetch({ "subdomain": this.domainForm.get('domain').value }).subscribe(result => {
      if (result.errors) {
        console.log(result.errors)
      } else {
        console.log(result.data.fetchMyPlatform)
        localStorage.setItem('platform', JSON.stringify(result.data.fetchMyPlatform))
        if (localStorage.getItem('prevPage')) {
          let page = localStorage.getItem('prevPage')
          this.router.navigate([page])
        } else
          this.router.navigate(['/home'])
      }
    })
    
  }

}

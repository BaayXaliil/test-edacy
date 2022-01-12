import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CreatePlatformGQL, SubDomainExistsGQL } from 'src/generated/graphql';

@Component({
  selector: 'app-domain',
  templateUrl: './domain.component.html',
  styleUrls: ['./domain.component.css']
})
export class DomainComponent implements OnInit {

  domainForm: FormGroup;
  errorMessage: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private createPlatformGQL: CreatePlatformGQL,
    private subDomainExists: SubDomainExistsGQL,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.domainForm = this.formBuilder.group({
      domain: new FormControl('', Validators.required),
      lang: new FormControl('', Validators.required)
    })
  }

  login() {
    this.subDomainExists.fetch({ "subdomain": this.domainForm.get('domain').value }).subscribe(result => {
      if (result.errors) {
        console.log(result.errors)
      } else {
        this.errorMessage = result.data.subDomainExists
        if (!this.errorMessage) {
          let platform = { "subdomain": this.domainForm.get('domain').value,  "defaultLanguage": this.domainForm.get('lang').value }
          console.log(platform)
          this.createPlatformGQL.mutate({ "platformInput": platform }).subscribe((result) => {
            if (result.errors) {
              console.log(result.errors);
            } else {
              console.log(result.data);
              localStorage.setItem('platform', JSON.stringify(result.data.createPlatform))
              this.router.navigate(['/home'])
            }
          })
        }
      }
    })
    
  }

}

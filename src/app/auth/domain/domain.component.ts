import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CreatePlatformGQL } from 'src/generated/graphql';

@Component({
  selector: 'app-domain',
  templateUrl: './domain.component.html',
  styleUrls: ['./domain.component.css']
})
export class DomainComponent implements OnInit {

  domainForm: FormGroup;
  errorMessage: boolean;

  constructor(private formBuilder: FormBuilder, private createPlatformGQL: CreatePlatformGQL) { }

  ngOnInit(): void {
    this.domainForm = this.formBuilder.group({
      domain: new FormControl('', Validators.required),
      lang: new FormControl('', Validators.required)
    })
  }

  login() {
    let platform = { "subdomain": this.domainForm.get('domain').value,  "defaultLanguage": this.domainForm.get('lang').value }
    console.log(platform)
    this.createPlatformGQL.mutate({ "platformInput": platform }).subscribe((result) => {
      if (result.errors) {
        this.errorMessage = true
        console.log(result.errors[0].message);
      } else {
        this.errorMessage = false
        console.log(result.data);
      }
    })
    
  }

}

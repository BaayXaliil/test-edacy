import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-domain',
  templateUrl: './login-domain.component.html',
  styleUrls: ['./login-domain.component.css']
})
export class LoginDomainComponent implements OnInit {

  domainForm: FormGroup;
  errorMessage: boolean;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.domainForm = this.formBuilder.group({
      domain: new FormControl('', Validators.required)
    })
  }

  login() {
    console.log(this.domainForm.value);
    
  }

}

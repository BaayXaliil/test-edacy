import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { confirmPasswordValidator } from 'src/app/shared/forms/validators/validators';
import { LoginGQL } from 'src/generated/graphql';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private loginGQL: LoginGQL,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    }
    )
  }


  signin() {
    console.log(this.loginForm.value);
    this.loginGQL.mutate({ "credentials": this.loginForm.value }).subscribe(result => {
      if (result.errors) {
        console.log(result.errors);
        
      } else {
        console.log(result.data)
        this.authService.registerCurrentSession(result.data.login)
        this.authService.registerCurrentUser(result.data.login.user)
        this.authService.registerToken(result.data.login.token)
        this.router.navigate(['/auth/domain'])
      }
    })
  }
}

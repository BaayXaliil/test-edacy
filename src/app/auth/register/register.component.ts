import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { confirmPasswordValidator } from 'src/app/shared/forms/validators/validators';
import { RegisterUserGQL } from 'src/generated/graphql';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private registerUserGQL: RegisterUserGQL,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      firstname: new FormControl('', Validators.required),
      lastname: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(3)]),
      confirmPassword: new FormControl('', Validators.required),
      accept: new FormControl('', Validators.required)
    },
      { validator: confirmPasswordValidator }
    )
  }

  get password() {
    return this.registerForm.get('password');
  }

  get confirmPassword() {
    return this.registerForm.get('confimPassword')
  }

  signup() {
    let createUserInput = {
        profile: {
          firstName: this.registerForm.get("firstname").value,
          lastName: this.registerForm.get('lastname').value,
          email: this.registerForm.get("email").value,
          password: this.registerForm.get("password").value
    }}
    console.log(createUserInput);
    this.registerUserGQL.mutate({ "user": createUserInput }).subscribe(result => {
      if (result.errors) {
        console.log(result.errors);
      }
      else {
        console.log(result.data.registerUser);
        
        this.authService.registerCurrentUser(result.data.registerUser.user)
        this.authService.registerToken(result.data.registerUser.token)
        this.authService.registerCurrentSession(result.data.registerUser)
        this.router.navigate(["/auth/domain"])
      }
    })
  }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AuthService } from './service/auth.service';
import { DomainComponent } from './domain/domain.component';
import { LoginDomainComponent } from './login-domain/login-domain.component';

@NgModule({
  declarations: [LoginComponent, RegisterComponent, DomainComponent, LoginDomainComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthService
  ],
})
export class AuthModule { }

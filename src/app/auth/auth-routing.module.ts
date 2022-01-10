import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DomainComponent } from './domain/domain.component';
import { LoginDomainComponent } from './login-domain/login-domain.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'domain', component: DomainComponent },
  { path: 'login-domain', component: LoginDomainComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }

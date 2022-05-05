import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { AuthendicationComponent } from './services/authendication/authendication.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';



@NgModule({
  declarations: [
    LoginComponent,
    ResetPasswordComponent,
    ChangePasswordComponent,
    AuthendicationComponent,
    SignUpComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AuthModule { }

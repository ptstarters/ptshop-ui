import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserSignUpComponent } from './user sign up panel/user-signup.component';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { UserLogInComponent } from './user login panel/user-login.component';

@NgModule({
  declarations: [UserSignUpComponent, UserLogInComponent],
  imports: [CommonModule, SidebarModule, ButtonModule],
  exports: [UserSignUpComponent, UserLogInComponent],
})
export class UserModule { }

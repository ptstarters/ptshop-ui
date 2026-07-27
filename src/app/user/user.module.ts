import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { UserLoginComponent } from './user login panel/user-login.component';
import { UserSignUpComponent } from './user sign up panel/user-signup.component';

@NgModule({
  declarations: [UserLoginComponent, UserSignUpComponent],
  imports: [CommonModule, ButtonModule],
  exports: [UserLoginComponent, UserSignUpComponent],
})
export class SidebarModule {}

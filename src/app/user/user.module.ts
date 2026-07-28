import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserSignUpComponent } from './user sign up panel/user-signup.component';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [UserSignUpComponent,],
  imports: [CommonModule, SidebarModule, ButtonModule],
  exports: [UserSignUpComponent,],
})
export class UserModule { }

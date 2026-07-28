import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

import { StoreLoginComponent } from './store login panel/store-login.component';
import { StoreSignUpComponent } from './store sign up panel/store-signup.component';
import { CascadeSelectModule } from 'primeng/cascadeselect';

@NgModule({
  declarations: [StoreLoginComponent, StoreSignUpComponent],
  imports: [CommonModule, ButtonModule],
  exports: [StoreLoginComponent, StoreSignUpComponent],
})
export class StoreModule {}

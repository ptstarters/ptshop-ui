import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

import { StoreLoginComponent } from './store login panel/store-login.component';
import { StoreSignUpComponent } from './store sign up panel/store-signup.component';
import { CascadeSelectModule } from 'primeng/cascadeselect';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [StoreLoginComponent, StoreSignUpComponent],
    imports: [CommonModule, ButtonModule, CascadeSelectModule, DropdownModule, FormsModule],
    exports: [StoreLoginComponent, StoreSignUpComponent],
})
export class StoreModule { }

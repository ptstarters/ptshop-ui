import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { UserLogInComponent } from './user login panel/user-login.component';
import { UserSignUpComponent } from './user sign up panel/user-signup.component';

@NgModule({
    declarations: [
        UserLogInComponent,
        UserSignUpComponent
    ],
    imports: [
        CommonModule,
        ButtonModule,

    ],
    exports: [
        UserLogInComponent,
        UserSignUpComponent],
})
export class SidebarModule { }

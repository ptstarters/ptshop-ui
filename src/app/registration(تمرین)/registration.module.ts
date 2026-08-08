import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { RegistrationComponent } from './component/registration.component';
import { AppRoutingModule } from "../app-routing.module";

@NgModule({
    declarations: [RegistrationComponent],
    imports: [
        CommonModule,
        ReactiveFormsModule // <-- ضروری برای فرم‌های Reactive
        ,
        AppRoutingModule
    ],
    exports: [RegistrationComponent]  // در صورت نیاز به استفاده در خارج
})
export class RegistrationModule { }
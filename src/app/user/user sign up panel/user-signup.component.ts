import { Component } from "@angular/core";
import { Location } from '@angular/common';

@Component({
    selector: 'app-user-signup',
    templateUrl: './user-signup.component.html',
    styleUrls: ['./user-signup.component.css'],


})

export class UserSignUpComponent {


    register(): void {
        console.log('ثبت‌نام انجام شد');
    }

    constructor(private location: Location) { }

    goBack(): void {
        this.location.back();
    }
}


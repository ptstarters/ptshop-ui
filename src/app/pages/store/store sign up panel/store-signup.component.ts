import { Location } from "@angular/common";
import { Component } from "@angular/core";

@Component({
    selector: 'app-store-signup',
    templateUrl: './store-signup.component.html',
    styleUrls: ['./store-signup.component.css'],


})

export class StoreSignUpComponent {

    businessTypes = [];
    selectedBusinessType = "";
    countries = [];
    cities = [];
    selectedCity = "";
    option = "";


    register(): void {
        console.log('ثبت‌نام انجام شد');
    }

    constructor(private location: Location) { }

    goBack(): void {
        this.location.back();

    }
}

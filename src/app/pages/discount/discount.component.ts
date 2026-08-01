import { Location } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    selector: 'app-discount',
    templateUrl: './discount.Component.html',
    styleUrls: ['./discount.component.css'],

})
export class DiscountComponent {
    constructor(private location: Location) { }

    goBack(): void {
        this.location.back();

    }


}
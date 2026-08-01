import { Location } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    selector: 'app-peyment',
    templateUrl: './peyment.Component.html',
    styleUrls: ['./peyment.component.css'],

})
export class PeymentComponent {
    constructor(private location: Location) { }

    goBack(): void {
        this.location.back();

    }



}
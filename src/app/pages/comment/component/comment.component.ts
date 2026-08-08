import { Location } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    selector: 'app-comment',
    templateUrl: './comment.Component.html',
    styleUrls: ['./comment.component.css'],

})
export class CommentComponent {
    constructor(private location: Location) { }

    goBack(): void {
        this.location.back();

    }


}
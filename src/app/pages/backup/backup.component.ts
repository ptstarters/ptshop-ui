import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
    selector: 'app-backup',
    templateUrl: './backup.Component.html',
    styleUrls: ['./backup.component.css'],

})
export class BackupComponent implements OnInit {
    constructor(private location: Location) { }

    goBack(): void {
        this.location.back();

    }

    items: MenuItem[] = [];
    ngOnInit() {
        this.items = [
            { label: 'مشکل در پرداخت و کیف پول' },
            { label: 'مشکل در سفارش تحویل داده شده' },
            { label: 'پیگیری وضعیت سفارش' },
            { label: 'لغو یا ویرایش سفارش' },
            { label: 'سایر موارد' },

        ];
    }

}
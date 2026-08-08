import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
    selector: 'app-account-menu',
    templateUrl: './account-menu.component.html',
    styleUrls: ['./account-menu.component.css'],


})
export class AccountMenuComponent implements OnInit {
    constructor(private location: Location) { }

    goBack(): void {
        this.location.back();

    }
    items: MenuItem[] = [];

    ngOnInit() {
        this.items = [
            { label: 'تراکنش ها', icon: 'pi pi-credit-card', routerLink: "/peyment" },
            { label: 'تخفیف ها', icon: 'pi pi-percentage', routerLink: "/discount" },
            { label: 'نظرات من', icon: 'pi pi-pencil', routerLink: "/comment" },
            { label: 'پشتیبانی', icon: 'pi pi-wrench', routerLink: "/backup" },
            { label: 'خروج از حساب کاربری', icon: 'pi pi-sign-out', routerLink: "/home" },

        ];
    }
}
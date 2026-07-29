import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
    selector: 'app-account-menu',
    templateUrl: './account-menu.component.html',
    styleUrls: ['./account-menu.component.css'],


})
export class AccountMenuComponent implements OnInit {
    items: MenuItem[] = [];

    ngOnInit() {
        this.items = [
            { label: 'تراکنش ها', icon: 'pi pi-credit-card', },
            { label: 'تخفیف ها', icon: 'pi pi-percentage', },
            { label: 'نظرات من', icon: 'pi pi-pencil' },
            { label: 'پشتیبانی', icon: 'pi pi-wrench', routerLink: "/backup" },
            { label: 'خروج از حساب کاربری', icon: 'pi pi-sign-out', routerLink: "/home" },

        ];
    }
}
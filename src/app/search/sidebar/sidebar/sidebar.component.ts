import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.css']
})


export class SidebarComponent {
    sidebarVisible = false;

    // ساختار منو (همانند کد اصلی اما به صورت داده)
    menuSections = [
        {
            label: 'ورود به حساب',
            items: [
                { label: 'ورود به حساب کاربری', icon: 'pi-user', link: '/login' },
                { label: 'ورود به حساب فروشگاه', icon: 'pi-building' },
                // { label: 'Team', icon: 'pi-users' },
                // { label: 'Messages', icon: 'pi-comments', },
                // { label: 'Calendar', icon: 'pi-calendar' },
                // { label: 'Settings', icon: 'pi-cog' }
            ]
        },
        {
            label: 'APPLICATION',
            items: [
                { label: 'خانه', icon: 'pi-home' },
                { label: 'تنظیمات', icon: 'pi-cog' },
                { label: 'ارتباط با ما', icon: 'pi-phone' },
            ]
        }
    ];

    constructor(private router: Router) { }


    onItemClick(item: any) {
        if (item.children) {
            // اگر زیرمنو دارد، آن را باز/بسته کن
            item.expanded = !item.expanded;
        } else if (item.link) {
            // به مسیر مشخص شده هدایت شو
            this.router.navigate([item.link]);
            // سایدبار را ببند (اختیاری)
            this.sidebarVisible = false;
        }
    }


    closeCallback(event: any) {
        this.sidebarVisible = false;
    }
}
import { Component } from '@angular/core';

@Component({
    selector: 'app-sidebarr-after',
    templateUrl: './sidebar-af.component.html',
    styleUrls: ['sidebar-af.component.css']
})


export class SidebarAfComponent {
    sidebarVisible = false;

    // ساختار منو (همانند کد اصلی اما به صورت داده)
    menuSections = [
        {
            label: 'ورود به حساب',
            items: [
                { label: 'ورود به حساب کاربری', icon: 'pi-user', link: 'login/user' },
                { label: 'ورود به حساب فروشگاه', icon: 'pi-shop', link: '' },
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

    // متد برای باز/بسته کردن زیرمنوها
    toggleExpand(item: any) {
        if (item.children) {
            item.expanded = !item.expanded;
        }
    }

    closeCallback(event: any) {
        this.sidebarVisible = false;
    }
}
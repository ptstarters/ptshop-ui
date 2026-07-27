import { Component } from '@angular/core';

@Component({
    selector: 'app-sidebar-after',
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
                { label: 'ورود به حساب کاربری', icon: 'pi-user' },
                { label: 'ورود به حساب فروشگاه', icon: 'pi-shop' },
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
import { Component } from '@angular/core';
import { Router } from '@angular/router';

type FooterItemId = 'home' | 'discount' | 'orders' | 'account';

interface FooterItem {
  id: FooterItemId;
  title: string;
  icon: string;
  routerLink?: string;
}

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  activeItem: FooterItemId = 'home';

  footerItems: FooterItem[] = [
    {
      id: 'home',
      title: 'خانه',
      icon: 'pi pi-home',
      routerLink: '/home',
    },
    {
      id: 'discount',
      title: 'تخفیف داغ',
      icon: 'pi pi-bolt',
      routerLink: '/discount',
    },
    {
      id: 'orders',
      title: 'سفارش‌ها',
      icon: 'pi pi-list',
    },
    {
      id: 'account',
      title: 'حساب من',
      icon: 'pi pi-user',
      routerLink: '/account-menu',
    },
  ];

  constructor(private router: Router) {}

  selectItem(itemId: FooterItemId): void {
    this.activeItem = itemId;
  }

  isItemActive(item: FooterItem): boolean {
    const currentUrl = this.router.url.split('?')[0].split('#')[0];

    if (item.id === 'home') {
      return currentUrl === '/' || currentUrl === '/home';
    }

    return item.routerLink === currentUrl;
  }

  trackByItemId(index: number, item: FooterItem): FooterItemId {
    return item.id;
  }
}

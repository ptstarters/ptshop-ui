import { Component } from '@angular/core';
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
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  activeItem: FooterItemId = 'home';

  footerItems: FooterItem[] = [
    {
      id: 'home',
      title: 'خانه',
      icon: 'pi pi-home',
      routerLink: "/home"
    },
    {
      id: 'discount',
      title: 'تخفیف روز',
      icon: 'pi pi-bolt',
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
      routerLink: "/account-menu"
    },
  ];

  selectItem(itemId: FooterItemId): void {
    this.activeItem = itemId;
  }

  trackByItemId(index: number, item: FooterItem): FooterItemId {
    return item.id;
  }
}

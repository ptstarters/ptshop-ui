 import { Component } from '@angular/core';
import { Router } from '@angular/router';
 

interface MarketProduct {
  title: string;
  price: string;
  oldPrice?: string;
  discount?: string;
  icon: string;
}

interface MarketCategory {
  title: string;
  icon: string;
}

interface MarketStore {
  name: string;
  deliveryTime: string;
  deliveryPrice: string;
  icon: string;
}

@Component({
  selector: 'app-supermarket',
  templateUrl: './supermarket.component.html',
  styleUrls: ['./supermarket.component.css'],
  })
export class SupermarketComponent {
  cartCount: number = 0;

  products: MarketProduct[] = [
    {
      title: 'شکلات',
      price: '۳۰٬۰۰۰ تومان',
      oldPrice: '۳۵٬۰۰۰ تومان',
      discount: '۱۴٪',
      icon: '🍫',
    },
    {
      title: 'نوشابه پرتقالی',
      price: '۶۶٬۶۰۰ تومان',
      oldPrice: '۷۲٬۰۰۰ تومان',
      discount: '۸٪',
      icon: '🥤',
    },
    {
      title: 'چیپس سیب‌زمینی',
      price: '۵۲٬۸۴۰ تومان',
      oldPrice: '۶۰٬۰۰۰ تومان',
      discount: '۱۲٪',
      icon: '🍟',
    },
    {
      title: 'بستنی وانیلی',
      price: '۴۸٬۰۰۰ تومان',
      oldPrice: '۵۵٬۰۰۰ تومان',
      discount: '۱۳٪',
      icon: '🍦',
    },
    {
      title: 'دستمال کاغذی',
      price: '۲۵٬۲۰۰ تومان',
      oldPrice: '۳۰٬۰۰۰ تومان',
      discount: '۱۶٪',
      icon: '🧻',
    },
    {
      title: 'آب معدنی',
      price: '۱۸٬۰۰۰ تومان',
      icon: '💧',
    },
  ];

  categories: MarketCategory[] = [
    {
      title: 'محصولات کاربردی',
      icon: '🛒',
    },
    {
      title: 'لبنیات و بستنی',
      icon: '🥛',
    },
    {
      title: 'تنقلات',
      icon: '🍿',
    },
    {
      title: 'نوشیدنی',
      icon: '🧃',
    },
    {
      title: 'خواربار و نان',
      icon: '🍞',
    },
    {
      title: 'میوه و سبزیجات',
      icon: '🥦',
    },
    {
      title: 'آرایشی و بهداشتی',
      icon: '🧴',
    },
    {
      title: 'کودک و نوزاد',
      icon: '🍼',
    },
    {
      title: 'سایر محصولات',
      icon: '📦',
    },
  ];

  stores: MarketStore[] = [
    {
      name: 'سوپرمارکت پارس',
      deliveryTime: '۲۰ تا ۳۰ دقیقه',
      deliveryPrice: 'ارسال ۱۵٬۰۰۰ تومان',
      icon: '🏪',
    },
    {
      name: 'فروشگاه بهار',
      deliveryTime: '۳۰ تا ۴۰ دقیقه',
      deliveryPrice: 'ارسال رایگان',
      icon: '🛍️',
    },
    {
      name: 'بازار روز آفتاب',
      deliveryTime: '۱۵ تا ۲۵ دقیقه',
      deliveryPrice: 'ارسال ۱۲٬۰۰۰ تومان',
      icon: '🏬',
    },
  ];

  constructor(private router: Router) {}

  goBack(): void {
    this.router.navigateByUrl('/');
  }

  addToCart(): void {
    this.cartCount++;
  }

  trackProduct(index: number, product: MarketProduct): string {
    return product.title;
  }

  trackCategory(index: number, category: MarketCategory): string {
    return category.title;
  }

  trackStore(index: number, store: MarketStore): string {
    return store.name;
  }
}

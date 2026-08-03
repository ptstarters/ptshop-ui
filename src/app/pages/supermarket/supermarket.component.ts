import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Food } from 'src/app/models/cart.model';
import { ShoppingService } from 'src/app/services/shopping.service';

@Component({
  selector: 'app-supermarket',
  templateUrl: './supermarket.component.html',
  styleUrls: ['./supermarket.component.css'],

})
export class SupermarketComponent implements OnInit {
  cartCount: number = 0;

  products: Food[] = [
    { id: 1, title: 'شکلات', price: '۳۰٬۰۰۰ تومان', oldPrice: '۳۵٬۰۰۰ تومان', discount: '۱۴٪', icon: '🍫' },
    { id: 2, title: 'نوشابه پرتقالی', price: '۶۶٬۶۰۰ تومان', oldPrice: '۷۲٬۰۰۰ تومان', discount: '۸٪', icon: '🥤' },
    { id: 3, title: 'چیپس سیب‌زمینی', price: '۵۲٬۸۴۰ تومان', oldPrice: '۶۰٬۰۰۰ تومان', discount: '۱۲٪', icon: '🍟' },
    { id: 4, title: 'بستنی وانیلی', price: '۴۸٬۰۰۰ تومان', oldPrice: '۵۵٬۰۰۰ تومان', discount: '۱۳٪', icon: '🍦' },
    { id: 5, title: 'دستمال کاغذی', price: '۲۵٬۲۰۰ تومان', oldPrice: '۳۰٬۰۰۰ تومان', discount: '۱۶٪', icon: '🧻' },
    { id: 6, title: 'آب معدنی', price: '۱۸٬۰۰۰ تومان', icon: '💧' },
  ];

  categories = [
    { title: 'محصولات کاربردی', icon: '🛒' },
    { title: 'لبنیات و بستنی', icon: '🥛' },
    { title: 'تنقلات', icon: '🍿' },
    { title: 'نوشیدنی', icon: '🧃' },
    { title: 'خواربار و نان', icon: '🍞' },
    { title: 'میوه و سبزیجات', icon: '🥦' },
    { title: 'آرایشی و بهداشتی', icon: '🧴' },
    { title: 'کودک و نوزاد', icon: '🍼' },
    { title: 'سایر محصولات', icon: '📦' },
  ];

  stores = [
    { name: 'سوپرمارکت پارس', deliveryTime: '۲۰ تا ۳۰ دقیقه', deliveryPrice: 'ارسال ۱۵٬۰۰۰ تومان', icon: '🏪' },
    { name: 'فروشگاه بهار', deliveryTime: '۳۰ تا ۴۰ دقیقه', deliveryPrice: 'ارسال رایگان', icon: '🛍️' },
    { name: 'بازار روز آفتاب', deliveryTime: '۱۵ تا ۲۵ دقیقه', deliveryPrice: 'ارسال ۱۲٬۰۰۰ تومان', icon: '🏬' },
  ];

  constructor(
    private router: Router,
    private shoppingService: ShoppingService
  ) { }

  ngOnInit() {
    // ✅ گوش دادن به تغییرات سبد خرید و به‌روزرسانی تعداد
    this.shoppingService.cart$.subscribe(() => {
      this.cartCount = this.shoppingService.getTotalItems();
    });
  }

  goBack(): void {
    this.router.navigateByUrl('/home');
  }

  // ✅ متد افزودن به سبد خرید
  addToCart(product: Food): void {
    this.shoppingService.addToCart(product);
  }

  // ✅ متد کاهش تعداد از سبد خرید
  deleteFromCart(product: Food): void {
    this.shoppingService.removeFromCart(product.id);
  }

  trackProduct(index: number, product: Food): number {
    return product.id;
  }

  trackCategory(index: number, category: any): string {
    return category.title;
  }

  trackStore(index: number, store: any): string {
    return store.name;
  }
}
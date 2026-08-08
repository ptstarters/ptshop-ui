import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Food } from 'src/app/models/cart.model';
import { ShoppingService } from 'src/app/services/shopping.service';

@Component({
  selector: 'app-supermarket',
  templateUrl: './supermarket.component.html',
  styleUrls: ['./supermarket.component.css'],
})
export class SupermarketComponent implements OnInit, OnDestroy {
  cartCount: number = 0;

  // متغیر برای مدیریت لغو اشتراک‌ها
  private destroy$ = new Subject<void>();

  // متغیر برای نگهداری شناسه تایمر
  private timer: any;

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
    // ✅ اشتراک با takeUntil برای جلوگیری از نشت حافظه
    this.shoppingService.cart$
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        this.cartCount = this.shoppingService.getTotalItems();
      });

    // ✅ شروع یک تایمر (مثلاً هر ۵ ثانیه یکبار پیام در کنسول چاپ کند)
    this.timer = setInterval(() => {
      console.log('  تایمر فعال است - زمان:', new Date().toLocaleTimeString());
      // شما میتوانید هر کار دیگری مثل به‌روزرسانی خودکار قیمت‌ها یا بررسی موجودی انجام دهید
    }, 5000);
  }

  // ✅ هوک ngOnDestroy برای پاکسازی منابع
  ngOnDestroy() {
    // ۱. لغو اشتراک از همه Observableها
    this.destroy$.next();
    this.destroy$.complete();

    // ۲. پاک کردن تایمر
    if (this.timer) {
      clearInterval(this.timer);
      console.log('  تایمر پاک شد');
    }
  }

  goBack(): void {
    this.router.navigateByUrl('/home');
  }

  addToCart(product: Food): void {
    this.shoppingService.addToCart(product);
  }

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
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartItem } from 'src/app/models/cart.model';
import { ShoppingService } from 'src/app/services/shopping.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  startOrder() {
    throw new Error('Method not implemented.');
  }
  selectAddress() {
    throw new Error('Method not implemented.');
  }
  cartItems: CartItem[] = [];
  totalPrice: number = 0;

  constructor(
    private shoppingService: ShoppingService,
    private router: Router
  ) { }

  ngOnInit() {
    this.shoppingService.cart$.subscribe(items => {
      this.cartItems = items;
      this.totalPrice = this.shoppingService.getTotalPrice();
    });
  }

  // ✅ افزایش تعداد یک محصول
  increaseQuantity(foodId: number) {
    const item = this.cartItems.find(i => i.food.id === foodId);
    if (item) {
      this.shoppingService.addToCart(item.food);
    }
  }

  // ✅ کاهش تعداد یک محصول
  decreaseQuantity(foodId: number) {
    this.shoppingService.removeFromCart(foodId);
  }

  // ✅ حذف کامل یک محصول
  removeItem(foodId: number) {
    if (confirm('آیا از حذف این محصول از سبد خرید مطمئن هستید؟')) {
      this.shoppingService.deleteFromCart(foodId);
    }
  }

  // ✅ خالی کردن سبد خرید
  clearCart() {
    if (confirm('آیا از خالی کردن کامل سبد خرید مطمئن هستید؟')) {
      this.shoppingService.clearCart();
    }
  }

  // ✅ ثبت نهایی سفارش
  checkout() {
    if (this.cartItems.length === 0) {
      alert('سبد خرید شما خالی است!');
      return;
    }
    alert('سفارش شما با موفقیت ثبت شد!');
    this.shoppingService.clearCart();
    this.router.navigateByUrl('/');
  }



  // ✅ بازگشت به صفحه سوپرمارکت
  goBack() {
    this.router.navigateByUrl('/supermarket');
  }
}
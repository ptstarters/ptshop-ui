import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CartItem, Food } from '../models/cart.model';


@Injectable({
  providedIn: 'root'
})
export class ShoppingService {
  private cartItems: CartItem[] = [];
  private cartSubject = new BehaviorSubject<CartItem[]>(this.cartItems);
  public cart$: Observable<CartItem[]> = this.cartSubject.asObservable();

  constructor() {
    this.loadFromStorage();
  }

  getCurrentCart(): CartItem[] {
    return this.cartItems;
  }

  getTotalItems(): number {
    return this.cartItems.reduce((total, item) => total + item.quantity, 0);
  }

  getTotalPrice(): number {
    return this.cartItems.reduce((total, item) => {
      const priceNumber = parseInt(item.food.price.replace(/[^0-9]/g, ''), 10);
      return total + (priceNumber * item.quantity);
    }, 0);
  }

  // ✅ متد افزودن به سبد خرید
  addToCart(food: Food): void {
    const existing = this.cartItems.find(item => item.food.id === food.id);
    if (existing) {
      existing.quantity += 1;
    } else {
      this.cartItems.push({ food, quantity: 1 });
    }
    this.updateCart();
  }

  // ✅ متد کاهش تعداد (اگر به صفر برسد، حذف می‌شود)
  removeFromCart(foodId: number): void {
    const existing = this.cartItems.find(item => item.food.id === foodId);
    if (existing) {
      if (existing.quantity > 1) {
        // existing.quantity -= 1;
      } else {
        this.cartItems = this.cartItems.filter(item => item.food.id !== foodId);
      }
    }
    this.updateCart();
  }

  // ✅ متد حذف کامل یک محصول
  deleteFromCart(foodId: number): void {
    this.cartItems = this.cartItems.filter(item => item.food.id !== foodId);
    this.updateCart();
  }

  // ✅ خالی کردن سبد خرید
  clearCart(): void {
    this.cartItems = [];
    this.updateCart();
  }

  // ✅ به‌روزرسانی و انتشار تغییرات
  private updateCart(): void {
    this.cartSubject.next([...this.cartItems]);
    this.saveToStorage();
  }

  // ✅ ذخیره در localStorage
  private saveToStorage(): void {
    localStorage.setItem('shopping_cart', JSON.stringify(this.cartItems));
  }

  // ✅ بارگذاری از localStorage
  private loadFromStorage(): void {
    const stored = localStorage.getItem('shopping_cart');
    if (stored) {
      try {
        this.cartItems = JSON.parse(stored);
        this.cartSubject.next([...this.cartItems]);
      } catch (e) {
        console.error('خطا در بارگذاری سبد خرید:', e);
        this.cartItems = [];
        this.cartSubject.next([]);
      }
    }
  }
}
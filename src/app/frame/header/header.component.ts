import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ShoppingService } from 'src/app/services/shopping.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})

export class HeaderComponent {
  cartCount: number = 0;
  onLogin() {
    throw new Error('Method not implemented.');
  }
  onLogout() {
    throw new Error('Method not implemented.');
  }
  searchValue: string = '';
  sidebarVisible = false;
  searchText = '';

  constructor(
    private router: Router,
    private authService: AuthService,
    private shoppingService: ShoppingService
  ) { }

  ngOnInit() {
    // ✅ گوش دادن به تغییرات سبد خرید و به‌روزرسانی تعداد
    this.shoppingService.cart$.subscribe(() => {
      this.cartCount = this.shoppingService.getTotalItems();
    });
  }

  onSelectAddress(): void {
    console.log('دکمه انتخاب آدرس کلیک شد');
  }

  onOpenCart(): void {
    this.router.navigate(['/cart']);
  }

  onSearch(): void {
    const normalizedSearchValue: string = this.searchValue.trim();

    if (!normalizedSearchValue) {
      return;
    }

    console.log('عبارت جستجو:', normalizedSearchValue);
  }
  openLogin(): void {
    this.router.navigateByUrl('/login');
  }

  openCart(): void {
    this.router.navigateByUrl('/empty-cart');
  }

  goHome(): void {
    this.router.navigateByUrl('/');
  }


}

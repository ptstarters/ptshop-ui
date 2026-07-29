import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
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
    private authService: AuthService
  ) { }

  onSelectAddress(): void {
    console.log('دکمه انتخاب آدرس کلیک شد');
  }

  onOpenCart(): void {
    this.router.navigate(['/login']);
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

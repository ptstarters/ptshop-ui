import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ViewChild } from '@angular/core';
import { SidebarComponent } from '../../sidebar/sidebar/sidebar.component';

@Component({
  selector: 'app-search-header',
  templateUrl: './search-header.component.html',
  styleUrls: ['./search-header.component.css'],
})
export class SearchHeaderComponent {
  searchValue: string = '';
  sidebarVisible = false;
  searchText = '';

  // 2. به کامپوننت سایدبار دسترسی پیدا کن
  @ViewChild(SidebarComponent) sidebarComponent!: SidebarComponent;

  // 3. متد باز کردن سایدبار
  onOpenSidebar() {
    this.sidebarVisible = true;
    if (this.sidebarComponent) {
      this.sidebarComponent.sidebarVisible = true; // مقدار visibility رو در خود سایدبار هم ست کن
    }
  }

  constructor(private router: Router) {}

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

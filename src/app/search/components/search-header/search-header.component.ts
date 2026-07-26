import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-header',
  templateUrl: './search-header.component.html',
  styleUrls: ['./search-header.component.css'],
})
export class SearchHeaderComponent {
  searchValue: string = '';

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
}

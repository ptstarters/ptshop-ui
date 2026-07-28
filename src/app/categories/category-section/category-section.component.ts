import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface MainCategory {
  title: string;
  icon: string;
  badge?: string;
  isMore?: boolean;
}

@Component({
  selector: 'app-category-section',
  templateUrl: './category-section.component.html',
  styleUrls: ['./category-section.component.css'],
})
export class CategorySectionComponent {
  mainCategories: MainCategory[] = [
    {
      title: 'رستوران',
      icon: '🍔',
    },
    {
      title: 'سوپرمارکت',
      icon: '🛒',
    },
    {
      title: 'نانوایی',
      icon: '🥖',
    },
    {
      title: 'شیرینی',
      icon: '🍰',
    },
    {
      title: 'میوه',
      icon: '🍎',
    },
    {
      title: 'پروتئین',
      icon: '🥩',
    },
    {
      title: 'آبمیوه و بستنی',
      icon: '🍦',
    },
    {
      title: 'بیشتر',
      icon: '•••',
      isMore: true,
    },
  ];

  constructor(private router: Router) {}

  selectCategory(category: MainCategory): void {
    const normalizedTitle = category.title.replace(/\s+/g, '');

    if (normalizedTitle === 'سوپرمارکت') {
      this.router.navigateByUrl('/supermarket');
      return;
    }

    console.log('دسته‌بندی انتخاب‌شده:', category.title);
  }

  trackByTitle(index: number, category: MainCategory): string {
    return category.title;
  }
}
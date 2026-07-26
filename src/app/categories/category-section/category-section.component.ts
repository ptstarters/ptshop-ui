import { Component } from '@angular/core';

interface CategoryItem {
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
  mainCategories: CategoryItem[] = [
    {
      title: 'رستوران',
      icon: '🍔',
    },
    {
      title: 'سوپرمارکت',
      icon: '🛒',
    },
    {
      title: 'کافه',
      icon: '☕',
    },
    {
      title: 'شیرینی',
      icon: '🍰',
    },
    {
      title: 'نانوایی',
      icon: '🥖',
    },
    {
      title: 'میوه',
      icon: '🍎',
      badge: 'گالری',
    },
    {
      title: 'پروتئین',
      icon: '🥩',
      badge: 'گالری',
    },
    {
      title: 'آبمیوه بستنی',
      icon: '🍦',
    },
    {
      title: 'آجیل',
      icon: '🥜',
    },
    {
      title: 'مشاهده همه',
      icon: '•••',
      isMore: true,
    },
  ];

  selectCategory(category: CategoryItem): void {
    console.log('دسته‌بندی انتخاب‌شده:', category.title);
  }

  trackByTitle(index: number, category: CategoryItem): string {
    return category.title;
  }
}
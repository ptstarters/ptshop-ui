import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

type DiscountFilterId =
  | 'all'
  | 'party'
  | 'discount'
  | 'free-delivery'
  | 'free-product'
  | 'prize';

interface DiscountFilter {
  id: DiscountFilterId;
  title: string;
  icon: string;
}

@Component({
  selector: 'app-discount',
  templateUrl: './discount.component.html',
  styleUrls: ['./discount.component.css'],
})
export class DiscountComponent {
  activeFilter: DiscountFilterId = 'all';

  discountFilters: DiscountFilter[] = [
    {
      id: 'all',
      title: 'همه',
      icon: '🔥',
    },
    {
      id: 'party',
      title: 'پارتی',
      icon: '🎉',
    },
    {
      id: 'discount',
      title: 'تخفیف',
      icon: '🏷️',
    },
    {
      id: 'free-delivery',
      title: 'ارسال رایگان',
      icon: '🛵',
    },
    {
      id: 'free-product',
      title: 'محصول رایگان',
      icon: '🎁',
    },
    {
      id: 'prize',
      title: 'جایزه خرید',
      icon: '💵',
    },
  ];

  constructor(
    private location: Location,
    private router: Router,
  ) { }

  goBack(): void {
    this.location.back();
  }

  openCart(): void {
    this.router.navigateByUrl('/cart');
  }

  selectAddress(): void {
    console.log('دکمه انتخاب آدرس کلیک شد');
  }

  selectFilter(filterId: DiscountFilterId): void {
    this.activeFilter = filterId;
  }

  trackByFilterId(index: number, filter: DiscountFilter): DiscountFilterId {
    return filter.id;
  }
}

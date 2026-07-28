import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-empty-cart',
  templateUrl: './empty-cart.component.html',
  styleUrls: ['./empty-cart.component.css'],
})
export class EmptyCartComponent {
  constructor(private router: Router) {}

  goBack(): void {
    this.router.navigateByUrl('/login');
  }

  selectAddress(): void {
    console.log('دکمه انتخاب آدرس کلیک شد');
  }

  startOrder(): void {
    this.router.navigateByUrl('/');
  }
}

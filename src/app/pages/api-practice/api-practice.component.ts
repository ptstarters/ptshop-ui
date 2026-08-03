import { Component, OnInit } from '@angular/core';
import { Product, ProductApiService } from 'src/app/services/product-api.service';
import { OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-api-practice',
  templateUrl: './api-practice.component.html',
  styleUrls: ['./api-practice.component.css']
})
export class ApiPracticeComponent implements OnInit {
  products: Product[] = [];
  isLoading: boolean = false;
  errorMessage: string = '';
  constructor(
    private productApiService: ProductApiService
  ) { }
  ngOnInit(): void {
    this.loadProducts();
  }
  loadProducts(): void {
    this.isLoading = true;
    this.errorMessage = '';
    this.productApiService.getProducts(8).subscribe({
      next: (respons) => {
        this.products = respons.products;
        this.isLoading = false;
      },

      error: (error) => {
        console.error('خطای دریافت محصولات', error);

        this.errorMessage = 'دریافت محصولات با خطا مواجه شد. دوباره تلاش کنید.';

        this.isLoading = false;

      },
    });
  }
}

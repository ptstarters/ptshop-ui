import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
  

// شکل یک محصول که از api دریافت میکنیم
export interface Product {
  id: number;
  title: string;
  description:string;
  price: number;
  thumbnail:string;
}

// شکل پاسخ api محصولات
// api مستقیما product[] برنمیگرداند 
// محصولات داخل ویژگی آرایه products قرار دارد
export interface ProductListResponse{
  products: Product[];
  total:number;
  skip:number;
  limit:number;
}


@Injectable({
  providedIn: 'root'
})
export class ProductApiService {
// آدرس اصلی api محصولات
private readonly apiUrl = 'https://dummyjson.com/products';

// angulae شی httpclint را به سرویس تزریق میکند
  constructor(private http: HttpClient) { }
  // get/product
  // دریافت چند محصول از api
  getProducts(limit: number = 8):Observable<ProductListResponse>
  {
    return this.http.get<ProductListResponse>(
      `${this.apiUrl}?limit=${limit}`
    );
  }

  // دریافت یک محصول با شناسه مشخص
  getProductById(ProductId: number): Observable<Product>{
    return this.http.get<Product>(
      `${this.apiUrl}/${ProductId}`
    );
  }
}

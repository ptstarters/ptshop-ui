import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    private baseUrl = 'http://localhost:3000';

    constructor(private http: HttpClient) { }

    // دریافت لیست داده‌ها (GET)
    getItems(): Observable<any> {
        return this.http.get(`${this.baseUrl}/items`);
    }

    // دریافت یک داده با شناسه (GET)
    getItem(id: number): Observable<any> {
        return this.http.get(`${this.baseUrl}/items/${id}`);
    }

    // ایجاد داده جدید (POST)
    createItem(data: any): Observable<any> {
        return this.http.post(`${this.baseUrl}/items`, data);
    }

    // به‌روزرسانی داده (PUT)
    updateItem(id: number, data: any): Observable<any> {
        return this.http.put(`${this.baseUrl}/items/${id}`, data);
    }

    // حذف داده (DELETE)
    deleteItem(id: number): Observable<any> {
        return this.http.delete(`${this.baseUrl}/items/${id}`);
    }
    signUp(userData: any): Observable<any> {
        // معمولاً endpoint ثبت‌نام چیزی شبیه /auth/register یا /users است
        return this.http.post(`${this.baseUrl}/auth/register`, userData);
    }
}
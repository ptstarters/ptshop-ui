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
        return this.http.get(`${this.baseUrl}/users`);
    }

    // دریافت یک داده با شناسه (GET)
    getItem(id: number): Observable<any> {
        return this.http.get(`${this.baseUrl}/users/${id}`);
    }

    // ایجاد داده جدید (POST)
    createItem(data: any): Observable<any> {
        return this.http.post(`${this.baseUrl}/users`, data);
    }

    // به‌روزرسانی داده (PUT)
    updateItem(id: number, data: any): Observable<any> {
        return this.http.put(`${this.baseUrl}/users/${id}`, data);
    }

    // حذف داده (DELETE)
    deleteItem(id: number): Observable<any> {
        return this.http.delete(`${this.baseUrl}/users/${id}`);
    }
    signUp(userData: any): Observable<any> {
        // این آدرس در json-server وجود دارد
        return this.http.post(`${this.baseUrl}/users`, userData);
    }
}
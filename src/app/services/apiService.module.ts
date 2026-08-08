import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    updateUserWithPut(userId: number, fullUserData: { firstName: any; lastName: any; phone: any; address: any; }) {
        throw new Error('Method not implemented.');
    }
    private baseUrl = 'http://localhost:3000';

    constructor(private http: HttpClient) { }

    // دریافت لیست داده‌ها (GET)
    getUsers(): Observable<any> {
        return this.http.get(`${this.baseUrl}/users`);
    }

    // دریافت یک داده با شناسه (GET)
    getUser(id: number): Observable<any> {
        return this.http.get(`${this.baseUrl}/users/${id}`);
    }

    // ایجاد داده جدید (POST)
    createItem(data: any): Observable<any> {
        return this.http.post(`${this.baseUrl}/users`, data);
    }

    // به‌روزرسانی داده (PUT)
    updateUser(id: number, data: any): Observable<any> {
        return this.http.put(`${this.baseUrl}/users/${id}`, data);
    }

    patchUser(id: number, data: any): Observable<any> {
        return this.http.patch(`${this.baseUrl}/users/${id}`, data);
    }

    // حذف داده (DELETE)
    deleteUser(id: number): Observable<any> {
        return this.http.delete(`${this.baseUrl}/users/${id}`);
    }
    signUp(userData: any): Observable<any> {
        // این آدرس در json-server وجود دارد
        return this.http.post(`${this.baseUrl}/users`, userData);
    }
}
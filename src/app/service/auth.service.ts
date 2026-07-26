import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface LoginRequest {
  mobileNumber: string;
}

export interface LoginResponse {
  success: boolean;
  message: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl: string = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  login(mobileNumber: string): Observable<LoginResponse> {
    const body: LoginRequest = {
      mobileNumber: mobileNumber,
    };

    return this.http.post<LoginResponse>(
      `${this.apiUrl}/login`,
      body
    );
  }
}
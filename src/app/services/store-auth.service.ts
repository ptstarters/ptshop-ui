import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import {
  AuthResponse,
  StoreLoginRequest,
  StoreSignupRequest,
} from './auth.models';

@Injectable({
  providedIn: 'root',
})
export class StoreAuthService {
  private readonly apiUrl: string =
    'http://localhost:3000/api/stores';

  constructor(private http: HttpClient) {}

  login(data: StoreLoginRequest): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(
      `${this.apiUrl}/login`,
      data
    );
  }

  signup(data: StoreSignupRequest): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(
      `${this.apiUrl}/signup`,
      data
    );
  }
}
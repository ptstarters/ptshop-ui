import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import {
  AuthResponse,
  UserLoginRequest,
  UserSignupRequest,
} from './auth.models';

@Injectable({
  providedIn: 'root',
})
export class UserAuthService {
  private readonly apiUrl: string =
    'http://localhost:3000/api/users';

  constructor(private http: HttpClient) {}

  login(data: UserLoginRequest): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(
      `${this.apiUrl}/login`,
      data
    );
  }

  signup(data: UserSignupRequest): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(
      `${this.apiUrl}/signup`,
      data
    );
  }
}
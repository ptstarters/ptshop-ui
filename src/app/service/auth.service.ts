import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';

import {
  AuthResponse,
  StoreLoginRequest,
  StoreSignupRequest,

} from './auth.models';

export { AuthResponse, StoreLoginRequest, StoreSignupRequest };

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

  constructor(private http: HttpClient) { }


}

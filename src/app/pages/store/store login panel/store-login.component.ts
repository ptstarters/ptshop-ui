import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { StoreAuthService } from '../../../service/store-auth.service';
import { TokenService } from '../../../service/token.service';
import { AuthResponse } from '../../../service/auth.models';
import { Location } from '@angular/common';

@Component({
  selector: 'app-store-login',
  templateUrl: './store-login.component.html',
  styleUrls: ['./store-login.component.css'],
})
export class StoreLoginComponent {
  mobileNumber: string = '';
  password: string = '';

  isLoading: boolean = false;
  errorMessage: string = '';

  constructor(
    private router: Router,
    private storeAuthService: StoreAuthService,
    private tokenService: TokenService,
    private location: Location
  ) { }

  loginStore(): void {
    if (
      !this.mobileNumber.trim() ||
      !this.password.trim() ||
      this.isLoading
    ) {
      return;
    }

    this.isLoading = true;
    this.errorMessage = '';

    const loginData = {
      mobileNumber: this.mobileNumber,
      password: this.password,
    };

    this.storeAuthService.login(loginData).subscribe({
      next: (response: AuthResponse): void => {
        this.isLoading = false;

        if (!response.success) {
          this.errorMessage = response.message;
          return;
        }

        if (response.token) {
          this.tokenService.setToken(response.token);
        }

        this.router.navigateByUrl('/');
      },

      error: (error): void => {
        this.isLoading = false;

        console.error('ورود ناموفق:', error);

        this.errorMessage =
          error.error?.message ||
          'ورود فروشگاه انجام نشد.';
      },
    });
  }




  get isMobileValid(): boolean {
    return /^09\d{9}$/.test(this.mobileNumber);
  }

  goBack(): void {
    this.location.back();

  }

  continueLogin(): void {
    if (!this.isMobileValid) {
      return;
    }

    console.log('شماره موبایل:', this.mobileNumber);
  }
}
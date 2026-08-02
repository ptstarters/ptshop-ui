import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/apiService.module';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css'],
})
export class LoginComponent {
  mobileNumber: string = '';
  password: string = '';

  constructor(private router: Router,
    private authService: AuthService,
    private location: Location,
    private apiService: ApiService,
  ) { }

  get isMobileValid(): boolean {
    return /^09\d{9}$/.test(this.mobileNumber);
  }
  get isPasswordValid(): boolean {
    return /^09\d{9}$/.test(this.password);
  }

  // doLogin(): void {

  //   this.authService.login();

  // }


  goBack(): void {
    this.location.back();

  }

  continueLogin(): void {
    if (!this.isMobileValid) {
      return;
    }
    if (!this.isPasswordValid) {
      return;
    }

    console.log('شماره موبایل:', this.mobileNumber);
    console.log('رمز عبور:', this.password);



  }
} 
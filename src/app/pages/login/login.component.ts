import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  mobileNumber: string = '';

  constructor(private router: Router) {}

  get isMobileValid(): boolean {
    return /^09\d{9}$/.test(this.mobileNumber);
  }

  goBack(): void {
    this.router.navigate(['/']);
  }

  continueLogin(): void {
    if (!this.isMobileValid) {
      return;
    }

    console.log('شماره موبایل:', this.mobileNumber);
  }
}
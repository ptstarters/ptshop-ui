import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css'],
})
export class LoginComponent {
  mobileNumber: string = '';

  constructor(private router: Router,
    private authService: AuthService,
    private location: Location,
  ) { }

  get isMobileValid(): boolean {
    return /^09\d{9}$/.test(this.mobileNumber);
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

    console.log('شماره موبایل:', this.mobileNumber);



  }
} 
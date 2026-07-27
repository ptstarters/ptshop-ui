import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { UserAuthService } from '../../service/user-auth.service';
import { TokenService } from '../../service/token.service';
import { AuthResponse } from '../../service/auth.service';

@Component({
    selector: 'app-user-login',
    templateUrl: './user-login.component.html',
    styleUrls: ['./user-login.component.css'],
})
export class UserLogInComponent {
    mobileNumber: string = '';

    isLoading: boolean = false;
    errorMessage: string = '';
    successMessage: string = '';

    constructor(
        private router: Router,
        private userAuthService: UserAuthService,
        private tokenService: TokenService
    ) { }

    get isMobileValid(): boolean {
        return /^09\d{9}$/.test(this.mobileNumber);
    }

    goBack(): void {
        this.router.navigateByUrl('/');
    }

    continueLogin(): void {
        if (!this.isMobileValid || this.isLoading) {
            return;
        }

        this.isLoading = true;
        this.errorMessage = '';
        this.successMessage = '';

        const loginData = {
            mobileNumber: this.mobileNumber,
        };

        this.userAuthService.login(loginData).subscribe({
            next: (response: AuthResponse): void => {
                this.isLoading = false;

                if (!response.success) {
                    this.errorMessage = response.message;
                    return;
                }

                this.successMessage = response.message;

                if (response.token) {
                    this.tokenService.setToken(response.token);
                }

                this.router.navigateByUrl('/');
            },

            error: (error): void => {
                this.isLoading = false;

                console.error('User login error:', error);

                this.errorMessage =
                    error.error?.message ||
                    'ارتباط با سرور برقرار نشد.';
            },
        });
    }
}

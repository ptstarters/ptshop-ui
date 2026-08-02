import { Component } from "@angular/core";
import { Location } from '@angular/common';
import { Router } from "@angular/router";
import { ApiService } from "src/app/service/apiService.module";

// 1. تعریف اینترفیس برای داده‌ای که به سرور می‌فرستیم
interface UserSignUp {
    firstName: string;
    lastName: string;
    phone: string;   // بهتر است string باشد چون ممکن است با 0 شروع شود
    password: string;
    address: string;
    // معمولاً role یا نوع کاربر را هم اضافه می‌کنند
    role?: string;
}

@Component({
    selector: 'app-user-signup',
    templateUrl: './user-signup.component.html',
    styleUrls: ['./user-signup.component.css']
})
export class UserSignUpComponent {
    signUp() {
        throw new Error('Method not implemented.');
    }
    // متغیرهای فرم (با مقداردهی اولیه خالی)
    firstName: string = '';
    lastName: string = '';
    phone: string = '';
    password: string = '';
    confirmPassword: string = '';
    address: string = '';

    loading: boolean = false;   // برای نمایش وضعیت بارگذاری

    constructor(
        private apiService: ApiService,
        private router: Router,
        private location: Location
    ) { }

    // متد ثبت‌نام اصلی
    register(): void {
        // 1. اعتبارسنجی سمت کلاینت (تکمیل‌کننده اعتبارسنجی HTML)
        if (this.password !== this.confirmPassword) {
            alert('رمز عبور و تکرار آن مطابقت ندارند!');
            return;
        }

        // 2. ساخت شیء برای ارسال به سرور
        const userData: UserSignUp = {
            firstName: this.firstName,
            lastName: this.lastName,
            phone: this.phone,
            password: this.password, // توجه: در دنیای واقعی حتماً هش (Hash) می‌شود!
            address: this.address
        };

        // 3. فعال کردن حالت بارگذاری
        this.loading = true;

        // 4. ارسال به REST API (با فرض اینکه متد signUp در ApiService وجود دارد)
        this.apiService.signUp(userData).subscribe({
            next: (response: undefined) => {
                console.log('ثبت‌نام با موفقیت انجام شد:', response);
                this.loading = false;
                // پس از ثبت موفق، به صفحه ورود یا داشبورد هدایت کنید
                this.router.navigate(['/login']);
                // یا نمایش پیام موفقیت
            },
            error: (error: undefined) => {
                console.error('خطا در ثبت‌نام:', error);
                this.loading = false;
                // نمایش خطای دریافتی از سرور به کاربر
                alert('ثبت‌نام ناموفق بود! لطفاً دوباره تلاش کنید.');
            }
        });
    }

    goBack(): void {
        this.location.back();
    }
}
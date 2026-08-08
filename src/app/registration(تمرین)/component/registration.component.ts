import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { map, delay } from 'rxjs/operators';

@Component({
    selector: 'app-registration',
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
    registrationForm: FormGroup;
    isSubmitting = false;

    constructor(private fb: FormBuilder) {
        this.registrationForm = this.fb.group({
            // ---------- فیلد username با اعتبارسنجی sync و async ----------
            username: ['',
                {
                    validators: [
                        Validators.required,
                        Validators.minLength(4),
                        Validators.pattern('^[a-zA-Z0-9_]*$')
                    ],
                    asyncValidators: [this.usernameExistsValidator.bind(this)],
                    updateOn: 'blur' // اعتبارسنجی async فقط هنگام خروج از فیلد
                }
            ],
            // ---------- فیلد email فقط sync ----------
            email: ['', [
                Validators.required,
                Validators.email
            ]],
            // ---------- فیلد password فقط sync ----------
            password: ['', [
                Validators.required,
                Validators.minLength(6)
            ]],
            // ---------- فیلد confirmPassword با validator سفارشی sync ----------
            confirmPassword: ['', [
                Validators.required,
                this.passwordMatchValidator.bind(this) // تابع سفارشی همزمان
            ]]
        });
    }

    // ---------- اعتبارسنجی همزمان سفارشی: تطابق رمز عبور ----------
    passwordMatchValidator(control: AbstractControl): ValidationErrors | null {
        const password = this.registrationForm?.get('password')?.value;
        const confirm = control.value;
        return password === confirm ? null : { passwordMismatch: true };
    }

    // ---------- اعتبارسنجی ناهمگام: بررسی یکتایی نام کاربری ----------
    usernameExistsValidator(control: AbstractControl): Observable<ValidationErrors | null> {
        // شبیه‌سازی درخواست HTTP به سرور با تاخیر ۱ ثانیه
        return of(control.value).pipe(
            delay(1000),
            map(username => {
                // لیست فرضی نام‌های تکراری در دیتابیس
                const existingUsernames = ['ali', 'reza', 'sara', 'admin'];
                if (existingUsernames.includes(username.toLowerCase())) {
                    return { usernameExists: true };
                }
                return null;
            })
        );
    }

    // ---------- ارسال فرم ----------
    onSubmit(): void {
        if (this.registrationForm.invalid || this.registrationForm.pending) {
            return;
        }
        this.isSubmitting = true;
        // شبیه‌سازی ارسال به سرور
        setTimeout(() => {
            console.log('فرم با موفقیت ارسال شد:', this.registrationForm.value);
            this.isSubmitting = false;
            alert('ثبت‌نام با موفقیت انجام شد!');
            this.registrationForm.reset();
        }, 1500);
    }

    // دسترسی آسان به کنترل‌ها در قالب
    get f() { return this.registrationForm.controls; }
}
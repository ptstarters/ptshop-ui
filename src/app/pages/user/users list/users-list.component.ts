import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/apiService.module';

@Component({
    selector: 'app-user-list',
    templateUrl: './users-list.component.html',
    styleUrls: ['./users-list.component.css']
})
export class UserListComponent implements OnInit {
    users: any[] = [];        // آرایه کاربران
    loading: boolean = false; // وضعیت بارگذاری

    constructor(private apiService: ApiService) { }

    ngOnInit(): void {
        this.loadUsers(); // بارگذاری اولیه
    }

    // دریافت لیست کاربران (با همان getItems که الان روی /users است)
    loadUsers(): void {
        this.loading = true;
        this.apiService.getUsers().subscribe({
            next: (data) => {
                this.users = data;
                this.loading = false;
            },
            error: (err) => {
                console.error('خطا در دریافت لیست:', err);
                this.loading = false;
                alert('امکان دریافت لیست کاربران وجود ندارد!');
            }
        });
    }

    // حذف کاربر (با همان deleteItem)
    deleteUser(id: number): void {
        if (!confirm(`آیا از حذف کاربر با شناسه ${id} مطمئن هستید؟`)) {
            return; // اگر کاربر انصراف داد، کاری نکن
        }

        this.loading = true;
        this.apiService.deleteUser(id).subscribe({
            next: () => {
                console.log(`✅ کاربر با شناسه ${id} حذف شد.`);
                // 🔥 به‌روزرسانی لیست محلی (حذف از آرایه)
                this.users = this.users.filter(user => user.id !== id);
                this.loading = false;
            },
            error: (err) => {
                console.error(`❌ خطا در حذف کاربر ${id}:`, err);
                this.loading = false;
                alert('حذف کاربر انجام نشد. لطفاً دوباره تلاش کنید.');
            }
        });
    }


}
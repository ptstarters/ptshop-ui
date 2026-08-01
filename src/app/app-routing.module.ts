import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/user/user login panel/user-login.component';
import { EmptyCartComponent } from './pages/empty-cart/empty-cart.component';
import { UserSignUpComponent } from './pages/user/user sign up panel/user-signup.component';
import { StoreLoginComponent } from './pages/store/store login panel/store-login.component';
import { StoreSignUpComponent } from './pages/store/store sign up panel/store-signup.component';
import { TermsComponent } from './pages/terms/terms.component';
import { SupermarketComponent } from './pages/supermarket/supermarket.component';
import { AccountMenuComponent } from './pages/account menu/account-menu.component';
import { BackupComponent } from './pages/backup/backup.component';
import { PeymentComponent } from './pages/peyment/peyment.component';
import { CommentComponent } from './pages/comment/comment.component';
import { DiscountComponent } from './pages/discount/discount.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: UserSignUpComponent },
  { path: 'empty-cart', component: EmptyCartComponent },
  { path: 'login-store', component: StoreLoginComponent },
  { path: 'resister-store', component: StoreSignUpComponent },
  { path: 'terms', component: TermsComponent },
  { path: 'supermarket', component: SupermarketComponent },
  { path: 'account-menu', component: AccountMenuComponent },
  { path: 'backup', component: BackupComponent },
  { path: 'home', component: HomeComponent },
  { path: 'peyment', component: PeymentComponent },
  { path: 'comment', component: CommentComponent },
  { path: 'discount', component: DiscountComponent },


  // مسیر پیش‌فرض (خانه)
  { path: '', component: HomeComponent },

  // مسیر ناموجود (همیشه آخرین باشد)
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

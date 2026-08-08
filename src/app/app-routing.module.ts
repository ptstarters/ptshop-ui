import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/component/home.component';
import { UserLoginComponent } from './pages/user/user login panel/user-login.component';
import { CartComponent } from './pages/cart/component/cart.component';
import { UserSignUpComponent } from './pages/user/user sign up panel/user-signup.component';
import { StoreLoginComponent } from './pages/store/store login panel/store-login.component';
import { StoreSignUpComponent } from './pages/store/store sign up panel/store-signup.component';
import { TermsComponent } from './pages/terms/component/terms.component';
import { SupermarketComponent } from './pages/supermarket/component/supermarket.component';
import { AccountMenuComponent } from './pages/account menu/component/account-menu.component';
import { BackupComponent } from './pages/backup/component/backup.component';
import { DiscountComponent } from './pages/discount/component/discount.component';
import { PeymentComponent } from './pages/peyment/component/peyment.component';
import { CommentComponent } from './pages/comment/component/comment.component';
import { ApiPracticeComponent } from './pages/api-practice/component/api-practice.component';
import { UserListComponent } from './pages/user/users list/users-list.component';
import { RegistrationComponent } from './registration(تمرین)/component/registration.component';

const routes: Routes = [

  { path: 'login', component: UserLoginComponent },
  { path: 'register', component: UserSignUpComponent },
  { path: 'login-store', component: StoreLoginComponent },
  { path: 'resister-store', component: StoreSignUpComponent },
  { path: 'terms', component: TermsComponent },
  { path: 'supermarket', component: SupermarketComponent },
  { path: 'account-menu', component: AccountMenuComponent },
  { path: 'backup', component: BackupComponent },
  { path: 'discount', component: DiscountComponent },
  { path: 'home', component: HomeComponent },
  { path: 'peyment', component: PeymentComponent },
  { path: 'comment', component: CommentComponent },
  { path: 'api-practice', component: ApiPracticeComponent },
  { path: 'user', component: UserListComponent },
  { path: 'cart', component: CartComponent },
  { path: 'registration', component: RegistrationComponent },



  { path: '', component: HomeComponent, },


  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

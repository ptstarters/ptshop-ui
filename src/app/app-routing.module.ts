import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SidebarComponent } from './search/sidebar/sidebar/sidebar.component';
import { EmptyCartComponent } from './pages/empty-cart/empty-cart.component';
import { UserSignUpComponent } from './user/user sign up panel/user-signup.component';
import { StoreLoginComponent } from './store/store login panel/store-login.component';
import { StoreSignUpComponent } from './store/store sign up panel/store-signup.component';
import { TermsComponent } from './pages/terms/terms.component';
import { SupermarketComponent } from './pages/supermarket/supermarket.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: UserSignUpComponent },
  { path: 'empty-cart', component: EmptyCartComponent },
  { path: 'menuSections', component: SidebarComponent },
  { path: 'login-store', component: StoreLoginComponent },
  { path: 'resister-store', component: StoreSignUpComponent },
  { path: 'terms', component: TermsComponent },
  { path: 'supermarket', component: SupermarketComponent },

  // مسیر پیش‌فرض (خانه)
  { path: '', component: HomeComponent, pathMatch: 'full' },

  // مسیر ناموجود (همیشه آخرین باشد)
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

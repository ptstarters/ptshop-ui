import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ButtonModule } from 'primeng/button';
import { CascadeSelectModule } from 'primeng/cascadeselect';
import { DropdownModule } from 'primeng/dropdown';
import { PanelMenuModule } from 'primeng/panelmenu';

import { FrameModule } from '../frame/frame.module';
import { CategoriesModule } from '../categories/categories.module';

import { EmptyCartComponent } from './empty-cart/empty-cart.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './user/user login panel/user-login.component';
import { StoreLoginComponent } from './store/store login panel/store-login.component';
import { StoreSignUpComponent } from './store/store sign up panel/store-signup.component';
import { TermsComponent } from './terms/terms.component';
import { UserSignUpComponent } from './user/user sign up panel/user-signup.component';
import { AccountMenuComponent } from './account menu/account-menu.component';
import { DiscountComponent } from './discount/discount.component';
import { AppRoutingModule } from '../app-routing.module';
import { SupermarketComponent } from './supermarket/supermarket.component';

@NgModule({
  declarations: [
    EmptyCartComponent,
    HomeComponent,
    LoginComponent,
    StoreLoginComponent,
    StoreSignUpComponent,
    TermsComponent,
    UserSignUpComponent,
    AccountMenuComponent,
    DiscountComponent,
    SupermarketComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    ButtonModule,
    CascadeSelectModule,
    DropdownModule,
    PanelMenuModule,

    FrameModule,
    CategoriesModule,
    ],
  exports: [
    EmptyCartComponent,
    HomeComponent,
    LoginComponent,
    StoreLoginComponent,
    StoreSignUpComponent,
    TermsComponent,
    UserSignUpComponent,
    AccountMenuComponent,
    DiscountComponent,
    AppRoutingModule
   ],
})
export class PagesModule {}

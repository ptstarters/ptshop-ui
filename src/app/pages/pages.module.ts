import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ButtonModule } from 'primeng/button';
import { CascadeSelectModule } from 'primeng/cascadeselect';
import { DropdownModule } from 'primeng/dropdown';
import { PanelMenuModule } from 'primeng/panelmenu';

import { CategoriesModule } from '../categories/categories.module';



import { AppRoutingModule } from '../app-routing.module';

import { AccountMenuModule } from './account menu/account-menu.module';
import { BackUpModule } from './backup/backup.module';
import { CartModule } from './cart/cart.module';
import { CommentModule } from './comment/comment.module';
import { DiscountModule } from './discount/discount.module';
import { HomeModule } from './home/home.module';
import { PeymentModule } from './peyment/peyment.module';
import { StoreLoginModule } from './store/store-login.module';
import { StoreSignUpModule } from './store/store-signup.module';
import { SupermarketModule } from './supermarket/supermarket.module';
import { TermsModule } from './terms/terms.module';
import { UserListModule } from './user/user-list.module';
import { UserLoginModule } from './user/user-login.module';
import { UserSignUpModule } from './user/user-signup.module';

@NgModule({

  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    ButtonModule,
    CascadeSelectModule,
    DropdownModule,
    PanelMenuModule,
    CategoriesModule,
    AccountMenuModule,
    BackUpModule,
    CartModule,
    CommentModule,
    DiscountModule,
    HomeModule,
    PeymentModule,
    StoreLoginModule,
    StoreSignUpModule,
    SupermarketModule,
    TermsModule,
    UserListModule,
    UserLoginModule,
    UserSignUpModule
  ],
  exports: [

    CommonModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    ButtonModule,
    CascadeSelectModule,
    DropdownModule,
    PanelMenuModule,
    CategoriesModule,
    AccountMenuModule,
    BackUpModule,
    CartModule,
    CommentModule,
    DiscountModule,
    HomeModule,
    PeymentModule,
    StoreLoginModule,
    StoreSignUpModule,
    SupermarketModule,
    TermsModule,
    UserListModule,
    UserLoginModule,
    UserSignUpModule

  ],
})
export class PagesModule { }

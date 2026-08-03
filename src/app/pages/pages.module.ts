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

import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { UserLoginComponent } from './user/user login panel/user-login.component';
import { StoreLoginComponent } from './store/store login panel/store-login.component';
import { StoreSignUpComponent } from './store/store sign up panel/store-signup.component';
import { TermsComponent } from './terms/terms.component';
import { UserSignUpComponent } from './user/user sign up panel/user-signup.component';
import { AccountMenuComponent } from './account menu/account-menu.component';
import { DiscountComponent } from './discount/discount.component';
import { AppRoutingModule } from '../app-routing.module';
import { SupermarketComponent } from './supermarket/supermarket.component';
import { UserListComponent } from './user/users list/users-list.component';
import { ApiPracticeComponent } from './api-practice/api-practice.component';
import { PeymentComponent } from './peyment/peyment.component';
import { BackupComponent } from './backup/backup.component';
import { CommentComponent } from './comment/comment.component';

@NgModule({
  declarations: [
    CartComponent,
    HomeComponent,
    UserLoginComponent,
    UserSignUpComponent,
    UserListComponent,
    StoreLoginComponent,
    StoreSignUpComponent,
    TermsComponent,
    AccountMenuComponent,
    DiscountComponent,
    SupermarketComponent,
    ApiPracticeComponent,
    PeymentComponent,
    BackupComponent,
    CommentComponent

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
    CartComponent,
    HomeComponent,
    UserLoginComponent,
    UserSignUpComponent,
    UserListComponent,
    StoreLoginComponent,
    StoreSignUpComponent,
    TermsComponent,
    AccountMenuComponent,
    DiscountComponent,
    AppRoutingModule,
    PeymentComponent,
    BackupComponent,
    CommentComponent,
  ],
})
export class PagesModule { }

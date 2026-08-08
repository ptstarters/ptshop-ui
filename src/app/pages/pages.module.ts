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

import { CartComponent } from './cart/component/cart.component';
import { HomeComponent } from './home/component/home.component';
import { UserLoginComponent } from './user/user login panel/user-login.component';
import { StoreLoginComponent } from './store/store login panel/store-login.component';
import { StoreSignUpComponent } from './store/store sign up panel/store-signup.component';
import { TermsComponent } from './terms/component/terms.component';
import { UserSignUpComponent } from './user/user sign up panel/user-signup.component';
import { DiscountComponent } from './discount/component/discount.component';
import { AppRoutingModule } from '../app-routing.module';
import { SupermarketComponent } from './supermarket/component/supermarket.component';
import { UserListComponent } from './user/users list/users-list.component';
import { ApiPracticeComponent } from './api-practice/component/api-practice.component';
import { PeymentComponent } from './peyment/component/peyment.component';
import { BackupComponent } from './backup/component/backup.component';
import { CommentComponent } from './comment/component/comment.component';

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

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';


import { CascadeSelectModule } from 'primeng/cascadeselect';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { EmptyCartComponent } from './empty-cart/empty-cart.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './user/user login panel/user-login.component';
import { StoreLoginComponent } from './store/store login panel/store-login.component';
import { StoreSignUpComponent } from './store/store sign up panel/store-signup.component';
import { SupermarketComponent } from './supermarket/supermarket.component';
import { TermsComponent } from './terms/terms.component';
import { UserSignUpComponent } from './user/user sign up panel/user-signup.component';
import { FrameModule } from "src/app/frame/frame.module";
import { CategoriesModule } from "src/app/categories/categories.module";
import { AppRoutingModule } from '../app-routing.module';
import { PanelMenuModule } from 'primeng/panelmenu';
import { AccountMenuComponent } from './account menu/account-menu.component';
import { RouterModule } from '@angular/router';
import { BackupComponent } from './backup/backup.component';

@NgModule({
    declarations: [
        EmptyCartComponent,
        HomeComponent,
        LoginComponent,
        StoreLoginComponent,
        StoreSignUpComponent,
        SupermarketComponent,
        TermsComponent,
        UserSignUpComponent,
        AccountMenuComponent,
        BackupComponent
    ],

    imports: [
        CommonModule,
        ButtonModule,
        CascadeSelectModule,
        DropdownModule,
        FormsModule,
        FrameModule,
        CategoriesModule,
        AppRoutingModule,
        PanelMenuModule,
        RouterModule
    ],

    exports: [
        EmptyCartComponent,
        HomeComponent,
        LoginComponent,
        StoreLoginComponent,
        StoreSignUpComponent,
        SupermarketComponent,
        TermsComponent,
        UserSignUpComponent
    ],
})
export class PagesModule { }

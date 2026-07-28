import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { RouterModule } from '@angular/router';
import { FooterModule } from './footer/footer.module';
 import { CategoriesModule } from './categories/categories.module';
import { HttpClientModule } from '@angular/common/http';
import { EmptyCartComponent } from './pages/empty-cart/empty-cart.component';
import { UserModule } from './user/user.module';
import { StoreModule } from './store/store.module';
import { SearchModule } from './search/search.module';

@NgModule({
  declarations: [AppComponent, HomeComponent, LoginComponent, EmptyCartComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CategoriesModule,
    FormsModule,
    ButtonModule,
    InputTextModule,
    RouterModule,
    FooterModule,
    SharedModule,
    AppRoutingModule,
    HttpClientModule,
    UserModule,
    StoreModule,
    SearchModule

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
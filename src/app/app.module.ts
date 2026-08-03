import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { PagesModule } from './pages/pages.module';
import { UserListComponent } from './pages/user/users list/users-list.component';
import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ButtonModule,
    InputTextModule,
    SharedModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    PagesModule,
    FormsModule,
    CommonModule


  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
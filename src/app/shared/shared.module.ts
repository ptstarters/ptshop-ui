import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { SidebarModule } from 'primeng/sidebar';
import { RippleModule } from 'primeng/ripple';
import { AvatarModule } from 'primeng/avatar';
import { StyleClassModule } from 'primeng/styleclass';
import { DropdownModule } from 'primeng/dropdown';
import { CascadeSelectModule } from 'primeng/cascadeselect';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    FormsModule,
    ButtonModule,
    InputTextModule,
    SidebarModule,
    RippleModule,
    AvatarModule,
    StyleClassModule,
    DropdownModule,
    CascadeSelectModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    RouterModule,

    ButtonModule,
    InputTextModule,
    SidebarModule,
    RippleModule,
    AvatarModule,
    StyleClassModule,
    DropdownModule,
    CascadeSelectModule,
  ],
})
export class SharedModule { }
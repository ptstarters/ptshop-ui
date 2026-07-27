import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SidebarModule } from 'primeng/sidebar';
import { RippleModule } from 'primeng/ripple';
import { AvatarModule } from 'primeng/avatar';
import { StyleClassModule } from 'primeng/styleclass';

import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    FormsModule,
    ButtonModule,
    InputTextModule,
    SidebarModule,
    RippleModule,
    AvatarModule,
    StyleClassModule,
  ],

  exports: [CommonModule,
    FormsModule,
    ButtonModule,
    InputTextModule,
    SidebarModule,
    RippleModule,
    AvatarModule,
    StyleClassModule,

  ],
})
export class SharedModule { }

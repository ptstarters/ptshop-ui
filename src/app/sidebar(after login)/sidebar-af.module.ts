import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { SidebarAfComponent } from './sidebar/sidebar-af.component';
import { SidebarModule } from 'primeng/sidebar';

@NgModule({
    declarations: [
        SidebarAfComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        AvatarModule,
        ButtonModule,
        SidebarModule
    ],
    exports: [
        SidebarAfComponent
    ],
})
export class SidebarAfModule { }

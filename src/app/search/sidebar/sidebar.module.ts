import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        SidebarComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        RouterModule
    ],
    exports: [
        SidebarComponent
    ],
})
export class SidebarModule { }

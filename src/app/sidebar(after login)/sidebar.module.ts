import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
    declarations: [
        SidebarComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
    ],
    exports: [
        SidebarComponent
    ],
})
export class SidebarModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CascadeSelectModule } from 'primeng/cascadeselect';
import { DropdownModule } from 'primeng/dropdown';
import { PanelMenuModule } from 'primeng/panelmenu';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { UserListComponent } from './users list/users-list.component';

@NgModule({
    declarations: [

        UserListComponent
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

    ],
    exports: [

        UserListComponent
    ],
})
export class UserListModule { }

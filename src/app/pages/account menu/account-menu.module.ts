import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CascadeSelectModule } from 'primeng/cascadeselect';
import { DropdownModule } from 'primeng/dropdown';
import { PanelMenuModule } from 'primeng/panelmenu';
import { AccountMenuComponent } from './component/account-menu.component';
import { AppRoutingModule } from 'src/app/app-routing.module';

@NgModule({
    declarations: [

        AccountMenuComponent
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

        AccountMenuComponent,

    ],
})
export class AccountMenuModule { }

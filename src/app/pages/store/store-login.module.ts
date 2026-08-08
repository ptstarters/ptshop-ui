import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CascadeSelectModule } from 'primeng/cascadeselect';
import { DropdownModule } from 'primeng/dropdown';
import { PanelMenuModule } from 'primeng/panelmenu';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { StoreLoginComponent } from './store login panel/store-login.component';

@NgModule({
    declarations: [

        StoreLoginComponent
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

        StoreLoginComponent
    ],
})
export class StoreLoginModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CascadeSelectModule } from 'primeng/cascadeselect';
import { DropdownModule } from 'primeng/dropdown';
import { PanelMenuModule } from 'primeng/panelmenu';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { DiscountComponent } from './component/discount.component';
import { FrameModule } from "src/app/frame/frame.module";

@NgModule({
    declarations: [

        DiscountComponent
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
        FrameModule
    ],
    exports: [

        DiscountComponent
    ],
})
export class DiscountModule { }

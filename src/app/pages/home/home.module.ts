import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CascadeSelectModule } from 'primeng/cascadeselect';
import { DropdownModule } from 'primeng/dropdown';
import { PanelMenuModule } from 'primeng/panelmenu';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { HomeComponent } from './component/home.component';
import { FrameModule } from "src/app/frame/frame.module";
import { CategoriesModule } from "src/app/categories/categories.module";

@NgModule({
    declarations: [

        HomeComponent
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
        FrameModule,
        CategoriesModule
    ],
    exports: [

        HomeComponent
    ],
})
export class HomeModule { }

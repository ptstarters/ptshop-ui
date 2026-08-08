import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
    declarations: [FooterComponent, HeaderComponent],
    imports: [CommonModule, FormsModule, RouterModule, AppRoutingModule],
    exports: [FooterComponent, HeaderComponent],
})
export class FrameModule { }

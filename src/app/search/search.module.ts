import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { SearchHeaderComponent } from './components/search-header/search-header.component';
import { SidebarModule } from "./sidebar/sidebar.module";



@NgModule({
  declarations: [

    SearchHeaderComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    SidebarModule
  ],
  exports: [
    SearchHeaderComponent
  ]
})
export class SearchModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { SearchHeaderComponent } from './components/search-header/search-header.component';



@NgModule({
  declarations: [
    
    SearchHeaderComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[
    SearchHeaderComponent
  ]
})
export class SearchModule { }

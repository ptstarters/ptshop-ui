import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { CategorySectionComponent } from './category-section/category-section.component';

@NgModule({
  declarations: [CategorySectionComponent],
  imports: [CommonModule, SharedModule],
  exports: [CategorySectionComponent],
})
export class CategoriesModule {}

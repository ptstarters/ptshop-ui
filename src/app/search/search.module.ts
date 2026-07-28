import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { SearchHeaderComponent } from './components/search-header/search-header.component';
import { SidebarComponent } from './sidebar/sidebar/sidebar.component';

@NgModule({
  declarations: [SearchHeaderComponent, SidebarComponent],
  imports: [SharedModule],
  exports: [SearchHeaderComponent, SidebarComponent],
})
export class SearchModule {}

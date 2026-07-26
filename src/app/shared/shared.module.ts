import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

//primeNg Modules
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  declarations: [],
  imports: [CommonModule, FormsModule, ButtonModule, InputTextModule,],
  exports: [CommonModule, FormsModule, ButtonModule, InputTextModule],
})
export class SharedModule {}

import { NgModule } from '@angular/core';
import { FrameModule } from '../frame/frame.module';
import { PagesModule } from '../pages/pages.module';


@NgModule({
  imports: [
    FrameModule,


  ],
  exports: [
    FrameModule,

  ],
})
export class SharedModule { }
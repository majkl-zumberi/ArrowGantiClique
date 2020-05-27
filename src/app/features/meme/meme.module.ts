import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MemeRoutingModule } from './meme-routing.module';
import { MemeComponent } from './main/meme.component';


@NgModule({
  declarations: [MemeComponent],
  imports: [
    CommonModule,
    MemeRoutingModule
  ]
})
export class MemeModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MemeRoutingModule } from './meme-routing.module';
import { MemeComponent } from './components/main/meme.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MemeListComponent } from './components/meme-list/meme-list.component';
import { CardsComponent } from 'src/app/features/meme/components/cards/cards.component';
import { MemeItemComponent } from './components/meme-item/meme-item.component';
import { MemeItemDirective } from 'src/app/shared/directives/meme-item.directive';
import { MemeDetailComponent } from './components/meme-detail/meme-detail.component';


@NgModule({
  declarations: [
    MemeComponent,
    CardsComponent,
    MemeListComponent,
    MemeItemComponent,
    MemeDetailComponent],
  imports: [
    CommonModule,
    MemeRoutingModule,
    SharedModule
  ]
})
export class MemeModule { }

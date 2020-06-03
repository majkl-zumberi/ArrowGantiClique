import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeedRoutingModule } from './feed-routing.module';
import { FeedComponent } from './components/main/feed.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FeedbackComponent } from './components/feedback/feedback.component';


@NgModule({
  declarations: [FeedComponent, FeedbackComponent],
  imports: [
    CommonModule,
    FeedRoutingModule,
    SharedModule
  ]
})
export class FeedModule { }

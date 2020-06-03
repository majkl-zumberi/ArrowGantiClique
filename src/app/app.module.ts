import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { HomepageComponent } from './features/home/components/homepage/homepage.component';
import { MemeListComponent } from './features/meme/components/meme-list/meme-list.component';
import { FeedbackComponent } from './features/feed/components/feedback/feedback.component';
import { ProfiloComponent } from './features/manage/components/profilo/profilo.component';
import { EditProfileComponent } from './features/manage/components/edit-profile/edit-profile.component';
import { MemeItemComponent } from './features/meme/components/meme-item/meme-item.component';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { CardsComponent } from './features/meme/components/cards/cards.component';
import { MemeDetailComponent } from './features/meme/components/meme-detail/meme-detail.component';
import { MemeItemDirective } from './shared/directives/meme-item.directive';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
    FeedbackComponent,
    PageNotFoundComponent,
    
  ],
  imports: [
    CoreModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

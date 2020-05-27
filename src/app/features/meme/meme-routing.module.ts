import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MemeComponent } from './main/meme.component';

const routes: Routes = [{ path: '', component: MemeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MemeRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MemeComponent } from './components/main/meme.component';
import { MemeListComponent } from './components/meme-list/meme-list.component';
import { CardsComponent } from 'src/app/features/meme/components/cards/cards.component';
import { CanActivateGuard } from 'src/app/components/guard/can-activate.guard';
import { MemeDetailComponent } from './components/meme-detail/meme-detail.component';

const routes: Routes = [
  { path: '', component: MemeComponent,children : [
    { path: 'list', component: MemeListComponent,canActivate:[CanActivateGuard]},
    { path: 'cards', component: CardsComponent,canActivate:[CanActivateGuard]},
    {path:'detail/:id',component: MemeDetailComponent,canActivate:[CanActivateGuard]},
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MemeRoutingModule { }

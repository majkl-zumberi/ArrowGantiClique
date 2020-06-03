import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManageComponent } from './components/main/manage.component';
import { ProfiloComponent } from './components/profilo/profilo.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';

const routes: Routes = [
  { path: '', redirectTo: '/manage/profilo', pathMatch: 'full' },
  { path: '', component: ManageComponent, children : [
    { path: 'profilo', component: ProfiloComponent},
    { path: 'editProfile', component: EditProfileComponent}
  ] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageRoutingModule { }

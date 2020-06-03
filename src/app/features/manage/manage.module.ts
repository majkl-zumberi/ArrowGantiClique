import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageRoutingModule } from './manage-routing.module';
import { ManageComponent } from './components/main/manage.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { ProfiloComponent } from './components/profilo/profilo.component';


@NgModule({
  declarations: [ManageComponent, EditProfileComponent, ProfiloComponent],
  imports: [
    CommonModule,
    ManageRoutingModule,
    SharedModule
  ]
})
export class ManageModule { }

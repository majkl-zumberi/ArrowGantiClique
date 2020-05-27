import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthComponent } from './main/auth.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CanloadloginGuard } from 'src/app/components/guard/canloadlogin.guard';

const routes: Routes = [{ path: '', component: AuthComponent, children : [
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent}
] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }

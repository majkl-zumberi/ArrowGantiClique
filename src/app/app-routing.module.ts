import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { ProfiloComponent } from './components/profilo/profilo.component';
import { LoginComponent } from './features/auth/components/login/login.component';
import { RegisterComponent } from './features/auth/components/register/register.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { CanActivateGuard } from './components/guard/can-activate.guard';
import { CanActivateLoginGuard } from './components/guard/can-activate-login.guard';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { CardsComponent } from './features/meme/components/cards/cards.component';
import { CanDeactivateEditProfileGuard } from './components/guard/can-deactivate-edit-profile.guard';

import { CanloadloginGuard } from './components/guard/canloadlogin.guard';
import { MemeDetailComponent } from './features/meme/components/meme-detail/meme-detail.component';
import { MemeListComponent } from './features/meme/components/meme-list/meme-list.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component:  HomepageComponent, canActivate:[CanActivateGuard]},
  // { path: 'memes', component:  MemeListComponent,  canActivate:[CanActivateGuard]},
  { path: 'feedback', component: FeedbackComponent,  canActivate:[CanActivateGuard]},
  { path: 'profilo', component: ProfiloComponent,  canActivate:[CanActivateGuard]},
  //{ path: 'login', component: LoginComponent, canActivate:[CanActivateLoginGuard]},
  //{ path: 'register', component: RegisterComponent, canActivate:[CanActivateLoginGuard]},
  //{path:'detail/:id',component: MemeDetailComponentponent},
  { path: 'editProfile', component: EditProfileComponent, canActivate:[CanActivateGuard],canDeactivate:[CanDeactivateEditProfileGuard]},
  // { path: 'cards', component: CardsComponent, canActivate:[CanActivateGuard]},
  { path: 'auth', loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule), canLoad:[CanloadloginGuard] },
  { path: 'meme', loadChildren: () => import('./features/meme/meme.module').then(m => m.MemeModule) },
  {path:'**',component: PageNotFoundComponent}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

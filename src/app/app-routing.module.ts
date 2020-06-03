import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './features/home/components/homepage/homepage.component';
import { FeedbackComponent } from './features/feed/components/feedback/feedback.component';
import { ProfiloComponent } from './features/manage/components/profilo/profilo.component';
import { LoginComponent } from './features/auth/components/login/login.component';
import { RegisterComponent } from './features/auth/components/register/register.component';
import { EditProfileComponent } from './features/manage/components/edit-profile/edit-profile.component';
import { CanActivateGuard } from './core/guard/can-activate.guard';
import { CanActivateLoginGuard } from './core/guard/can-activate-login.guard';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { CardsComponent } from './features/meme/components/cards/cards.component';
import { CanDeactivateEditProfileGuard } from './core/guard/can-deactivate-edit-profile.guard';

import { CanloadloginGuard } from './core/guard/canloadlogin.guard';
import { MemeDetailComponent } from './features/meme/components/meme-detail/meme-detail.component';
import { MemeListComponent } from './features/meme/components/meme-list/meme-list.component';
import { CanLoadCompsGuard } from './core/guard/can-load-comps.guard';


const routes: Routes = [
  { path: '', redirectTo: '/homepage', pathMatch: 'full' },
  //{ path: 'home', component:  HomepageComponent, canActivate:[CanActivateGuard]},
  //{ path: 'memes', component:  MemeListComponent,  canActivate:[CanActivateGuard]},
  //{ path: 'feedback', component: FeedbackComponent,  canActivate:[CanActivateGuard]},
  //{ path: 'profilo', component: ProfiloComponent,  canActivate:[CanActivateGuard]},
  //{ path: 'login', component: LoginComponent, canActivate:[CanActivateLoginGuard]},
  //{ path: 'register', component: RegisterComponent, canActivate:[CanActivateLoginGuard]},
  //{path:'detail/:id',component: MemeDetailComponentponent},
  //{ path: 'editProfile', component: EditProfileComponent, canActivate:[CanActivateGuard],canDeactivate:[CanDeactivateEditProfileGuard]},
  //{ path: 'cards', component: CardsComponent, canActivate:[CanActivateGuard]},
  { path: 'auth', loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule), canLoad:[CanloadloginGuard] },
  { path: 'meme', loadChildren: () => import('./features/meme/meme.module').then(m => m.MemeModule) },
  { path: 'homepage', loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule), canLoad:[CanLoadCompsGuard] },
  { path: 'manage', loadChildren: () => import('./features/manage/manage.module').then(m => m.ManageModule), canLoad:[CanLoadCompsGuard] },
  { path: 'feed', loadChildren: () => import('./features/feed/feed.module').then(m => m.FeedModule), canLoad:[CanLoadCompsGuard] },
  {path:'**',component: PageNotFoundComponent}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

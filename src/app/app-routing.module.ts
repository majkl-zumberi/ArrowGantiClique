import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { MemeListComponent } from './components/meme-list/meme-list.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { ProfiloComponent } from './components/profilo/profilo.component';
import { LoginComponent } from './features/auth/login/login.component';
import { RegisterComponent } from './features/auth/register/register.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { CanActivateGuard } from './components/guard/can-activate.guard';
import { CanActivateLoginGuard } from './components/guard/can-activate-login.guard';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { CardsComponent } from './components/cards/cards.component';
import { CanDeactivateEditProfileGuard } from './components/guard/can-deactivate-edit-profile.guard';
import { MemeDetailComponent } from './components/meme-detail/meme-detail.component';
import { CanloadloginGuard } from './components/guard/canloadlogin.guard';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component:  HomepageComponent, canActivate:[CanActivateGuard]},
  { path: 'memes', component:  MemeListComponent,  canActivate:[CanActivateGuard]},
  { path: 'feedback', component: FeedbackComponent,  canActivate:[CanActivateGuard]},
  { path: 'profilo', component: ProfiloComponent,  canActivate:[CanActivateGuard]},
  //{ path: 'login', component: LoginComponent, canActivate:[CanActivateLoginGuard]},
  //{ path: 'register', component: RegisterComponent, canActivate:[CanActivateLoginGuard]},
  { path: 'editProfile', component: EditProfileComponent, canActivate:[CanActivateGuard],canDeactivate:[CanDeactivateEditProfileGuard]},
  { path: 'cards', component: CardsComponent, canActivate:[CanActivateGuard]},
  {path:'detail/:id',component: MemeDetailComponent},
  { path: 'auth', loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule), canLoad:[CanloadloginGuard] },
  { path: 'meme', loadChildren: () => import('./features/meme/meme.module').then(m => m.MemeModule) },
  {path:'**',component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

var ROUTES_INDEX = {"name":"<root>","kind":"module","className":"AppModule","children":[{"name":"routes","filename":"src/app/app-routing.module.ts","module":"AppRoutingModule","children":[{"path":"","redirectTo":"/homepage","pathMatch":"full"},{"path":"auth","loadChildren":"./features/auth/auth.module#AuthModule","canLoad":["CanloadloginGuard"],"children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/features/auth/auth-routing.module.ts","module":"AuthRoutingModule","children":[{"path":"","redirectTo":"/auth/login","pathMatch":"full"},{"path":"","component":"AuthComponent","children":[{"path":"login","component":"LoginComponent"},{"path":"register","component":"RegisterComponent"}]}],"kind":"module"}],"module":"AuthModule"}]},{"path":"meme","loadChildren":"./features/meme/meme.module#MemeModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/features/meme/meme-routing.module.ts","module":"MemeRoutingModule","children":[{"path":"","component":"MemeComponent","children":[{"path":"list","component":"MemeListComponent","canActivate":["CanActivateGuard"]},{"path":"cards","component":"CardsComponent","canActivate":["CanActivateGuard"]},{"path":"detail/:id","component":"MemeDetailComponent","canActivate":["CanActivateGuard"]}]}],"kind":"module"}],"module":"MemeModule"}]},{"path":"homepage","loadChildren":"./features/home/home.module#HomeModule","canLoad":["CanLoadCompsGuard"],"children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/features/home/home-routing.module.ts","module":"HomeRoutingModule","children":[{"path":"","redirectTo":"/homepage/home","pathMatch":"full"},{"path":"","component":"HomeComponent","children":[{"path":"home","component":"HomepageComponent"}]}],"kind":"module"}],"module":"HomeModule"}]},{"path":"manage","loadChildren":"./features/manage/manage.module#ManageModule","canLoad":["CanLoadCompsGuard"],"children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/features/manage/manage-routing.module.ts","module":"ManageRoutingModule","children":[{"path":"","redirectTo":"/manage/profilo","pathMatch":"full"},{"path":"","component":"ManageComponent","children":[{"path":"profilo","component":"ProfiloComponent"},{"path":"editProfile","component":"EditProfileComponent"}]}],"kind":"module"}],"module":"ManageModule"}]},{"path":"feed","loadChildren":"./features/feed/feed.module#FeedModule","canLoad":["CanLoadCompsGuard"],"children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/features/feed/feed-routing.module.ts","module":"FeedRoutingModule","children":[{"path":"","redirectTo":"/feed/feedback","pathMatch":"full"},{"path":"","component":"FeedComponent","children":[{"path":"feedback","component":"FeedbackComponent"}]}],"kind":"module"}],"module":"FeedModule"}]},{"path":"**","component":"PageNotFoundComponent"}],"kind":"module"}]}

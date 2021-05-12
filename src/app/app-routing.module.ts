import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  // {
  //   path: 'home',
  //   loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  // },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./pages/menu/settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'photographer-portal',
    loadChildren: () => import('./pages/menu/photographer-portal/photographer-portal.module').then( m => m.PhotographerPortalPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/menu/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'surftrip',
    loadChildren: () => import('./pages/surftrip/surftrip.module').then( m => m.SurftripPageModule)
  },
  {
    path: 'account',
    loadChildren: () => import('./pages/menu/account/account.module').then( m => m.AccountPageModule)
  },
  // {
  //   path: 'signup',
  //   loadChildren: () => import('./pages/signup/signup.module').then( m => m.SignupPageModule)
  // },
  // {
  //   path: 'book',
  //   loadChildren: () => import('./pages/book/book.module').then( m => m.BookPageModule)
  // },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

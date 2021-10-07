import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./components/homepage/homepage.module').then(m => m.HomepageModule)
  },
  {
    path: 'homepage',
    loadChildren: () => import('./components/homepage/homepage.module').then(m => m.HomepageModule)
  },
  {
    path: 'bookmarks',
    loadChildren: () => import('./components/bookmarks/bookmarks.module').then(m => m.BookmarksModule)
  },
  {
    path: 'notifications',
    loadChildren: () => import('./components/notifications/notifications.module').then(m => m.NotificationsModule)
  },
  {
    path: 'followings',
    loadChildren: () => import('./components/followings/followings.module').then(m => m.FollowingsModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./components/settings/settings.module').then(m => m.SettingsModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

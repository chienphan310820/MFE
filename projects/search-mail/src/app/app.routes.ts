import { Routes } from '@angular/router';

export const APP_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'search-mail',
    pathMatch: 'full'
  },
  {
    path: 'search-mail',
    loadChildren: () => import('./search-mail/search-mail.module').then(m => m.SearchMailModule),
  }
];

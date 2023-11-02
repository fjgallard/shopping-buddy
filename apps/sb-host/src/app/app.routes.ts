import { Route } from '@angular/router';

import { loadRemoteModule } from '@nx/angular/mf';

export const appRoutes: Route[] = [
  {
    path: 'list',
    loadChildren: () =>
      loadRemoteModule('sb-list', './List').then((m) => m.ListModule),
  },
  {
    path: '',
    loadChildren: () =>
      loadRemoteModule('sb-user', './Login').then((m) => m.LoginModule),
  },
];

import { Route } from '@angular/router';

import { loadRemoteModule } from '@nx/angular/mf';

export const appRoutes: Route[] = [
  {
    path: 'sb-list',
    loadChildren: () =>
      loadRemoteModule('sb-list', './Module').then((m) => m.RemoteEntryModule),
  },
  /*{
    path: '',
    loadChildren: () =>
      loadRemoteModule('sb-user', './Module').then((m) => m.RemoteEntryModule),
  }, */
  {
    path: '',
    loadChildren: () =>
      loadRemoteModule('sb-user', './Login').then((m) => m.LoginModule),
  },
];

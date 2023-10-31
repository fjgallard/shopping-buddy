import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';

import { loadRemoteModule } from '@nx/angular/mf';

export const appRoutes: Route[] = [
  {
    path: 'users',
    loadChildren: () =>
      loadRemoteModule('sb-user', './Module').then(
        (m) => m.RemoteEntryModule),
  },
  {
    path: '',
    component: NxWelcomeComponent,
  },
];

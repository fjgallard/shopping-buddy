import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      [
        /**{
          path: '',
          loadChildren: () =>
            import('./remote-entry/entry.module').then(
              (m) => m.RemoteEntryModule
            ),
        }, **/
        {
          path: '',
          loadChildren: () =>
            import('./login/login.module').then(
              (m) => m.LoginModule
            ),
        },
      ],
      { initialNavigation: 'enabledBlocking' }
    ),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
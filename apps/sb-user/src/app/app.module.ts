import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
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
    provideFirebaseApp(() => initializeApp({"projectId":"shopping-buddy-f944d","appId":"1:113928232865:web:35af2913111ac3477af5e0","storageBucket":"shopping-buddy-f944d.appspot.com","apiKey":"AIzaSyC3CYOf0BFYid2-SL8i9mq8Tx6S7qvG_2w","authDomain":"shopping-buddy-f944d.firebaseapp.com","messagingSenderId":"113928232865","measurementId":"G-2KMP82Y04X"})),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

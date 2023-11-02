import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';

import { MatButtonModule } from '@angular/material/button';
import { GoogleSignInDirective } from './google-sign-in.directive';

import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

@NgModule({
  declarations: [LoginComponent, GoogleSignInDirective],
  imports: [
    MatButtonModule,
    CommonModule,
    LoginRoutingModule,
    provideFirebaseApp(() => initializeApp({"projectId":"shopping-buddy-f944d","appId":"1:113928232865:web:35af2913111ac3477af5e0","storageBucket":"shopping-buddy-f944d.appspot.com","apiKey":"AIzaSyC3CYOf0BFYid2-SL8i9mq8Tx6S7qvG_2w","authDomain":"shopping-buddy-f944d.firebaseapp.com","messagingSenderId":"113928232865","measurementId":"G-2KMP82Y04X"})),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
  ],
})
export class LoginModule {}

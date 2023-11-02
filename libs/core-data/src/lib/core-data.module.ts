import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { ShoppingItemsService } from './services/shopping-items/shopping-items.service';
import { UsersService } from './services/users/users.service';

@NgModule({
  imports: [
    CommonModule,
    provideFirebaseApp(() => initializeApp({"projectId":"shopping-buddy-f944d","appId":"1:113928232865:web:35af2913111ac3477af5e0","storageBucket":"shopping-buddy-f944d.appspot.com","apiKey":"AIzaSyC3CYOf0BFYid2-SL8i9mq8Tx6S7qvG_2w","authDomain":"shopping-buddy-f944d.firebaseapp.com","messagingSenderId":"113928232865","measurementId":"G-2KMP82Y04X"})),
    provideFirestore(() => getFirestore())
  ],
  providers: [
    ShoppingItemsService,
    UsersService
  ]
})
export class CoreDataModule {}

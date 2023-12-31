import { Injectable, inject } from '@angular/core';
import { Firestore, collection, collectionData, query, where } from '@angular/fire/firestore';
import { ShoppingItem } from '@shopping-buddy/interfaces';
import { Observable } from 'rxjs';

const model = 'shopping-items';

@Injectable({
  providedIn: 'root'
})
export class ShoppingItemsService {

  private firestore: Firestore = inject(Firestore);

  all(uid: string) {
    const itemsRef = collection(this.firestore, model);
    return collectionData(query(itemsRef, where('uid', '==', uid))) as Observable<ShoppingItem[]>;
  }

  find(id: string) {
    // TODO
    console.log(id);
  }

  create() {
    // TODO
  }

  update() {
    // TODO
  }

  set() {
     // TODO
  }

  delete() {
     // TODO
  }
}

import { Injectable } from "@angular/core";
import { ShoppingItem } from "@shopping-buddy/interfaces";
import { BehaviorSubject, Subscription } from "rxjs";

import { ShoppingItemsService } from '@shopping-buddy/core-data';

@Injectable()
export class ShoppingItemsFacade {

  private $items = new BehaviorSubject<ShoppingItem[] | undefined>(undefined);
  items$ = this.$items.asObservable();

  itemsRef: Subscription | undefined;

  constructor(private shoppingItemsService: ShoppingItemsService) {}

  loadItems(uid?: string) {
    this.itemsRef?.unsubscribe();
    if (!uid) {
      return this.$items.next([])
    }

    this.itemsRef = this.shoppingItemsService.all(uid).subscribe(items => {
      this.$items.next(items);
    });
  }

  clearItems() {
    this.itemsRef?.unsubscribe();
    this.$items.next(undefined);
  }
}

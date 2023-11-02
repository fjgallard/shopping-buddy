import { Injectable } from "@angular/core";
import { ShoppingItem } from "@shopping-buddy/interfaces";
import { BehaviorSubject } from "rxjs";

@Injectable()
export class ShoppingItemsFacade {

  private $items = new BehaviorSubject<ShoppingItem[] | undefined>(undefined);
  items$ = this.$items.asObservable();

  setItems(items: ShoppingItem[]) {
    this.$items.next(items);
  }

  clearItems() {
    this.$items.next(undefined);
  }
}

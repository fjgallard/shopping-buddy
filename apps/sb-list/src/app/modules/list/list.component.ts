import { Component, OnDestroy } from '@angular/core';
import { AuthFacade, ShoppingItemsFacade } from '@shopping-buddy/core-state';
import { Subscription, tap } from 'rxjs';

@Component({
  selector: 'shopping-buddy-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnDestroy {

  items$ = this.shoppingItemsFacade.items$;
  itemsSub: Subscription;

  uid: string | undefined;

  constructor(
    private authFacade: AuthFacade,
    private shoppingItemsFacade: ShoppingItemsFacade
  ) {
      this.itemsSub = this.authFacade.currentUser$.pipe(
        tap(user => {
          this.uid = user?.id;
          this.shoppingItemsFacade.loadItems(this.uid);
        })
      ).subscribe();
  }

  ngOnDestroy() {
    this.itemsSub.unsubscribe();
  }

}

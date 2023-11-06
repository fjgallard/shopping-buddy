import { Component, OnDestroy } from '@angular/core';
import { AuthFacade, ShoppingItemsFacade } from '@shopping-buddy/core-state';
import { GlobeUser, ShoppingItem } from '@shopping-buddy/interfaces';
import { Subscription } from 'rxjs';

@Component({
  selector: 'shopping-buddy-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnDestroy {

  isLoading = false;
  items: ShoppingItem[] = [];
  user: GlobeUser | null | undefined;

  private userSub: Subscription;
  private itemsSub: Subscription;

  constructor(
    private authFacade: AuthFacade,
    private shoppingItemsFacade: ShoppingItemsFacade
  ) {
      this.userSub = this.authFacade.currentUser$
        .subscribe(user => {
          this.user = user;
          this.isLoading = true;
          this.shoppingItemsFacade.loadItems(this.uid);
        });

      this.itemsSub = this.shoppingItemsFacade.items$
        .subscribe(items => {
          this.isLoading = false;
          this.items = items || [];
        });
  }

  get uid() {
    return this.user?.id;
  }

  get name() {
    return this.user?.name;
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
    this.itemsSub.unsubscribe();
  }

}

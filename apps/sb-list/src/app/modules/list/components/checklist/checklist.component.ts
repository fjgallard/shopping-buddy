import { Component, OnDestroy } from '@angular/core';
import { ShoppingItemsService } from '@shopping-buddy/core-data';
import { AuthFacade } from '@shopping-buddy/core-state';
import { ShoppingItem } from '@shopping-buddy/interfaces';
import { Observable, Subscription, switchMap } from 'rxjs';

@Component({
  selector: 'shopping-buddy-checklist',
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.scss'],
})
export class ChecklistComponent implements OnDestroy {
  items$: Observable<ShoppingItem[]>;
  items: ShoppingItem[] = [];

  itemsSub: Subscription;

  constructor(
    private authFacade: AuthFacade,
    private shoppingItemsService: ShoppingItemsService
  ) {
    this.items$ = this.authFacade.currentUser$.pipe(
      switchMap(user => {
        return this.shoppingItemsService.all(user?.id || 'AY4S9fmHT1VR5CmyQkqC0KydWLi1')
      })
    );
    this.itemsSub = this.items$.subscribe(items => {
      this.items = items;
    });
  }

  ngOnDestroy(): void {
    this.itemsSub.unsubscribe();
  }

}

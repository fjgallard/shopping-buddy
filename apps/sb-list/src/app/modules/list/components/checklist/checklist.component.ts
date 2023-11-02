import { Component } from '@angular/core';
import { ShoppingItemsService } from '@shopping-buddy/core-data';
import { ShoppingItem } from '@shopping-buddy/interfaces';
import { Observable } from 'rxjs';

@Component({
  selector: 'shopping-buddy-checklist',
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.scss'],
})
export class ChecklistComponent {
  items$: Observable<ShoppingItem[]>;
  items: ShoppingItem[] = [];

  constructor(private shoppingItemsService: ShoppingItemsService) {
    this.items$ = this.shoppingItemsService.all('AY4S9fmHT1VR5CmyQkqC0KydWLi1');
    this.items$.subscribe(items => {
      this.items = items;
    });
  }


}

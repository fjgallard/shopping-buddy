import { Component, Input } from '@angular/core';
import { ShoppingItem } from '@shopping-buddy/interfaces';

@Component({
  selector: 'shopping-buddy-checklist',
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.scss'],
})
export class ChecklistComponent {
  @Input()
  items: ShoppingItem[] =[];

  @Input()
  uid: string | undefined;
}

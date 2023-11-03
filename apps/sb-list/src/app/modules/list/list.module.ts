import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component';
import { ChecklistComponent } from './components/checklist/checklist.component';
import { RouterModule } from '@angular/router';
import { listRoutes } from './list.routes';
import { CoreDataModule } from '@shopping-buddy/core-data';
import { CoreStateModule } from '@shopping-buddy/core-state';

import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [ListComponent, ChecklistComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(listRoutes),
    CoreDataModule,
    MatListModule,
    MatProgressSpinnerModule,
    CoreStateModule
  ],
})
export class ListModule {}

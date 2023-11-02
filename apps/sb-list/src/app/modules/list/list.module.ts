import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component';
import { ChecklistComponent } from './components/checklist/checklist.component';
import { RouterModule } from '@angular/router';
import { listRoutes } from './list.routes';

@NgModule({
  declarations: [ListComponent, ChecklistComponent],
  imports: [CommonModule,  RouterModule.forChild(listRoutes)],
})
export class ListModule {}

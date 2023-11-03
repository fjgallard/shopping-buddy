import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthFacade } from './auth/auth.facade';
import { AuthModule } from '@shopping-buddy/auth';
import { ShoppingItemsFacade } from './shopping-items/shopping-items.facade';

@NgModule({
  imports: [CommonModule, AuthModule],
  providers: [AuthFacade, ShoppingItemsFacade]
})
export class CoreStateModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';

import { MatButtonModule } from '@angular/material/button';
import { GoogleSignInDirective } from './google-sign-in.directive';

@NgModule({
  declarations: [LoginComponent, GoogleSignInDirective],
  imports: [MatButtonModule, CommonModule, LoginRoutingModule],
})
export class LoginModule {}

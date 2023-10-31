import { Component } from '@angular/core';

@Component({
  selector: 'shopping-buddy-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  user = {
    name: 'Jomer',
    email: 'jomer@google.com'
  }

  isLoggedIn = false;

  onLoginClick() {
    this.isLoggedIn = true;
  }

  onLogoutClick() {
    console.log('logout');
    this.isLoggedIn = false;
  }
}

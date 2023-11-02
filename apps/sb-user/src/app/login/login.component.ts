import { Component, OnDestroy, inject } from '@angular/core';
import { Auth, user, User } from '@angular/fire/auth';
import { Subscription } from 'rxjs';

import { AuthService, GlobeUser } from '@shopping-buddy/auth'

@Component({
  selector: 'shopping-buddy-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnDestroy {
  private auth: Auth = inject(Auth);
  user$ = user(this.auth);
  userSubscription: Subscription;

  user: GlobeUser = {
    name: 'Jomer',
    email: 'jomer@google.com'
  }

  isLoggedIn = false;

  constructor(private authService: AuthService) {
    this.userSubscription = this.user$.subscribe((aUser: User | null) => {
      //handle user state changes here. Note, that user will be null if there is no currently logged in user.
     console.log(aUser);

     if (aUser) {
      const { displayName, email } = aUser;
      this.user = {
        name: displayName || 'No name', email: email || 'No email'
      };

      this.isLoggedIn = true;
     }

    });
  }

  ngOnDestroy() {
    // when manually subscribing to an observable remember to unsubscribe in ngOnDestroy
    this.userSubscription.unsubscribe();
  }

  async onLoginClick() {
    await this.authService.googleSignIn();
    this.isLoggedIn = true;
  }

  async onLogoutClick() {
    await this.authService.signOut();
    this.isLoggedIn = false;
    this.user = {
      name: '',
      email: ''
    }
  }
}

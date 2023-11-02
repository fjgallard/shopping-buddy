import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { GlobeUser } from '@shopping-buddy/interfaces';
import { AuthFacade } from '@shopping-buddy/core-state';

@Component({
  selector: 'shopping-buddy-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnDestroy {
  userSubscription: Subscription;
  user: GlobeUser | null = null;
  isLoggedIn = false;

  constructor(private authFacade: AuthFacade) {
    this.userSubscription = this.authFacade.currentUser$.subscribe(currentUser => {
      this.isLoggedIn = !!currentUser;
      this.user = currentUser
    });
  }

  ngOnDestroy() {
    // when manually subscribing to an observable remember to unsubscribe in ngOnDestroy
    this.userSubscription.unsubscribe();
  }

  async onLoginClick() {
    await this.authFacade.googleSignIn();
    this.isLoggedIn = true;
  }

  async onLogoutClick() {
    await this.authFacade.signOut();
    this.isLoggedIn = false;

  }
}

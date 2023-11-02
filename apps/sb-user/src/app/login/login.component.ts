import { Component, OnDestroy, inject } from '@angular/core';
import { Auth, User, signInWithPopup, user, GoogleAuthProvider, signOut } from '@angular/fire/auth';
import { Subscription } from 'rxjs';

@Component({
  selector: 'shopping-buddy-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnDestroy {
  private auth: Auth = inject(Auth);
  user$ = user(this.auth);
  userSubscription: Subscription;

  user = {
    name: 'Jomer',
    email: 'jomer@google.com'
  }

  isLoggedIn = false;

  constructor() {
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
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(this.auth, provider)
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    if (!credential) {
      return;
    }
  }

  async onLogoutClick() {
    console.log('logout');
    await signOut(this.auth);
    this.isLoggedIn = false;
    this.user = {
      name: '',
      email: ''
    }
  }
}

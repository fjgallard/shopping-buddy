import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";
import { GlobeUser } from '@shopping-buddy/interfaces';
import { AuthService } from '@shopping-buddy/auth'

@Injectable()
export class AuthFacade {

  currentUser$: Observable<GlobeUser | null>

  constructor(private authService: AuthService) {
    this.currentUser$ = this.authService.user$.pipe(
      map(user => {
        if (!user) {
          return null;
        }

        return {
          id: user?.uid,
          name: user?.displayName || 'Unverified User',
          email: user?.email || 'Unverified Email'
        }
      })
    )
  }

  googleSignIn() {
    return this.authService.googleSignIn();
  }

  signOut() {
    return this.authService.signOut();
  }
}

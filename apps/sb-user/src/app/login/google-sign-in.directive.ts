import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[shoppingBuddyGoogleSignIn]',
})
export class GoogleSignInDirective {
  constructor() {
    // TODO
  }

  @HostListener('click')
  onclick() {
    // TODO
    console.log('google button clicked!');
  }
}

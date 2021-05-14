import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppState, Plugins } from '@capacitor/core';
import { Platform } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { take } from 'rxjs/operators';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
// export class AppComponent {
//   constructor() {}
// }

export class AppComponent implements OnInit{
  private authSub: Subscription;
  private previousAuthState = false;
  // public selectedIndex = 0;
  // public appPages = [
  //   {
  //     title: 'Home',
  //     url: '/tabs',
  //     icon: 'home'
  //   },
  //   {
  //     title: 'Settings',
  //     url: '/settings',
  //     icon: 'settings'
  //   },
  //   {
  //     title: 'Photographer Portal',
  //     url: 'photographer-portal',
  //     icon: 'person'
  //   },
  //   {
  //     title: 'Profile',
  //     url: '/profile',
  //     icon: 'person'
  //   }
  // ];
  constructor(  private platform: Platform,
    private authService: AuthService,
    private router: Router) {
    this.initializeApp();
  }

  initializeApp() {
    // SplashScreen.hide();
  }

  ngOnInit() {
    this.authSub = this.authService.userIsAuthenticated.subscribe(isAuth => {
      if (!isAuth && this.previousAuthState !== isAuth) {
        this.router.navigateByUrl('/auth');
      }
      this.previousAuthState = isAuth;
    });
    Plugins.App.addListener(
      'appStateChange',
      this.checkAuthOnResume.bind(this)
    );
  }

  onLogout() {
    this.authService.logout();
  }

  ngOnDestroy() {
    if (this.authSub) {
      this.authSub.unsubscribe();
    }
    // Plugins.App.removeListener('appStateChange', this.checkAuthOnResume);
  }

  private checkAuthOnResume(state: AppState) {
    if (state.isActive) {
      this.authService
        .autoLogin()
        .pipe(take(1))
        .subscribe(success => {
          if (!success) {
            this.onLogout();
          }
        });
    }
  }
}

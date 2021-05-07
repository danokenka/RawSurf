import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
// export class AppComponent {
//   constructor() {}
// }

export class AppComponent implements OnInit{
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Home',
      url: '/tabs',
      icon: 'home'
    },
    {
      title: 'Settings',
      url: '/settings',
      icon: 'settings'
    },
    {
      title: 'Photographer Portal',
      url: 'photographer-portal',
      icon: 'person'
    },
    {
      title: 'Profile',
      url: '/profile',
      icon: 'person'
    }
  ];
  constructor() {
    this.initializeApp();
  }

  initializeApp() {
    // SplashScreen.hide();
  }

  ngOnInit() {
    const path = window.location.pathname.split('/')[1];
    console.log(path)
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { Plugins } from '@capacitor/core';

const { Browser } = Plugins;

@Component({
  selector: 'app-info',
  templateUrl: './info.page.html',
  styleUrls: ['./info.page.scss'],
})
export class InfoPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  async openBrowser() {
  
    // On iOS, for example, open the URL in SFSafariViewController (the in-app browser)
    await Browser.open({ url: "https://www.raw.surf" });
  }
  // async openBrowserInsta() {
  
  //   // On iOS, for example, open the URL in SFSafariViewController (the in-app browser)
  //   await Browser.open({ url: "https://www.instagram.com/raw.surf" });
  // }
  // async openFB() {
  
  //   // On iOS, for example, open the URL in SFSafariViewController (the in-app browser)
  //   await Browser.open({ url: "https://www.facebook.com/rawsurfingadventures/" });
  // }
  // async openInsta() {
  
  //   // On iOS, for example, open the URL in SFSafariViewController (the in-app browser)
  //   await Browser.open({ url: "https://www.instagram.com/raw.surf" });
  // }
  // async openTwit() {
  
  //   // On iOS, for example, open the URL in SFSafariViewController (the in-app browser)
  //   await Browser.open({ url: "https://twitter.com/rawsurfingadv" });
  // }

  onSearch() {
    console.log("onSearch CLicked");
  }

  toggleSearch() {
    console.log("toggleSearch CLicked");
  }

  // socialMedia(type) {
  //   switch (type) {
  //     case 'FACEBOOK': {
        
  //       this.openFB();
  //       break;
  //     }
  //     case 'INSTAGRAM': {
  //       this.openInsta();
  //       break;
  //     }
  //     case 'TWITTER': {
  //       this.openTwit();
  //       break;
  //     }
  //   }
  // }
//   openTwitter(name) {
//     let app;
//     if (this.platform.is('ios')) {
//       app = 'twitter://';
//     } else if (this.platform.is('android')) {
//       app = 'com.twitter.android';
//     } else {
//       this.openInApp('https://twitter.com/' + name);
//       return;
//     }
//     this.appAvailability.check(app)
//       .then((res) => {
//         const data = 'twitter://user?screen_name=' + name;
//         this.openInApp(data);
//       }
//       ).catch(err => {
//         this.openInApp('https://twitter.com/' + name);
// });
// socialMedia(type) {
//     switch (type) {
//       case 'FACEBOOK': {
//         this.openFacebook('saichoclate', 'https://www.facebook.com/saichoclate/');
//         break;
//       }
//       case 'INSTAGRAM': {
//         this.openInstagram('sai_kumar_korthivada_skk')
//         break;
//       }
//       case 'TWITTER': {
//         this.openTwitter('korthivadasai');
//         break;
//       }
//     }
//   }
//   openTwitter(name) {
//     let app;
//     if (this.platform.is('ios')) {
//       app = 'twitter://';
//     } else if (this.platform.is('android')) {
//       app = 'com.twitter.android';
//     } else {
//       this.openInApp('https://twitter.com/' + name);
//       return;
//     }
//     this.appAvailability.check(app)
//       .then((res) => {
//         const data = 'twitter://user?screen_name=' + name;
//         this.openInApp(data);
//       }
//       ).catch(err => {
//         this.openInApp('https://twitter.com/' + name);
// });
// }

// openFacebook(name, url) {
//   let app;
//   if (this.platform.is('ios')) {
//     app = 'fb://';
//   } else if (this.platform.is('android')) {
//     app = 'com.facebook.katana';
//   } else {
//     this.openInApp('https://www.facebook.com/' + name);
//     return;
//   }
//   this.appAvailability.check(app)
//     .then(res => {
//       const fbUrl = 'fb://facewebmodal/f?href=' + url;
//       this.openInApp(fbUrl);
//     }
//     ).catch(() => {
//       this.openInApp('https://www.facebook.com/' + name);
//     });
// }
// openInApp(url) {
//   this.inAppBrowser.create(url, '_system')
// }
// openInstagram(name) {
//   let app;
//   if (this.platform.is('ios')) {
//     app = 'instagram://';
//   } else if (this.platform.is('android')) {
//     app = 'com.instagram.android';
//   } else {
//     this.openInApp('https://www.instagram.com/' + name);
//     return;
//   }
//   this.appAvailability.check(app)
//     .then((res) => {
//       this.openInApp('instagram://user?username=' + name);
//     }
//     ).catch(err => {
//       this.openInApp('https://www.instagram.com/' + name);
//     });
// }


  // }
}

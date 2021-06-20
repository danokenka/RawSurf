import { Component } from '@angular/core';
import { Plugins } from '@capacitor/core';

const { Browser } = Plugins;

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor() {}

  async openBrowserInsta() {
  
    // On iOS, for example, open the URL in SFSafariViewController (the in-app browser)
    await Browser.open({ url: "https://www.instagram.com/raw.surf" });
  }
  async openFB() {
  
    // On iOS, for example, open the URL in SFSafariViewController (the in-app browser)
    await Browser.open({ url: "https://www.facebook.com/rawsurfingadventures/" });
  }
  async openInsta() {
  
    // On iOS, for example, open the URL in SFSafariViewController (the in-app browser)
    await Browser.open({ url: "https://www.instagram.com/raw.surf" });
  }
  async openTwit() {
  
    // On iOS, for example, open the URL in SFSafariViewController (the in-app browser)
    await Browser.open({ url: "https://twitter.com/rawsurfingadv" });
  }

  async openYoutu() {
  
    // On iOS, for example, open the URL in SFSafariViewController (the in-app browser)
    await Browser.open({ url: "https://www.youtube.com/c/Rawsurfingadventures" });
  }

   socialMedia(type) {
    switch (type) {
      case 'FACEBOOK': {
        
        this.openFB();
        break;
      }
      case 'INSTAGRAM': {
        this.openInsta();
        break;
      }
      case 'TWITTER': {
        this.openTwit();
        break;
      }
      case 'YOUTUBE': {
        this.openYoutu();
        break;
      }
    }
  }

}

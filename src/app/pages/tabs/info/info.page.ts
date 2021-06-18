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
  async openBrowserInsta() {
  
    // On iOS, for example, open the URL in SFSafariViewController (the in-app browser)
    await Browser.open({ url: "https://www.instagram.com/raw.surf" });
  }

}

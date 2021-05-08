import { Component, OnInit } from '@angular/core';
import { Plugins } from '@capacitor/core';



const { Browser } = Plugins;


@Component({
  selector: 'app-surftrip',
  templateUrl: './surftrip.page.html',
  styleUrls: ['./surftrip.page.scss'],
})

export class SurftripPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  async openBrowser() {
  
    // On iOS, for example, open the URL in SFSafariViewController (the in-app browser)
    await Browser.open({ url: "https://www.raw.surf" });
  }

}

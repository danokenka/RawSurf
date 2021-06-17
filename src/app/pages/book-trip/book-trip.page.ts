import { Component, OnInit } from '@angular/core';
import { Browser } from '@capacitor/core';

@Component({
  selector: 'app-book-trip',
  templateUrl: './book-trip.page.html',
  styleUrls: ['./book-trip.page.scss'],
})
export class BookTripPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  async openBrowser() {
  
    // On iOS, for example, open the URL in SFSafariViewController (the in-app browser)
    await Browser.open({ url: "https://www.raw.surf" });
  }

}

import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
 import { User } from '../../../models/user.model';
 import firebase from 'firebase/app';
import 'firebase/auth';
import { Plugins } from '@capacitor/core';

const { Browser } = Plugins;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  // public myName: string;
  constructor(private authService: AuthService){
  }

  ngOnInit() {
    // this.myName = JSON.stringify(firebase.auth().currentUser.displayName);
     }

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
    async venmo() {
    
      // On iOS, for example, open the URL in SFSafariViewController (the in-app browser)
      await Browser.open({ url: "https://venmo.com/RawSurf" });
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
        case 'VENMO': {
          this.venmo();
          break;
        }
      }
    }

//   getUserInfo() {
//   console.log(firebase.auth().currentUser.email);
//   console.log(firebase.auth().currentUser);
  
// }

//   signOut() {
//     console.log("sign out pressed")
//       this.authService.signOut();
//   }


}

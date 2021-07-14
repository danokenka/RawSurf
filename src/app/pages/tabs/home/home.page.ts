import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
 import { User } from '../../../models/user.model';
 import firebase from 'firebase/app';
import 'firebase/auth';
import { Plugins } from '@capacitor/core';
// import { UserData } from 'src/app/services/user.data';

const { Browser } = Plugins;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public myName: string;
  public myUid: string;
  constructor(private authService: AuthService, 
    // private userData: UserData
    ){
  }

  ngOnInit() {
    this.authUserId();
    // this.myName = JSON.stringify(firebase.auth().currentUser.displayName);
//   this.userData.getDisplayName().then((result) => {
//     this.myName = result;
//     console.log(this.myName);
// });



     }

     authUserId() {
      this.authService.user.subscribe(data => {
        console.log("Received data: ", data);
        this.myUid = data.id;
        console.log(data['id']);
        console.log(data['_token']);
        console.log(data['email']);
        console.log(data['tokenDuration']);
      
      })
      
      // this.showUserInfo();
      this.getDisplayName();
      // this.getUserStuff();
      }
      

     getDisplayName() {
      console.log("get Disoplay Name called");
      // console.log(firebase.auth().currentUser.uid);
      console.log(this.myUid);
    
    
    return firebase.database().ref('/users/' + this.myUid).once('value').then((snapshot) => {
       this.myName = (snapshot.val() && snapshot.val().username) || 'Anonymous';
       console.log(this.myName);
      // ...
    });
    }

  //    async getFromStorageAsync(){

  //     return await this.userData.getDisplayName('displayName');

  // }

  // getDisplayName() {

  //   this.getFromStorageStandard().then((result) => {
  //     this.apple = result;
  // });

// this.getFromStorageAsync();
// console.log(JSON.stringify(this.getFromStorageAsync()));

// this.userData.getDisplayName
    //   firebase.auth().onAuthStateChanged((user) => {
    //     if (user) {
    //       // User is signed in, see docs for a list of available properties
    //       // https://firebase.google.com/docs/reference/js/firebase.User
    //       console.log(user);
    //       // var uid = user.uid;
    //       console.log(user.displayName);
    //       this.myName = user.displayName;
    //       this.userData.setPhotoUrl(user.photoURL);
    //       this.userData.setUid(user.uid);
         
    //       // ...
    //     } else {
    //       // User is signed out
    //       // ...
    //       console.log(user);
    //     }
    //   });
    // }
    
    
  // }



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

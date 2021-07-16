import { Component, OnInit } from '@angular/core';
import { AuthService, AuthResponseData } from '../../../services/auth.service';
 import { User } from '../../../models/user.model';
 import firebase from 'firebase/app';
 import { Observable } from 'rxjs';
import 'firebase/auth';
import { Plugins } from '@capacitor/core';
import { LoadingController, AlertController } from '@ionic/angular';
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
  public myToken;
  public userInfo: any;
  displayNameFlag = true;
  // private userData: UserData
  constructor(private authService: AuthService, public alertCtrl: AlertController
 
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
ionViewDidEnter() {
  // this.authUserId();
  console.log("this was triggered");
}

// getToken() {
//  return this.userData.getIdToken();
// }
     

     authUserId() {
      this.authService.user.subscribe(data => {
        if (data != null) {
          console.log("Received data: ", data);
          this.myUid = data.id;
          console.log(data['id']);
          console.log(data['_token']);
          this.myToken = data.token
          console.log(this.myToken);
          console.log(data['email']);
          console.log(data['tokenDuration']);
        } else {
          // console.log("data was null");
          // this.authService.autoLogin();
          // this.userData.getIdToken();
          // console.log( this.userData.getIdToken());
        }

      
      })
      
      // this.showUserInfo();
     this.retrieveUserInfo();
      // this.getUserStuff();
      }
      
      checkForName() {
        firebase.auth().onAuthStateChanged((user) => {
          if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/firebase.User
            var uid = user.uid;
            console.log(user.uid);
            console.log(user.displayName);
            // ...
          } else {
            // User is signed out
            // ...
          }
        });
      }


     getDisplayName() {
      console.log("get Disoplay Name called");
      // console.log(firebase.auth().currentUser.uid);
      console.log(this.myUid);
  
    
    return firebase.database().ref('/users/' + this.myUid).once('value').then((snapshot) => {
       this.myName = (snapshot.val() && snapshot.val().username) || 'Anonymous';
       if (this.myName == 'Anonymous') {
        console.log("this is Anynonmous!!!!!!!!")
        this.authService.userProfile.subscribe(data => {
          console.log("Received data: ", data);
          console.log(data['displayName']);
          // console.log(data['_token']);
          // console.log(data['email']);
          // console.log(data['tokenDuration']);
          
        })
      
       
       }
       console.log(this.myName);
      // ...
    });
    }
    doRefresh(event) {
      console.log('Begin async operation');
      //  this.myName = JSON.stringify(firebase.auth().currentUser.displayName);
    
      this.retrieveUserInfo();
      
        setTimeout(() => {
          console.log('Async operation has ended');
          event.target.complete();
        }, 2000);
      
    
    }

    retrieveUserInfo() {
      
      let authObs: Observable<AuthResponseData>
      
  authObs = this.authService.getUserData(this.myToken);
  authObs.subscribe(resData => {
    this.userInfo = resData.users[0];
    console.log(resData.users[0]);
    console.log(resData.users[0].localId);
    console.log(resData.users[0].displayName);

    this.myName = resData.users[0].displayName;



    if (this.myName === "") {
      this.displayNameFlag = false;
    }
   
    // this.myDisplayName = resData.displayName;
    // // this.setTheDisplayName(this.myDisplayName);
    // console.log(this.myDisplayName);
    

  
    

    // this.router.navigateByUrl('/tabs/home');


   
    
  }, errRes => {
    console.log(errRes);
    // loadingEl.dismiss();
    const code = errRes.error.error.message;
    let message = 'No Token Passed';
    if (code === 'INVALID_ID_TOKEN') {
      message = 'This email address already exists!';
    } else if (code === 'EMAIL_NOT_FOUND') {
      message = 'E-Mail address could not be found.';
    } else if (code === 'INVALID_PASSWORD') {
      message = 'The password is not correct.';
    }
    this.showAlert(message);
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

  
  private showAlert(message: string) {
    this.alertCtrl
      .create({
        header: 'Authentication failed', 
        message: message, 
        buttons: ['Okay']
      }).then(alertEl => alertEl.present());
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

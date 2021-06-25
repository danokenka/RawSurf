import { Component, OnInit } from '@angular/core';
import firebase from 'firebase/app';
import 'firebase/auth';
import { UserProfile } from '../../models/user';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthService, AuthResponseData} from 'src/app/services/auth.service';
import { take, map } from 'rxjs/operators';
import { User } from 'src/app/models/user.model';
import { BehaviorSubject, from, Observable } from 'rxjs';
import { Plugins } from '@capacitor/core';
import { UserData } from 'src/app/services/user.data';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';




@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  private _user = new BehaviorSubject<User>(null);
  public myUser;
public myName: string;
public myEmail: string;
public myPhotoUrl: string;
public myUid: string;
public myUserId;
  constructor(public router: Router, public alertCtrl: AlertController, public authService: AuthService, private userData: UserData) {}

userProfile = {} as UserProfile;
// public userArray: string[] = [];
  ionViewWillEnter() {
    // console.log("Ion view will enter");
    // this.myName = JSON.stringify(firebase.auth().currentUser.displayName);
     
    // this.myEmail = JSON.stringify(firebase.auth().currentUser.email);
    // this.myPhotoUrl = JSON.stringify(firebase.auth().currentUser.photoURL);
    // this.myUid = JSON.stringify(firebase.auth().currentUser.uid);

    this.getDisplayName();
  }


  ngOnInit() {
    // this.getObject();
    this.authUserId();
   this.getDisplayName();
   this.getphotoUrl();
//  console.log(firebase.auth().currentUser.email);

//  console.log(JSON.stringify(firebase.auth().currentUser.email));
//  this.myName = JSON.stringify(firebase.auth().currentUser.displayName);
//  this.myEmail = JSON.stringify(firebase.auth().currentUser.email);
//  this.myPhotoUrl = JSON.stringify(firebase.auth().currentUser.photoURL);
//  this.myUid = JSON.stringify(firebase.auth().currentUser.uid)
  }
  // async getObject() {
  //   const ret = await Plugins.Storage.get({ key: 'authData' });
  //   const user = JSON.parse(ret.value);
  //   this.myUser = user;
  //   console.log(user.userId);
  //   console.log(user.token);
  //   console.log(user.tokenExpirationDat);
  //   console.log(this.myUser.email);
  //   this.showUserInfo()
  // }
authUserId() {
this.authService.user.subscribe(data => {
  console.log("Received data: ", data);
  this.myUser = data;
  console.log(data['id']);
  console.log(data['_token']);
  console.log(data['email']);
  console.log(data['tokenDuration']);

})
this.showUserInfo() 
}

getDisplayName() {
  firebase.auth().onAuthStateChanged((user) => {
    console.log(user);
    if (user) {
      console.log(user);
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      var uid = user.uid;
      this.myName = user.displayName;
      console.log(uid);
      console.log(user.displayName);
      // ...
    } else {
      console.log(user);
      // User is signed out
      // ...
    }
  });



  // this.userData.getDisplayName().then((displayName) => {
  //   console.log(displayName);
  //   if(displayName) {
  //     console.log("Display name true");
  //     this.myName = displayName;
  //   } else {
  //    console.log("Display name is null");
  //   }
    
  //   // console.log(this.myName);
  // });
}

getphotoUrl() {
  this.userData.getPhotoUrl().then((photoURL) => {
    if(photoURL != null) {
      this.myPhotoUrl = photoURL;
    } else {
      this.myPhotoUrl = "Not Yet Set";
    }
   
    // console.log(this.myName);
  });
}

  // async getDisplayName() {
  //   const ret = await Plugins.Storage.get({ key: 'userProfile' });
  //   const user = JSON.parse(ret.value);
  //   // this.myUser = user;
  //   console.log(user.name);
  //   // console.log(user.email);
  //   this.myName = user.name;

  //   // console.log(user.tokenExpirationDat);
  //   // console.log(this.myUser.email);
  //   this.showUserInfo()
  // }


  showUserInfo() {

    this.myUid = this.myUser.id;
// this.myUid = this.myUser.id;
this.myEmail = this.myUser['email'];
console.log(this.myEmail);
this.myPhotoUrl = this.myUser.photoUrl;
    // Plugins.Storage.get({key: 'authData', value: data});
// console.log(JSON.stringify(this.myUser));
// console.log(JSON.stringify(this.myUser.id));
// console.log(JSON.stringify(this.myUser.));
// console.log(JSON.stringify(this.myUser.token));
// console.log(JSON.stringify(this.myUser.email));
// console.log(JSON.stringify(this.myUser.tokenDuration));
  }


doRefresh(event) {
  console.log('Begin async operation');
  // this.myName = JSON.stringify(firebase.auth().currentUser.displayName);

  this.getDisplayName();
  
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  

}


  async showPrompt() {  
    const prompt = await this.alertCtrl.create({  
      header: 'Change User Profile Info',  
      message: 'Enter a new Display name',  
      inputs: [  
        {  
          name: 'name',  
          type: 'text',  
          placeholder: 'DisplayName'  
        },  
      ],  
      buttons: [  
        {  
          text: 'Cancel',  
          handler: data => {  
            console.log('Cancel clicked');  
          }  
        },  
        {  
          text: 'Save',  
          handler: data => {  
            console.log('Saved clicked');  
            console.log(data.name);  
            // this.changeDisplayFromPrompt(data.name);
            // this.router.navigate(['/profile']);
            // this.ionViewWillEnter();
          }  
        }  
      ]  
    });  
    await prompt.present();  
  }  


//   changeDisplayFromPrompt(name: string) {
//     var user = firebase.auth().currentUser;
  
//   user.updateProfile({
//     displayName: name,
//   }).then(function() {
//     // Update successful.
//   }).catch(function(error) {
//     // An error happened.
//   });
// }

// changeUserName(userProfile: UserProfile) {
//   var user = firebase.auth().currentUser;

// user.updateProfile({
//   displayName: userProfile.name,
// }).then(function() {
//   // Update successful.
// }).catch(function(error) {
//   // An error happened.
// });

// }


// signOut() {
//   console.log("sign out pressed")
//   firebase.auth().signOut().then(() => {

//     // Sign-out successful.
//   }).catch((error) => {
//     // An error happened.
//   });
// }
  // currentUser() {
    
  //   firebase.auth().onAuthStateChanged(function(user) {
  //     if (user) {
  //       // User is signed in.
  //       console.log("the user is signed in");
  //       console.log(JSON.stringify(user));
  //       console.log("the users token");
  //       console.log(user.getIdToken);
  //       console.log(JSON.stringify(user.getIdToken));
  //       var user = firebase.auth().currentUser;
  //       console.log(user.email);
   
  //     } else {
  //       // No user is signed in.
  //       console.log("no user logged in");
  //       console.log("Here is empty Object " + JSON.stringify(user));
  //     }
  //   });
  // }

  // getProfileInfo() {
    
  //   console.log(this.myName);
  //   console.log("getProfileInfo ran");
  //   // var user = firebase.auth().currentUser;
  //       var name, email, photoUrl, uid, emailVerified;
  //   this.currentUser();

  //   firebase.auth().onAuthStateChanged(function(user) {
  //     if (user) {
  //       // User is signed in.
  //       console.log(user.displayName);
  //       console.log(user.email);
  //       console.log(user.photoURL);
  //       console.log(user.emailVerified);
  //       console.log(user.uid);

  //       // name = user.displayName
  //       this.myName = user.email;
  //       // photoUrl= user.photoURL
  //       // emailVerified = user.emailVerified;
  //       // uid = user.uid;

  //       console.log(this.myName);
  //       // console.log(name);
  //       // console.log(email);
  //       // console.log(photoUrl);
  //       // console.log(emailVerified);
  //       // console.log(uid);

  //       // name = user.displayName
   
  //     } else {
  //       // No user is signed in.
  //       console.log("no user logged in");
  //       console.log("Here is empty Object " + JSON.stringify(user));
  //     }
  //   });

    // var name, email, photoUrl, uid, emailVerified;

    // if (user != null) {
    //   this.userProfile.name = user.displayName;
    //   this.userProfile.email = user.email;
    //   this.userProfile.photoUrl = user.photoURL;
    //   this.userProfile.emailVerified = user.emailVerified;
    //   this.userProfile.uid = user.uid;  // The user's ID, unique to the Firebase project. Do NOT use
    //                    // this value to authenticate with your backend server, if
    //                    // you have one. Use User.getToken() instead.

    //                 //    this.userArray.push({
    //                 //  this.userProfile.name.toString(),
    //                 //    user.email,
    //                 //    user.photoURL,
    //                 //  user.uid, 
    //                   //  });


      
    //                   console.log(JSON.stringify(user.displayName));
    // }

// console.log(JSON.stringify(user.displayName));
// console.log(this.userArray[0])
// console.log(this.userArray[1])
// console.log(this.userArray[2])
// console.log(this.userArray[3])
  // }

 
}

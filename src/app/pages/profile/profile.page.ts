import { Component, OnInit } from '@angular/core';
import firebase from 'firebase/app';
import 'firebase/auth';
import { Router } from '@angular/router';
import { LoadingController, AlertController } from '@ionic/angular';
import { AuthService, AuthResponseData} from 'src/app/services/auth.service';
import { take, map } from 'rxjs/operators';
import { User, UserProfile } from 'src/app/models/user.model';
import { BehaviorSubject, from, Observable } from 'rxjs';
import { Plugins } from '@capacitor/core';
// import { UserData } from 'src/app/services/user.data';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';




@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  isLoading = false;
private _user = new BehaviorSubject<User>(null);
public myUser;
public myUserProfile;
public myName: string;
public myEmail: string;
public myPhotoUrl: string;
public myUid: string;
public myUserId;
public myToken;
public userInfo;
  constructor(public router: Router, public alertCtrl: AlertController, public authService: AuthService, private loadingCtrl: LoadingController
    // private userData: UserData
    ) {}

// userProfile = {} as UserProfile;
// public userArray: string[] = [];
  ionViewWillEnter() {
      // console.log(this.authService.theDisplayName);
    // console.log("Ion view will enter");
    // this.myName = JSON.stringify(firebase.auth().currentUser.displayName);
     
    // this.myEmail = JSON.stringify(firebase.auth().currentUser.email);
    // this.myPhotoUrl = JSON.stringify(firebase.auth().currentUser.photoURL);
    // this.myUid = JSON.stringify(firebase.auth().currentUser.uid);

    //  this.getDisplayName();
    // this.getUserStuff();
  }


  ngOnInit() {
    // this.getObject();
    this.authUserId();

  //  this.getphotoUrl();
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
  this.myUid = data.id;
  console.log(data['id']);
  this.myToken = data.token
  console.log(data['_token']);
  console.log(data['email']);
  this.myEmail = data['email'];
  console.log(data['tokenDuration']);

})

// this.showUserInfo();
this.retrieveUserInfo();
// this.getUserStuff();
}



private showAlert(message: string) {
  this.alertCtrl
    .create({
      header: 'Authentication failed', 
      message: message, 
      buttons: ['Okay']
    }).then(alertEl => alertEl.present());
}


// getUserStuff() {
//     this.isLoading = true;
//     this.loadingCtrl
//       .create({ keyboardClose: true, message: 'Logging in...' })
//       .then(loadingEl => {
//         loadingEl.present();
//         let authObs: Observable<AuthResponseData>
//         authObs = this.authService.autoLogin();
//         authObs.subscribe(resData => {
//           console.log(resData);
//           console.log(resData.localId);
//           console.log(resData.displayName);

//           // this.getUserInfo();
//           this.isLoading = false;
//           loadingEl.dismiss();
//           // this.router.navigateByUrl('/tabs/home');
     
//           // this.userData.createStorage(resData.email);
//           // this.authService.myUserData(resData.idToken).subscribe(data => {
//           //   console.log(data);
//           //   console.log(data.theUser);
//           //   console.log(JSON.stringify(data['users']));
//           //   let myUsers = JSON.stringify(data["users"]);
//           //   console.log(myUsers["localId"]);
//           //   console.log(JSON.stringify(myUsers));
//           //   // this.currentUser = data;
//           // });

//           // this.authService.myUserData(JSON.stringify(resData.idToken));
//           // this.saveAuthData(resData);
//           // this.authService.userId.pipe(

//           // )

//           // let userProfileObs: Observable<UserProfileData>
//           // console.log(resData.localId);

//           // userProfileObs = this.authService.myUserData(resData.idToken);
//           // userProfileObs.subscribe((myData) => {
//           //   console.log(myData);
          
//           //   console.log(myData.displayName);
//           //   console.log(myData.localId);
//           //   const data = JSON.stringify({
//           //     userId: myData.localId,
//           //     email: myData.email, 
//           //     displayName: myData.displayName,
//           //     photoUrl: myData.photoUrl
//           //   });
//           //   // Plugins.Storage.set({key: 'userProfile', value: data});
//           // })
         
          
//         }, errRes => {
//           console.log(errRes);
//           loadingEl.dismiss();
//           const code = errRes.error.error.message;
//           let message = 'Could not sign you up, please try again.';
//           if (code === 'EMAIL_EXISTS') {
//             message = 'This email address already exists!';
//           } else if (code === 'EMAIL_NOT_FOUND') {
//             message = 'E-Mail address could not be found.';
//           } else if (code === 'INVALID_PASSWORD') {
//             message = 'The password is not correct.';
//           }
//           this.showAlert(message);
//         });

//       });
//       // this.getUserInfo();
//       // console.log("get User Info called");
  
// }
resetDisplayName(displayName: string) {
  let authObs: Observable<AuthResponseData>
  authObs = this.authService.updateTheUser(this.myToken, displayName);
  authObs.subscribe(resData => {
    console.log(resData);
    console.log(resData.localId);
    console.log(resData.displayName);
    this.myName = resData.displayName;
   
   this.retrieveUserInfo();
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

retrieveUserInfo() {
      
  let authObs: Observable<AuthResponseData>
authObs = this.authService.getUserData(this.myToken);
authObs.subscribe(resData => {
this.userInfo = resData.users[0];
console.log(resData.users[0]);
console.log(resData.users[0].localId);
console.log(resData.users[0].displayName);
this.myName = resData.users[0].displayName;


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


// getDisplayName() {
//   console.log("get Disoplay Name called");
//   // console.log(firebase.auth().currentUser.uid);
//   console.log(this.myUid);


// return firebase.database().ref('/users/' + this.myUid).once('value').then((snapshot) => {
//    this.myName = (snapshot.val() && snapshot.val().username) || 'Anonymous';

//    console.log(this.myName);
//   // ...
// });
// }

getEmail() {
  console.log("get Disoplay Name called");
  // console.log(firebase.auth().currentUser.uid);
  console.log(this.myEmail);

  
return firebase.database().ref('/users/' + this.myEmail).once('value').then((snapshot) => {
   this.myEmail = (snapshot.val() && snapshot.val().email) || 'Anonymous';
   console.log(this.myEmail);
  // ...
});
}
// getDisplayName() {
//   let authObs: Observable<AuthResponseData>
//   authObs.subscribe(resData => {
//     console.log(resData);
//     console.log(resData.localId);
//     console.log(resData.displayName);
//     this.myName = resData.displayName;
//     console.log(this.myName);


   
    
//   }, errRes => {
//     console.log(errRes);
//     const code = errRes.error.error.message;
//     let message = 'Could not sign you up, please try again.';
//     if (code === 'EMAIL_EXISTS') {
//       message = 'This email address already exists!';
//     } else if (code === 'EMAIL_NOT_FOUND') {
//       message = 'E-Mail address could not be found.';
//     } else if (code === 'INVALID_PASSWORD') {
//       message = 'The password is not correct.';
//     }
//     this.showAlert(message);
//   });

//   // this.authService.
//   // this.authService.theDisplayName();
//   // console.log(this.authService.theDisplayName());
//   // console.log(this.userProfile.name);
// // this.userProfile.name
// }













// getphotoUrl() {
//   this.userData.getPhotoUrl().then((photoURL) => {
//     if(photoURL != null) {
//       this.myPhotoUrl = photoURL;
//     } else {
//       this.myPhotoUrl = "Not Yet Set";
//     }
   
//     // console.log(this.myName);
//   });
// }

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


//   showUserInfo() {

//     this.myUid = this.myUser.id;
// // this.myUid = this.myUser.id;
// this.myEmail = this.myUser['email'];
// console.log(this.myEmail);
// this.myPhotoUrl = this.myUser.photoUrl;
//     // Plugins.Storage.get({key: 'authData', value: data});
// // console.log(JSON.stringify(this.myUser));
// // console.log(JSON.stringify(this.myUser.id));
// // console.log(JSON.stringify(this.myUser.));
// // console.log(JSON.stringify(this.myUser.token));
// // console.log(JSON.stringify(this.myUser.email));
// // console.log(JSON.stringify(this.myUser.tokenDuration));
//   }


doRefresh(event) {
  console.log('Begin async operation');
  //  this.myName = JSON.stringify(firebase.auth().currentUser.displayName);

  this.retrieveUserInfo();
  
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
            // this.authService.updateTheUser(data.name);
            this.resetDisplayName(data.name);
            // this.router.navigate(['/profile']);
            // this.ionViewWillEnter();
          }  
        }  
      ]  
    });  
    await prompt.present();  
  }  


//   changeDisplayFromPrompt(name: string) {
//     // var user = firebase.auth().currentUser;

//     // if (user) {
//     //   user.updateProfile({
//     //     displayName: name,
//     //   }).then(function() {
//     //     // Update successful.
//     //   }).catch(function(error) {
//     //     // An error happened.
//     //   });
//     // } else {
//     //   console.log("no User !!!!!!!!")
//     // }
  
//     this.authService.updateTheUser(name);

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

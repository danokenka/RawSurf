import { Component, OnInit } from '@angular/core';
import firebase from 'firebase/app';
import 'firebase/auth';
import { UserProfile } from '../../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
public myName: string;
public myEmail: string;
public myPhotoUrl: string;
public myUid: string;
  constructor(public router: Router) {}

userProfile = {} as UserProfile;
public userArray: string[] = [];
  ionViewWillEnter() {
    console.log("Ion view will enter")
  }


  ngOnInit() {
    
 console.log(firebase.auth().currentUser.email);

 console.log(JSON.stringify(firebase.auth().currentUser.email));
 this.myName = JSON.stringify(firebase.auth().currentUser.displayName);
 this.myEmail = JSON.stringify(firebase.auth().currentUser.email);
 this.myPhotoUrl = JSON.stringify(firebase.auth().currentUser.photoURL);
 this.myUid = JSON.stringify(firebase.auth().currentUser.uid)
  }



changeUserName(userProfile: UserProfile) {
  var user = firebase.auth().currentUser;

user.updateProfile({
  displayName: userProfile.name,
}).then(function() {
  // Update successful.
}).catch(function(error) {
  // An error happened.
});

}

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

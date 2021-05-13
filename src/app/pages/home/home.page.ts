import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
//  import { User } from '../../models/user';
 import firebase from 'firebase/app';
import 'firebase/auth';

export interface User {
  uid: string;
  email: string;
  displayName: string;
  photoURL: string;

}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public myName: string;
  currentUser: User = null;
  constructor(private authService: AuthService){
  }

  ngOnInit() {
     }

     ionViewWillEnter() {
      console.log("ion view will enter called");
  
        this.getDisplayName();
   
      
    
     }

     ionViewDidLoad() {
      console.log("I'm alive!");
    }

     ionViewWillUnload() {
      console.log("ion view will unload called");
      // this.getDisplayName();
     }

     ionViewWillLeave() {
      console.log("Looks like I'm about to leave :(");
      // this.getDisplayName();
    }

  getUserInfo() {
  console.log(firebase.auth().currentUser.email);
  console.log(firebase.auth().currentUser);
  
}

  signOut() {
    console.log("sign out pressed")
      this.authService.signOut();
      // this.myName = null;
  }
  setUserArr(myDisplayName: string) {
this.myName = myDisplayName;
  }

getDisplayName(){
  // var displayName = "";
  console.log(firebase.auth().currentUser);


  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      this.currentUser = user;
      // User is signed in.
      // console.log(JSON.stringify(user.displayName));
      console.log(this.currentUser.email);
      console.log(this.currentUser.uid);
      console.log(this.currentUser.photoURL);
      console.log(this.currentUser.displayName);
// var displayName = JSON.stringify(this.currentUser.displayName);
var displayName =this.currentUser.displayName;
      this.setUserArr(displayName);
      // var displayName = user.displayName;
      // var email = user.email;
      // var photoURL = user.photoURL;
      // var emailVerified = user.emailVerified;
      // var uid = user.uid;
      
      // this.displayName = JSON.stringify(user.displayName);
    } else {
      // No user is signed in.
      console.log("No User signed in");
    }

  });
}


  // firebase.auth().onAuthStateChanged(function(user) {
  //   if (user) {
  //     // User is signed in.
  //     console.log(JSON.stringify(user.displayName));
  //     var displayName = user.displayName;
  //     var email = user.email;
  //     var photoURL = user.photoURL;
  //     var emailVerified = user.emailVerified;
  //     var uid = user.uid;
      
  //     // this.displayName = JSON.stringify(user.displayName);
  //   } else {
  //     // No user is signed in.
  //     console.log("No User signed in");
  //   }

  // });
  
  // if (firebase.auth().currentUser.displayName != null) {
  // this.myName = JSON.stringify(firebase.auth().currentUser.displayName);
  // } else {
  //   console.log("display name is null");
  // }

// }
// reloadHome(){
//   this.getDisplayName();
// }



}

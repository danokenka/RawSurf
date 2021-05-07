import { Injectable } from '@angular/core';
import firebase from 'firebase/app';
import 'firebase/auth';
// import { User, EmailPasswordPair, NewAccount } from '../shared/user';
// import { User } from '../pages/login/login.page';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }


  // loginUser(
  //   email: string,
  //   password: string
  // ): Promise<firebase.auth.UserCredential> {
  //   return firebase.auth().signInWithEmailAndPassword(email, password);
  // }


  // DOCUMENATAITON HERE https://firebase.google.com/docs/auth/web/password-auth#create_a_password-based_account
  // THIS ACTUALLY WORKED
  signupUser(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;

    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(error.code, error.message);
    // ..
  });
  }



loginUser(email: string, password: string){
  firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in
     var user = userCredential.user;

    // this.user.email = email;
    // this.user.password = password;


    // ...
    // user.email = 
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
  });
}


signOut() {
  firebase.auth().signOut().then(() => {

    // Sign-out successful.
  }).catch((error) => {
    // An error happened.
  });
}
  
  // resetPassword(email:string): Promise<void> {
  //   return firebase.auth().sendPasswordResetEmail(email);
  // }  

  // logoutUser():Promise<void> {
  //   return firebase.auth().signOut();
  // }


  currentUser() {
    
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in.
        console.log("the user is signed in");
        console.log(JSON.stringify(user));
        console.log("the users token");
        console.log(user.getIdToken);
        console.log(JSON.stringify(user.getIdToken));
        var user = firebase.auth().currentUser;
        console.log(user.email);
   
      } else {
        // No user is signed in.
        console.log("no user logged in");
        console.log("Here is empty Object " + JSON.stringify(user));
      }
    });
  }


  getUserProfile() {
    var user = firebase.auth().currentUser;
  var name, email, photoUrl, uid, emailVerified;

  if (user != null) {
    name = user.displayName;
    email = user.email;
    photoUrl = user.photoURL;
    emailVerified = user.emailVerified;
    uid = user.uid;  // The user's ID, unique to the Firebase project. Do NOT use
                    // this value to authenticate with your backend server, if
                    // you have one. Use User.getToken() instead.
                    console.log(name + email)
  }

  }

  getToken() {
  firebase.auth().currentUser.getIdToken();
  }

}

import { Injectable } from '@angular/core';
import firebase from 'firebase/app';
import 'firebase/auth';

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
    // ..
  });
  }







  
  // resetPassword(email:string): Promise<void> {
  //   return firebase.auth().sendPasswordResetEmail(email);
  // }  

  // logoutUser():Promise<void> {
  //   return firebase.auth().signOut();
  // }


}

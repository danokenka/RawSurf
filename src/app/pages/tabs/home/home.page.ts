import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
 import { User } from '../../../models/user.model';
 import firebase from 'firebase/app';
import 'firebase/auth';

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

//   getUserInfo() {
//   console.log(firebase.auth().currentUser.email);
//   console.log(firebase.auth().currentUser);
  
// }

//   signOut() {
//     console.log("sign out pressed")
//       this.authService.signOut();
//   }


}

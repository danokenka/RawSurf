import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
 import { User } from '../../models/user';
 import firebase from 'firebase/app';
import 'firebase/auth';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private authService: AuthService){
  }

  getUserInfo() {
  console.log(firebase.auth().currentUser.email);
  console.log(firebase.auth().currentUser);
  
}

  signOut() {
    console.log("sign out pressed")
      this.authService.signOut();
  }


}

import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
 import { User } from '../../models/user';
 import firebase from 'firebase/app';
import 'firebase/auth';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public myName: string = null;
  constructor(private authService: AuthService, public navCtrl: NavController){
  }

  ngOnInit() {


    // this.getDisplayName();
  
  
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
      this.myName = null;
  }


getDisplayName(){
  console.log(firebase.auth().currentUser);
  if (firebase.auth().currentUser.displayName != null) {
  this.myName = JSON.stringify(firebase.auth().currentUser.displayName)
  } else {
    console.log("display name is null");
  }
}

reloadHome(){
  // this.navCtrl.navigateBack('/tabs');
  this.getDisplayName();
}



}

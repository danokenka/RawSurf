import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { User, EmailPasswordPair } from '../../models/user';
import firebase from 'firebase/app';
import 'firebase/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage {


  user = {} as EmailPasswordPair;


  constructor(public router: Router){
  }

  navigate() {
    this.router.navigate(["/tabs"])
  }

  // async register(user: User){
  //   console.log(user.email,
  //   user.password);

  //   try {
  //     const result = await firebase.auth().createUserWithEmailAndPassword(user.email, user.password);
  //     console.log(result);
  //     if (result) {
  //     this.navigate();
  //     }
  //   }
  //   catch (e) {
  //     console.log(e);
  //     console.log(e.a);
  //     console.log(e.code);
  //     console.log(e.message);
  //   }



    

      register(user: EmailPasswordPair){
        console.log(user.email, user.password);

        firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
        .then((res) => {
          console.log(res);
          this.navigate();
        }).catch((e) =>  {
          window.alert(e.message)
      })
  
  
    }

  // async register() {
  //   try {
  //     var r = await this.fAuth.auth.createUserWithEmailAndPassword(
  //       this.user.email,
  //       this.user.password
  //     );
  //     if (r) {
  //       console.log("Successfully registered!");
  //       this.navCtrl.navigateRoot('LoginPage');
  //     }

  //   } catch (err) {
  //     console.error(err);
  //   }
  // }
  }



import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Plugins } from '@capacitor/core';
import { LoadingController,AlertController } from '@ionic/angular';
// import * as firebase from 'firebase';
import { Observable } from 'rxjs';
import firebase from 'firebase/app';
import 'firebase/auth';

import { AuthService, AuthResponseData } from 'src/app/services/auth.service';

import { UserData } from 'src/app/services/user.data';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {
  isLoading = false;
  isLogin = true;
currentUser = [];
  constructor(
    private authService: AuthService,
    private router: Router,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    private userData: UserData
  ) {}
  ngOnInit() {
  }

    getUserInfo() {
  //     const user = firebase.auth().currentUser;
  // // console.log(firebase.auth().currentUser.email);
  // console.log(user);
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      console.log(user);
      // var uid = user.uid;
      this.userData.setDisplayName(user.displayName);
      this.userData.setPhotoUrl(user.photoURL);
      this.userData.setUid(user.uid);
     
      // ...
    } else {
      // User is signed out
      // ...
    }
  });
}




// firebaseLogin(email: string, password: string) {
//   firebase.auth().signInWithEmailAndPassword(email, password)
//   .then((userCredential) => {
//     // Signed in
//     var user = userCredential.user;
//     console.log(user);
//     console.log(user.displayName);
//     console.log(user.uid);

//     // this.userData.setDisplayName(user.displayName);
//     // ...
//   })
//   .catch((error) => {
//     var errorCode = error.code;
//     var errorMessage = error.message;
//   });
// }

  authenticate(email: string, password: string, name?: string) {
    this.isLoading = true;
    this.loadingCtrl
      .create({ keyboardClose: true, message: 'Logging in...' })
      .then(loadingEl => {
        loadingEl.present();
        let authObs: Observable<AuthResponseData>
        if (this.isLogin) {
          authObs = this.authService.login(email, password);
          // this.firebaseLogin(email, password);
        } else {
          authObs = this.authService.signup(email, password, name);
          console.log(name);
        }
        authObs.subscribe(resData => {
          console.log(resData);
          console.log(resData.localId);
          this.userData.createStorage();
          this.userData.setEmail(resData.email);
          this.userData.setlocalId(resData.localId);
          this.userData.setExpiresIn(resData.expiresIn);
          this.userData.setIdToken(resData.idToken);
          this.userData.setKind(resData.kind);
          this.userData.setRefreshToken(resData.refreshToken);
          this.getUserInfo();
     
          // this.userData.createStorage(resData.email);
          // this.authService.myUserData(resData.idToken).subscribe(data => {
          //   console.log(data);
          //   console.log(data.theUser);
          //   console.log(JSON.stringify(data['users']));
          //   let myUsers = JSON.stringify(data["users"]);
          //   console.log(myUsers["localId"]);
          //   console.log(JSON.stringify(myUsers));
          //   // this.currentUser = data;
          // });

          // this.authService.myUserData(JSON.stringify(resData.idToken));
          // this.saveAuthData(resData);
          // this.authService.userId.pipe(

          // )

          // let userProfileObs: Observable<UserProfileData>
          // console.log(resData.localId);

          // userProfileObs = this.authService.myUserData(resData.idToken);
          // userProfileObs.subscribe((myData) => {
          //   console.log(myData);
          
          //   console.log(myData.displayName);
          //   console.log(myData.localId);
          //   const data = JSON.stringify({
          //     userId: myData.localId,
          //     email: myData.email, 
          //     displayName: myData.displayName,
          //     photoUrl: myData.photoUrl
          //   });
          //   // Plugins.Storage.set({key: 'userProfile', value: data});
          // })
          this.isLoading = false;
          loadingEl.dismiss();
          this.router.navigateByUrl('/tabs/home');
          
        }, errRes => {
          console.log(errRes);
          loadingEl.dismiss();
          const code = errRes.error.error.message;
          let message = 'Could not sign you up, please try again.';
          if (code === 'EMAIL_EXISTS') {
            message = 'This email address already exists!';
          } else if (code === 'EMAIL_NOT_FOUND') {
            message = 'E-Mail address could not be found.';
          } else if (code === 'INVALID_PASSWORD') {
            message = 'The password is not correct.';
          }
          this.showAlert(message);
        });

      });
  }

  onSwitchAuthMode() {
    this.isLogin = !this.isLogin;
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    const email = form.value.email;
    const password = form.value.password;
    const name = form.value.name;
    console.log(email, password, name);

    this.authenticate(email, password, name);
  }

  quickLog() {
    this.authenticate("test@test.com", "test1234");
  }

private showAlert(message: string) {
  this.alertCtrl
    .create({
      header: 'Authentication failed', 
      message: message, 
      buttons: ['Okay']
    }).then(alertEl => alertEl.present());
}


// saveAuthData(resData: any) {
//   console.log(resData);

//   const data = JSON.stringify({
//     name: resData.displayName, 
//     email: resData.email, 
//     // emailVerified: resData.,

  
//   });
//   Plugins.Storage.set({key: 'userProfile', value: data});
// }

}  
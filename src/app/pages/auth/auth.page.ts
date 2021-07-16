import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Plugins } from '@capacitor/core';
import { LoadingController,AlertController, ToastController } from '@ionic/angular';
// import * as firebase from 'firebase';
import { Observable } from 'rxjs';
import firebase from 'firebase/app';
import 'firebase/auth';

import { AuthService, AuthResponseData } from 'src/app/services/auth.service';

import { UserData } from 'src/app/services/user.data';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {
  isLoading = false;
  isLogin = true;
  public myDisplayName;
  database = firebase.database();

currentUser = [];
  constructor(
    private firebaseService: FirebaseService,
    private toastCtrl: ToastController,
    private authService: AuthService,
    private router: Router,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    private userData: UserData
  ) {}
  ngOnInit() {
  // }

  //   getUserInfo() {

  // firebase.auth().onAuthStateChanged((user) => {
  //   if (user) {
  //     // User is signed in, see docs for a list of available properties
  //     // https://firebase.google.com/docs/reference/js/firebase.User
  //     console.log(user);
  //     // var uid = user.uid;
  //     console.log(user.displayName);
  //     this.userData.setDisplayName(user.displayName);
  //     this.userData.setPhotoUrl(user.photoURL);
  //     this.userData.setUid(user.uid);
     
  //     // ...
  //   } else {
  //     // User is signed out
  //     // ...
  //     console.log("No User" + user);
  //   }
  // });
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

getTheDisplayName() {
return this.myDisplayName;
}


  // add(data: AuthResponseData){
  //   this.firebaseService.addUser(data)
  //   .then( async res => {
  //     let toast = this.toastCtrl.create({
  //       message: 'User was created successfully',
  //       duration: 3000
  //     });
  //     (await toast).present();
  //   }, err => {
  //     console.log(err)
  //   })
  // }    

   writeUserData(userId, name, email) {
    firebase.database().ref('users/' + userId).set({
      username: name,
      email: email,
    });
  }



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
          console.log(resData.displayName);
         
          this.myDisplayName = resData.displayName;
          console.log(this.myDisplayName);
          this.userData.createStorage();
          this.userData.setEmail(resData.email);
          this.userData.setlocalId(resData.localId);
          this.userData.setExpiresIn(resData.expiresIn);
          this.userData.setIdToken(resData.idToken);
          this.userData.setKind(resData.kind);
          this.userData.setRefreshToken(resData.refreshToken);
          if (name) {
            console.log("this is the name " + name);
            this.writeUserData(resData.localId, name, resData.email);
            this.authService.updateTheUser(resData.idToken, name);
            // this.userData.setFirebaseName(name);
          } else {
            
            // this.writeUserData(resData.localId, resData.displayName, resData.email);
            // this.userData.setDisplayName(resData.displayName);
          //   this.userData.setDisplayName(resData.displayName);
          //   this.userData.getDisplayName().then((result) => {
          //     console.log(result);
          // });
            console.log("there is no name")
          }
        
          
     
          // this.getUserInfo();
          this.isLoading = false;
          loadingEl.dismiss();
          // this.writeUserData(resData.localId, resData.displayName, resData.email);
          // this.add(resData);
          this.router.navigateByUrl('/tabs/home');
     
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
      // this.getUserInfo();
      // console.log("get User Info called");
  }

  onSwitchAuthMode() {
    this.isLogin = !this.isLogin;
  }


  // ***** Original onSubmit to revert to if neccessary *****

  // onSubmit(form: NgForm) {
  //   if (!form.valid) {
  //     return;
  //   }
  //   const email = form.value.email;
  //   const password = form.value.password;

  //   if (this.isLogin) {
  //     console.log("this is login");
  //     this.authenticate(email, password);
  //   } else {
  //     console.log("this is signup");
  //     const name = form.value.name;
     
  //     if(name != "") {
  //       this.userData.setDisplayName(name);
  //       console.log("this was called");
  //       this.userData.getDisplayName().then((result) => {
  //         console.log(result);
  //     });
  //       console.log("this is signup");
  //     }
  //     console.log(email, password, name);
  
  //     this.authenticate(email, password, name);
  //   }
  // }



  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    const email = form.value.email;
    const password = form.value.password;

    if (this.isLogin) {
      console.log("this is login");
      this.authenticate(email, password);
    } else {
      console.log("this is signup");
      const name = form.value.name;
     
      if(name != "") {
        console.log("OnSubmit if Name !=")
        // this.userData.setDisplayName(name);
        console.log("this was called");
      //   this.userData.getDisplayName().then((result) => {
      //     console.log(result);
      // });
        console.log("this is signup");
      }
      console.log(email, password, name);
  
      this.authenticate(email, password, name);
    }
  }

  quickLog() {
    this.authenticate("danokenka@me.com", "Tru2theSol");
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
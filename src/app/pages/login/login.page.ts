import { TryCatchStmt, variable } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user';
import firebase from 'firebase/app';
import 'firebase/auth';
import { AlertController } from '@ionic/angular';

// import { User } from '../../shared/user';


// export class User {
//   email: string;
//   password: string;
// }


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  user = {} as User;
  // public user:User = new User();
  constructor(public router: Router, private authService: AuthService, public alertCtrl: AlertController) { }
  // email: string;
  // password: string;
  ngOnInit() {
  }

// setUser() {
//   var fireUser = firebase.auth().currentUser;  
// this.user.email = fireUser.email;
  
// }

navigate(){
  this.router.navigate(['/tabs'])
}


  async loginUser(user: User){
    try {
      const result = await firebase.auth().signInWithEmailAndPassword(user.email, user.password);
      console.log(result);
      if (result) {
      this.navigate();
      }
    }
    catch (e) {
      console.log(e);
    }
    
  }

  async autoLoginUser(){
    try {
      const result = await firebase.auth().signInWithEmailAndPassword(
        "test@test.com", "test1234");
      console.log(result);
      if (result) {
      this.navigate();
      }
    }
    catch (e) {
      console.log(e);
    }
    
  }



     signIn(user: User) {
       

        console.log(user.email,
          user.password)
          
       this.authService.signupUser(user.email,
            user.password);

        // if (this.authService.loginSuccess === true) {
        //   console.log("proceed to page");
        // } else {
        //   console.log("DO no proceed to page");
        // }

            // if (this.authService.currentUser = "no user logged in") {
            //   console.log("user sign in");
            // } else {
            //   console.log("user NOT signed in");
            // }




            // if (this.user === null) {
            //   console.log("no login available");
            // }
            // if (this.user === undefined) {
            //   console.log("no login available");
            // }
      }

checkUser() {
  this.authService.currentUser();
  // console.log(this.user);
  console.log(this.authService.currentUser);
this.authService.getUserProfile();

// if (myUser != null) { {
//     console.log("Sign-in provider: " + profile.providerId);
//     console.log("  Provider-specific UID: " + profile.uid);
//     console.log("  Name: " + profile.displayName);
//     console.log("  Email: " + profile.email);
//     console.log("  Photo URL: " + profile.photoURL);
//   });
// }

}

myUser() {
  // console.log(this.user);
}


signOut() {
  this.authService.signOut(); 
}

getToken() {
  var token = this.authService.getToken();
  console.log(token);
}




async showPrompt() {  
  const prompt = await this.alertCtrl.create({  
    header: 'Change User Profile Info',  
    message: 'Enter a new Display name',  
    inputs: [  
      {  
        name: 'name1',  
        type: 'text',  
        placeholder: 'DisplayName'  
      },  
    ],  
    buttons: [  
      {  
        text: 'Cancel',  
        handler: data => {  
          console.log('Cancel clicked');  
        }  
      },  
      {  
        text: 'Save',  
        handler: data => {  
          console.log('Saved clicked');  
        }  
      }  
    ]  
  });  
  await prompt.present();  
}  
  
}

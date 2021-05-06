import { TryCatchStmt, variable } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
// import { User, EmailPasswordPair, NewAccount } from '../../shared/user';
// import { User } from '../../shared/user';


export class User {
  email: string;
  password: string;
}


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public user:User = new User();
  constructor(public router: Router, private authService: AuthService) { }

  ngOnInit() {
  }




      async signIn() {
       

        console.log(this.user.email,
          this.user.password)
          
       this.authService.loginUser(this.user.email,
            this.user.password);

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
  console.log(this.user);
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
  console.log(this.user);
}


signOut() {
  this.authService.signOut(); 
  this.user.email = "";
  this.user.password = "";
}

getToken() {
  var token = this.authService.getToken();
  console.log(token);
}
  
}

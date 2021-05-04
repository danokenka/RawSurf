import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';



export class User {
  email: string;
  password: string;
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage {


  
  public user:User = new User();

  constructor(private authService: AuthService){
  }



  register(){
console.log(this.user.email,
  this.user.password)
  this.authService.signupUser(this.user.email,
    this.user.password);

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



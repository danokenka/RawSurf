import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
// import { User } from '../../shared/user';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private authService: AuthService){
  }

  signOut() {
    console.log("sign out pressed")
      this.authService.signOut();
  }

}

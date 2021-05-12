import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }



  signOut() {
    console.log("sign out pressed")
      this.authService.signOut();
  }

}

import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
 import { User } from '../../models/user';
 import firebase from 'firebase/app';
import 'firebase/auth';
// import { RawsurfUsersService } from '../../services/rawsurf-users.service';
import {HttpClient} from '@angular/common/http';  

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  public myName: string;
  users: any;
  baseUrl = 'https://raws-a942e-default-rtdb.firebaseio.com/';  

  constructor(private authService: AuthService, private http: HttpClient){
  }

  ngOnInit() {
    this.myName = JSON.stringify(firebase.auth().currentUser.displayName);
    // this.getUsers();
    this.getUsers().then(data => this.users = data);
     }

  getUserInfo() {
  console.log(firebase.auth().currentUser.email);
  console.log(firebase.auth().currentUser);
  
}

  signOut() {
    console.log("sign out pressed")
      this.authService.signOut();
  }

  getUsers() {
    //define our request url  
    let requestUrl = `${this.baseUrl}/users.json`;  
    return this.http.get(requestUrl).toPromise();  } 



}

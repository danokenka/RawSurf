import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { BehaviorSubject, from } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { User, UserProfile  } from '../models/user.model';
// import { UserProfile  } from '../models/user';
import { Plugins } from '@capacitor/core';
import firebase from 'firebase/app';
import 'firebase/auth';
// import { AuthPage } from '../pages/auth/auth.page';
// import { UserData } from './user.data';

export interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  localId: string;
  expiresIn: string;
  registered?: boolean;
  displayName: string;
  photoUrl: string;
  users: any;

}

export interface UserInfo {

  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  localId: string;
  expiresIn: string;
  registered?: boolean;
  displayName: string;
  photoUrl: string;
  users: [];

}


export interface TheUser {
   theUser: {
     localId:string, 
     email:string, 
     displayName: string, 
     photoUrl:string}[];
}



@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnDestroy{
  private _user = new BehaviorSubject<User>(null);
  private _userProfile = new BehaviorSubject<UserProfile>(null);
  private activeLogoutTimer: any;
  myUserData: any;

  get userIsAuthenticated() {
    // !! user.token forces converstion to boolean otherwise one ! would return true if invalid or false if valid
    return this._user.asObservable().pipe(
      map(user => {
        if (user) {
          return !!user.token;
        } else {
          return false;
        }
      })
    );
  }

  get token() {
    return this._user.asObservable().pipe(
      map(user => {
        if (user) {
          return user.token;
        } else {
          return null;
        }
      })
    );
  }

  get userId() {
    return this._user.asObservable().pipe(map(user => {
      if (user) {
        return user.id
      } else {
        return null;
      }
    }
      ));
  }


  get user() {
    return this._user.asObservable().pipe(map(user => {
      if (user) {
        return user
      } else {
        return null;
      }
    }
      ));
  }
  get displayName() {
    return this._userProfile.asObservable().pipe(map(userProfile => {
      if (userProfile) {
        return userProfile.displayName
      } else {
        return null;
      }
    }
      ));
  }

  get userProfile() {
    return this._userProfile.asObservable().pipe(map(userProfile => {
      if (userProfile) {
        return userProfile
      } else {
        return null;
      }
    }
      ));
  }
  constructor(private http: HttpClient,
    // public authPage: AuthPage
    // private userData: UserData
    ) { }

  ngOnDestroy() {
    if (this.activeLogoutTimer) {
      clearTimeout(this.activeLogoutTimer);
    }
  }

  autoLogin() {
    return from(Plugins.Storage.get({key: 'authData'})).pipe(
      map(storedData => {
        if(!storedData || !storedData.value) {
          return null;
        }
        const parsedData = JSON.parse(storedData.value) as {
          token: string; 
          tokenExpirationDate: string; 
          userId: string;
          email: string;
        };
        const expirationTime = new Date(parsedData.tokenExpirationDate);
        if (expirationTime <= new Date()) {
          return null;
        }
        const user = new User(
          parsedData.userId, 
          parsedData.email, 
          parsedData.token, 
          expirationTime
        );
        return user;
      }),
      tap(user => {
        if (user) {
          this._user.next(user);
          this.autoLogout(user.tokenDuration);
        }
      }),
      map(user => {
        return !!user;
      })
    );
  }


//   myUserData(idToken: string) {
//     console.log(idToken);
//     return this.http.post<TheUser>(
//       `https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=${
//       environment.firebaseAPIKey
//     }`, {idToken: idToken}
//     ).pipe(
//       tap(_ => console.log(`User fetched: ${idToken}`)));
// }

// getUserInfo(name: string) {
//   //     const user = firebase.auth().currentUser;
//   console.log("Get User Info called");
//   // console.log(user);
//   firebase.auth().onAuthStateChanged((user) => {
//     if (user) {
//       // User is signed in, see docs for a list of available properties
//       // https://firebase.google.com/docs/reference/js/firebase.User
//       console.log(user);
//       // var uid = user.uid;
//       this.userData.setDisplayName(name);
   
     
//       // ...
//     } else {
//       // User is signed out
//       // ...
//     }
//   });
// }




// theDisplayName() {
//   console.log(this.authPage.getTheDisplayName);
// this.authPage.getTheDisplayName;


// }




firstDisplayName(name: string) {
  console.log(name);

  firebase.auth().onAuthStateChanged((user) => {
    console.log(user);
    if (user) {
      user.updateProfile({
        displayName: name,
        // photoURL: "assets/img/logo.png"
      }).then(function() {
        console.log(user.displayName);
        
        // Profile updated successfully!
        // "Jane Q. User"
        var displayName = user.displayName;
        console.log(displayName);
        // "https://example.com/jane-q-user/profile.jpg"
        console.log(user.photoURL);
        var photoURL = user.photoURL;
        console.log(user.photoURL);
      }, function(error) {
        // An error happened.
      });
      
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      console.log(user);
      // var uid = user.uid;
      // this.userData.setDisplayName(user.displayName);
      // this.userData.setPhotoUrl(user.photoURL);
      // this.userData.setUid(user.uid);
     
      // ...
    } else {
      // User is signed out
      // ...
    }
  });

// Passing a null value will delete the current attribute's value, but not
// passing a property won't change the current attribute's value:
// Let's say we're using the same user than before, after the update.
// user.updateProfile({photoURL: null}).then(function() {
//   // Profile updated successfully!
//   // "Jane Q. User", hasn't changed.
//   var displayName = user.displayName;
//   // Now, this is null.
//   var photoURL = user.photoURL;
// }, function(error) {
//   // An error happened.
// });





  // user.updateProfile({
  //   displayName : name,
  //   photoURL: "https://drive.google.com/file/d/1Txek7LjvPK6p72QvPptQ-IhxYBAeACsL/view?usp=sharing"
  // }).then(() => {
  //   // Update successful
  //   // ...
  //   var displayName = user.displayName;
  //   // "https://example.com/jane-q-user/profile.jpg"
  //   var photoURL = user.photoURL;
  // }).catch((error) => {
  //   // An error occurred
  //   // ...
  // }); 
  
  
}

getUserData(token: string) {
  return this.http.post<AuthResponseData>(
    `https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=${
    environment.firebaseAPIKey
  }`, {idToken: token}, 
  ).pipe(tap(this.setUserProfileData.bind(this))
  );
}

updateTheUser(token: string, displayName: string){
console.log(token);
  if (displayName) {
 
    console.log(displayName);
  }
  console.log(displayName);
  return this.http.post<AuthResponseData>(
    `https://identitytoolkit.googleapis.com/v1/accounts:update?key=${
    environment.firebaseAPIKey
  }`, {idToken: token, displayName: displayName, returnSecureToken: true}, 
  ).pipe(tap(this.setUserProfileData.bind(this))
  );
}

  signup(email: string, password: string, name?: string) {
//     if(name !== undefined) { 
// console.log(name);
// this.firstDisplayName(name)
//     }
    if (name) {
      this.firstDisplayName(name);
      console.log(name);
    }
    console.log(name);
    return this.http.post<AuthResponseData>(
      `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${
      environment.firebaseAPIKey
    }`, {email: email, password: password, returnSecureToken: true}, 
    ).pipe(tap(this.setUserData.bind(this))
    );
  
   
  }

  login(email: string, password: string) {
    return this.http.post<AuthResponseData>(
      `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${
        environment.firebaseAPIKey
    }`, 
    {email: email, password: password, returnSecureToken: true}
    )
    .pipe(tap(this.setUserData.bind(this)));
  }

  logout() {
    if (this.activeLogoutTimer) {
      clearTimeout(this.activeLogoutTimer);
    }
    this._user.next(null);
    Plugins.Storage.remove({key: 'authData' });
  }

  private autoLogout(duration: number) {
    if (this.activeLogoutTimer) {
      clearTimeout(this.activeLogoutTimer);
    }
    this.activeLogoutTimer = setTimeout(() => {
    this.logout();
  }, duration);
  }


  private setUserProfileData(userData: AuthResponseData) {
    const expirationTime = new Date(new Date().getTime() + (+userData.expiresIn * 1000)
    );
    const userProfile = new UserProfile(
      userData.localId, 
      userData.email, 
      userData.displayName, 
      userData.photoUrl
    );
    this._userProfile.next(userProfile);
    // this.myUserData(user.id);
    // this.autoLogout(userProfile.tokenDuration);
      // this.storeAuthData(
      //   userData.localId, 
      //   userData.email, 
      //   userData.displayName, 
      //   userData.photoUrl
      // );
}

  // private setUserData(userData: AuthResponseData) {
  //     const expirationTime = new Date(
  //       new Date().getTime() + +userData.expiresIn * 1000
  //     );
  //     const user = new User(
  //       userData.localId, 
  //       userData.email, 
  //       userData.idToken, 
  //       expirationTime
  //     );
  //     this._user.next(user);
  //     // this.myUserData(user.id);
  //     this.autoLogout(user.tokenDuration);
  //       this.storeAuthData(
  //         userData.localId, 
  //         userData.idToken, 
  //         expirationTime.toISOString(),
  //         userData.email
  //       );
  // }

  private setUserData(userData: AuthResponseData) {
    const expirationTime = new Date(
      new Date().getTime() + +userData.expiresIn * 1000
    );
    const user = new User(
      userData.localId,
      userData.email,
      userData.idToken,
      expirationTime
    );
    this._user.next(user);
    this.autoLogout(user.tokenDuration);
    this.storeAuthData(
      userData.localId,
      userData.idToken,
      expirationTime.toISOString(),
      userData.email
    );
  }


  

  // private storeAuthData(
  //   userId: string,
  //   token: string,
  //   tokenExpirationDate: string,
  //   email: string
  // ){
  //   //change to string because unable to store objects.. but can store strings
  //   const data = JSON.stringify({
  //     userId: userId, 
  //     token: token, 
  //     tokenExpirationDat: tokenExpirationDate,
  //     email: email
  //   });
  //   // this.myUserData = data;
  //   Plugins.Storage.set({key: 'authData', value: data});
  //   // console.log(this.myUserData(JSON.stringify(userId)))
  //   // this.myUserData(userId);
  // }


  private storeAuthData(
    userId: string,
    token: string,
    tokenExpirationDate: string,
    email: string
  ) {
    const data = JSON.stringify({
      userId: userId,
      token: token,
      tokenExpirationDate: tokenExpirationDate,
      email: email
    });
    Plugins.Storage.set({ key: 'authData', value: data });
  }



  // private storeUserData(
  //   userId: string,
  //   email: string,
  //   displayName: string,
  //   photoUrl: string
  // ){
  //   //change to string because unable to store objects.. but can store strings
  //   const data = JSON.stringify({
  //     userId: userId,
  //     email: email, 
  //     displayName: displayName,
  //     photoUrl: photoUrl
  //   });
  //   Plugins.Storage.set({key: 'userProfile', value: data});
  //   console.log(JSON.stringify(data));
  //   console.log(userId);
  //   // this.myUserData(userId);
  // }
//   private setUserProfileData(userData: UserProfileData) {
//     console.log("set User Profile called");
//     console.log(userData);
//     console.log(JSON.stringify(userData.email));
//     const userProfile = new UserProfile(
//       userData.localId, 
//       userData.email, 
//       userData.displayName, 
//        userData.photoUrl
//     );
//     console.log(userData.email);
//     // this._userProfile.next(userProfile);
//     this.storeUserData(
//       userData.localId, 
//       userData.email, 
//       userData.displayName, 
//        userData.photoUrl
//     );

  
// }


  
}

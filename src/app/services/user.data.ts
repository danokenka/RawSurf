import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import firebase from 'firebase/app';
import 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class UserData {
  favorites: string[] = [];
  HAS_LOGGED_IN = 'hasLoggedIn';
  HAS_SEEN_TUTORIAL = 'hasSeenTutorial';

  constructor(
    public storage: Storage
  ) { }

  async createStorage() {
    // If using a custom driver:
    // await this.storage.defineDriver(MyCustomDriver)
    await this.storage.create();
    // this.setUsername(userName);
  }

  hasFavorite(sessionName: string): boolean {
    return (this.favorites.indexOf(sessionName) > -1);
  }

  addFavorite(sessionName: string): void {
    this.favorites.push(sessionName);
  }

  removeFavorite(sessionName: string): void {
    const index = this.favorites.indexOf(sessionName);
    if (index > -1) {
      this.favorites.splice(index, 1);
    }
  }

  login(username: string): Promise<any> {
    return this.storage.set(this.HAS_LOGGED_IN, true).then(() => {
      this.setUsername(username);
      return window.dispatchEvent(new CustomEvent('user:login'));
    });
  }

  signup(username: string): Promise<any> {
    return this.storage.set(this.HAS_LOGGED_IN, true).then(() => {
      this.setUsername(username);
      return window.dispatchEvent(new CustomEvent('user:signup'));
    });
  }

  logout(): Promise<any> {
    return this.storage.remove(this.HAS_LOGGED_IN).then(() => {
      return this.storage.remove('username');
    }).then(() => {
      window.dispatchEvent(new CustomEvent('user:logout'));
    });


  }
  setPhotoUrl(photoURL: string): Promise<any> {
    return this.storage.set('photoURL', photoURL);
  } 
  getPhotoUrl(): Promise<string> {
    return this.storage.get('photoURL').then((value) => {
      return value;
    });
  }
  setUid(uid: string): Promise<any> {
    return this.storage.set('uid', uid);
  } 
 
  setRefreshToken(refreshToken: string): Promise<any> {
    return this.storage.set('refreshToken', refreshToken);
  } 
  setDisplayName(displayName: string): Promise<any> {
    return this.storage.set('displayName', displayName);
  } 

  setFirebaseName(name: string){
    console.log(name);
    console.log(JSON.stringify(name));
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        var uid = user.uid;

        user.updateProfile({
          displayName: name,
        // displayName: JSON.stringify(name),
        // photoURL: "https://example.com/jane-q-user/profile.jpg"
      }).then(() => {
        console.log("name updated succesfully");
        console.log(user.displayName);
        // Update successful
        // ...
      }).catch((error) => {
        console.log("name update failed")
        // An error occurred
        // ...
      });  


        // ...
      } else {
        // User is signed out
        // ...
      }
    });
  
    

  } 

  getDisplayName(): Promise<string> {
    return this.storage.get('displayName').then((value) => {
      console.log(value)
      return value;
    });
  }


//   getFromStorageStandard(){

//     return this.storage.get('displayName');

// }

  setKind(kind: string): Promise<any> {
    return this.storage.set('kind', kind);
  } 

  setIdToken(idToken: string): Promise<any> {
    return this.storage.set('idToken', idToken);
  } 

  getIdToken(): Promise<string> {
    return this.storage.get('idToken').then((value) => {
      return value;
    });
  }

  setExpiresIn(expiresIn: string): Promise<any> {
    return this.storage.set('expiresIn', expiresIn);
  } 

  setlocalId(localId: string): Promise<any> {
    return this.storage.set('localId', localId);
  }
  setEmail(email: string): Promise<any> {
    return this.storage.set('email', email);
  }

  setUsername(username: string): Promise<any> {
    return this.storage.set('username', username);
  }

  getUsername(): Promise<string> {
    return this.storage.get('username').then((value) => {
      return value;
    });
  }

  isLoggedIn(): Promise<boolean> {
    return this.storage.get(this.HAS_LOGGED_IN).then((value) => {
      return value === true;
    });
  }

  checkHasSeenTutorial(): Promise<string> {
    return this.storage.get(this.HAS_SEEN_TUTORIAL).then((value) => {
      return value;
    });
  }
}

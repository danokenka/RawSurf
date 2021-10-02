import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthResponseData } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(
    public afs: AngularFirestore
  ){ }

    addUser(data: AuthResponseData){
      return new Promise<any>((resolve, reject) => {
        this.afs.collection('/users').add({
          kind: data.kind,
          idToken: data.idToken,
          email: data.email,
          refreshToken: data.refreshToken,
          localId: data.localId,
          expiresIn: data.expiresIn,
          registered: data.registered,
          displayName: data.displayName,
          
        })
        .then(
          (res) => {
            resolve(res)
          },
          err => reject(err)
        )
      })
    }
}
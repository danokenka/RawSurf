import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import firebase from 'firebase/app';
import { HttpClientModule } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { EmailComposer } from '@ionic-native/email-composer/ngx';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Storage } from '@ionic/storage-angular';
import { Calendar } from '@ionic-native/calendar/ngx';
import { NgCalendarModule  } from 'ionic2-calendar';
import { Stripe } from '@ionic-native/stripe/ngx';
// import { AppVersion } from '@ionic-native/app-version/ngx';
// import { Calendar } from '@ionic-native/calendar/ngx';
// import { Calendar } from '@ionic-native/calendar';



  // Initialize Firebase
  export const config = {
      apiKey: "AIzaSyDnn5mVvbqRL2j77zgMrQX0yYFppGmwP14",
      authDomain: "raws-a942e.firebaseapp.com",
      projectId: "raws-a942e",
      storageBucket: "raws-a942e.appspot.com",
      messagingSenderId: "1024438702340",
      appId: "1:1024438702340:web:50e2307752644c4368c051",
      measurementId: "G-SKHZ0M3L7L"
    };
  firebase.initializeApp(config);

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, 
    HttpClientModule,
    IonicModule.forRoot(), 
    AppRoutingModule,
    NgCalendarModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    FormsModule, ReactiveFormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      // registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [
    EmailComposer,
    Storage,
    Calendar,
    Stripe,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy}],
    
  bootstrap: [AppComponent],

})
export class AppModule {}

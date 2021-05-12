// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseConfig : {
    apiKey: "AIzaSyDnn5mVvbqRL2j77zgMrQX0yYFppGmwP14",
    authDomain: "raws-a942e.firebaseapp.com",
    projectId: "raws-a942e",
    storageBucket: "raws-a942e.appspot.com",
    messagingSenderId: "1024438702340",
    appId: "1:1024438702340:web:50e2307752644c4368c051",
    measurementId: "G-SKHZ0M3L7L",
    databaseURL: "https://raws-a942e-default-rtdb.firebaseio.com/",
  }
};

// var databaseConfig = {
//   apiKey: "AIzaSyDnn5mVvbqRL2j77zgMrQX0yYFppGmwP14",
//   authDomain: "projectId.firebaseapp.com",
//   // For databases not in the us-central1 location, databaseURL will be of the
//   // form https://[databaseName].[region].firebasedatabase.app.
//   // For example, https://your-database-123.europe-west1.firebasedatabase.app
//   databaseURL: "https://raws-a942e-default-rtdb.firebaseio.com/",
//   storageBucket: "bucket.appspot.com"
// };
// firebase.initializeApp(databaseConfig);

// // Get a reference to the database service
// var database = firebase.database();

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

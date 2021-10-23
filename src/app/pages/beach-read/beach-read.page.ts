import { Component, OnInit, ViewChild } from '@angular/core';
import firebase from 'firebase/app';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-beach-read',
  templateUrl: './beach-read.page.html',
  styleUrls: ['./beach-read.page.scss'],
})
export class BeachReadPage implements OnInit {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  database = firebase.database();
  beachNames;
  beachesNames;
  myObj;
  i;
  beachList: string[] = [];
  searchTerm: string = "";
  refToUser;
  showBeaches = false;
  constructor() { }

  ngOnInit() {
    // this.readBeachData();

  }
  viewBreveardBeaches() {
    this.retrieveBeachNames();
  }
  // Used to Get all Beach Names from JSON
  retrieveBeachNames(){
    this.showBeaches = true;
    var myUrlPath = 'Beaches/State/Florida/Region/Central/features';
      var brevardRef = firebase.database().ref(myUrlPath);

  brevardRef.get().then((res => {
       console.log(res.val());
       this.myObj = res.val();
     }));

  }

// Selected Beach Name
  showPoints(value1){
  this.showBeaches = false
    console.log(value1)
    
      }

      
      loadData(event) {
        setTimeout(() => {
          console.log('Done');
          event.target.complete();
    
          // App logic to determine if all data is loaded
          // and disable the infinite scroll
          if (this.myObj.length == 1000) {
            event.target.disabled = true;
          }
        }, 500);
      }

      toggleInfiniteScroll() {
        this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
      }
    

//   readBeachData() {
//     for (this.i = 0; this.i < 61; this.i++) {
//       // this.readBeaches(this.i);
//       let stringI = JSON.stringify(this.i); 
//       console.log(stringI);
//       // console.log(i);
//       var myUrlPath = 'Beaches/State/Florida/Region/Central/features/' + this.i + '/attributes';
//       var brevardRef = firebase.database().ref(myUrlPath)
// brevardRef.orderByValue().on("value", function(snapshot) {
//   snapshot.forEach(function(data) {
//     if(data.key === "NAME") {
// console.log("Beach Names In Brevard Are " + data.val());
// let name = JSON.stringify(data.val());
// let addName = [name]
// addName.concat(this.beachList)
// // addToList();
// // let total = this.addName.concat(name)
// // console.log(this.beachList[total])
// console.log(name);
//     }
//     // console.log("The " + data.key + " score is " + data.val());
//     // console.log(data.val());
//     // console.log(data.val());

//     // this.beachNames = data.val().name;
//   });
// });



    

      // brevardRef.once("value")
      // .then(function (snapshot) {
      //    this.beachNames = snapshot.child("NAME").val(); // {first:"Ada",last:"Lovelace"}
      //   console.log(this.beachNames.name)
      //   console.log ("name " + i + " is " + this.beachNames);
      //   // var firstName = snapshot.child("name/first").val(); // "Ada"
      //   // var lastName = snapshot.child("name").child("last").val(); // "Lovelace"
      //   // var age = snapshot.child("age").val(); // null
      // });
  //   }
  //   // var brevardRef = firebase.database().ref('Beaches/State/Florida/Region/Central/features')
  //   // brevardRef.once("value")
  //   //   .then(function (snapshot) {
  //   //     this.beachNames = snapshot.child("name").val(); // {first:"Ada",last:"Lovelace"}
  //   //     console.log(this.beachNames)
  //   //     // var firstName = snapshot.child("name/first").val(); // "Ada"
  //   //     // var lastName = snapshot.child("name").child("last").val(); // "Lovelace"
  //   //     // var age = snapshot.child("age").val(); // null
  //   //   });
  // }

  // addToList(name: string): void {
  //   this.beachList.push(name);
  //   console.log(this.beachList)
  // }

  // readBeaches(i) {
  //   var myUrlPath = 'Beaches/State/Florida/Region/Central/features/' + this.i + '/attributes';
  //   var brevardBeachNames = firebase.database().ref(myUrlPath);
  //     brevardBeachNames.get().then((resData => {
  //     console.log(resData)
  //     }));

  // }
}

// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-event-modal',
//   templateUrl: './event-modal.page.html',
//   styleUrls: ['./event-modal.page.scss'],
// })
// export class EventModalPage implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }


import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, NavParams, ModalController} from '@ionic/angular';
import * as moment from 'moment';
import { PhotographerObj } from 'src/app/interfaces/photographer';


 

@Component({
  selector: 'app-event-modal',
  templateUrl: './event-modal.page.html',
  styleUrls: ['./event-modal.page.scss'],
})
export class EventModalPage {
 pA: PhotographerObj;
pName;
 ngOnInit() {
  console.log(`${this.pA}`)
  console.log(`${this.pA.id}`)
  console.log(`${this.pA.name}`)
  console.log(`${this.pA.Company}`)
  console.log(`${this.pA.Price}`)
  console.log(`${this.pA.RegionCode}`)
  console.log(`${this.pA.Image}`)
  console.log(`${this.pA.Region}`)
  console.log(`${this.pA.phone}`)
  console.log(`${this.pA.username}`)
  console.log(`${this.pA.website}`)
  this.pName = this.pA.name;
  // console.log(`${this.pA[0]}`)
  // console.log(`${this.pA[1]}`)
  // console.log(`${this.pA[2]}`)
  // console.log(`${this.pA[3]}`)
  // console.log(`${this.pA[4]}`)
  // console.log(`${this.pA[5]}`)
  // console.log(`${this.pA[6]}`)
  // console.log(`${this.pA[7]}`)
}
 
  event = { startTime: new Date().toISOString(), endTime: new Date().toTimeString(), allDay: false };
  minDate = new Date(new Date().getTime()+(3*24*60*60*1000)).toISOString();
 
  constructor(public navCtrl: NavController, private navParams: NavParams, public viewCtrl: ModalController, public router: Router) {
    let preselectedDate = moment(this.navParams.get('selectedDay')).format();
    this.event.startTime = preselectedDate;
    this.event.endTime = preselectedDate;
  }
  

  cancel() {
    this.viewCtrl.dismiss();
  }
 
  save() {
    this.viewCtrl.dismiss(this.event);
    this.router.navigateByUrl('/tabs/book/ph-booking/payments');
  }
  







 
}


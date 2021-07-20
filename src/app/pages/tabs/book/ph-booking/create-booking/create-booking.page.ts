import { Component, OnInit } from '@angular/core';
// import { Calendar } from '@ionic-native/calendar/ngx';
import { Calendar } from '@ionic-native/calendar';

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.page.html',
  styleUrls: ['./create-booking.page.scss'],
})
export class CreateBookingPage implements OnInit {
  constructor(private calendar: Calendar) { }

  ngOnInit() {
    this.getCalendar();
  }

getCalendar() {
  this.calendar.createCalendar('MyCalendar').then(
    (msg) => { console.log(msg); },
    (err) => { console.log(err); }
  );
}


}

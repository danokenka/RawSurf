import { Injectable } from '@angular/core';

import { Booking } from './booking.model';

@Injectable({ providedIn: 'root' })
export class BookingService {
  private _bookings: Booking[] = [
      {
          id: 'xyz',
          photographerId: 'p1',
          photographerName: 'Manhattan Mansion',
          guestNumber: 2,
          userId: 'abc'
      }
  ];

  get bookings() {
    return [...this._bookings];
  }
}

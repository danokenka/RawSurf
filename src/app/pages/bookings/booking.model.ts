export class Booking {
    constructor(
      public id: string,
      public photographerId: string,
      public userId: string,
      public photographerName: string,
      public guestNumber: number
    ) {}
  }
  
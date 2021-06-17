export class Photographer {
    constructor(
      public id: string,
      public name: string,
      public description: string,
      public imageUrl: string,
      public price: number,
      public availableFrom: Date,
      public availableTo: Date,
      public userId: string
    ) {}
  }
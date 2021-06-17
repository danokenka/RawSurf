import { Injectable } from '@angular/core';
import { Photographer } from './photographer.model';

@Injectable({
  providedIn: 'root'
})
export class BookPhotoService {
  private _photographers: Photographer[] = [
    new Photographer(
      'p1',
      'David Pritzker',
      'Currently in the Space Coast and owns Raw Surf',
      'https://photos.app.goo.gl/utLK14r7QdHZeisw9',
      100.00,
      new Date('2019-01-01'),
      new Date('2019-12-31')
    ),
    new Photographer(
      'p2',
      "L'Amour Toujours",
      'A romantic place in Paris!',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Paris_Night.jpg/1024px-Paris_Night.jpg',
      189.99,
      new Date('2019-01-01'),
      new Date('2019-12-31')
    ),
    new Photographer(
      'p3',
      'The Foggy Palace',
      'Not your average city trip!',
      'https://upload.wikimedia.org/wikipedia/commons/0/01/San_Francisco_with_two_bridges_and_the_fog.jpg',
      99.99,
      new Date('2019-01-01'),
      new Date('2019-12-31')
    )
  ];

  get photographers() {
    return [...this._photographers];
  }

  constructor() {}

  getPhotographer(id: string) {
    return {...this._photographers.find(p => p.id === id
     )};
   }
}

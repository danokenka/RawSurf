// import { Injectable } from '@angular/core';
// import { Photographer } from '../models/photographer.model';
// import { AuthService } from './auth.service';

// @Injectable({
//   providedIn: 'root'
// })
// export class PhotographersService {
//   private _photographers: Photographer[] = [
//     new Photographer(
//       'p1',
//       'David Pritzker',
//       'Central Florida Photographer',
//       'https://lh3.googleusercontent.com/V27ggylP5wNzcIUl5oTMZcJc9SS-KvEeAU6bxWbzzM0XdliT8Vgjs_3eEaMR4kdsEuyO-xd_8yS7RifzGhM-THjeAfOvn3v6m2CEtmvrxw3Urr6ujJ2U67jK6W7mviUkWNNli9C5KEdniEkG11zM4ed9ney_N-aMzOMZh-tNN5at3YupoeacMtd7j_FtBBHRqHl8ADNCpk7J7hEtp1A6Zz08Ev4LB3lsZ_bWVKKuU-RKC7vBoiRG9F7Cxv93ybBqMwvnkY3D5dGF4exYiaQujDl-MVQYnmo6f5n1kF5Empd7LRBOVxoe2_yuMLzFqn5_-3HjQsT6DwVIeWNzlHyvyEDNgOwe5yypXK-RBzEUbW9-UnS5Kdhmo80C0wgrpTQbk_5DhibYjYPpQPTsu8XLT5WopaI29DgmdayEjf_rbLwL2ZooHOohg7UTxto6Mh4xUWhva-nLa9x6I8X6vEefuETQ74SqKximuTQ5ZY4TGWEMQtJRQaw8R9X2Ul8_pkLWf5Qn6S77FyzMQCZ8D7OadAeIV62_9YVyCgVTil8jIDUXhEmcOWCrfO2URXTyRJKSGc4ehAiJZ2wzv7VZ1Mny5qkoDfvBQru96pTpgDDUUdyO5Qi5REI1WtQE5n0CR98e6GFscpYvuxUFMsEfH1xgsxFCU-67t28KXKf3R1J0wvwqPEi9bk7wvelWUDRxZDhXweSHCWFymkYZkqpYm4zvZvRW=w611-h814-no?authuser=0',
//       100.00,
//       new Date('2019-01-01'),
//       new Date('2019-12-31'),
//       'abc'
//     ),
//     new Photographer(
//       'p2',
//       "L'Amour Toujours",
//       'A romantic place in Paris!',
//       'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Paris_Night.jpg/1024px-Paris_Night.jpg',
//       50.00,
//       new Date('2019-01-01'),
//       new Date('2019-12-31'),
//       'abc'
//     ),
//     new Photographer(
//       'p3',
//       'The Foggy Palace',
//       'Not your average city trip!',
//       'https://upload.wikimedia.org/wikipedia/commons/0/01/San_Francisco_with_two_bridges_and_the_fog.jpg',
//       75.00,
//       new Date('2019-01-01'),
//       new Date('2019-12-31'),
//       'abc'
//     )
//   ];

//   get photographers() {
//     return [...this._photographers];
//   }

//   constructor(private authService: AuthService) { }

//   getPhotographer(id: string) {
//     return {...this._photographers.find(p => p.id === id
//      )};
//    }


// }



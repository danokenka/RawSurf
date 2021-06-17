import { NgModule } from '@angular/core';
import { Routes, RouterModule, ChildActivationEnd } from '@angular/router';

import { BookPage } from './book.page';

const routes: Routes = [
  {
    path: '',
    component: BookPage,
    children: [
      {
        path: 'book-photographer',
        loadChildren: () => import('./book-photographer/book-photographer.module').then( m => m.BookPhotographerPageModule)
      },
      {
        path: 'book-surftrip',
        loadChildren: () => import('./book-surftrip/book-surftrip.module').then( m => m.BookSurftripPageModule)
      }
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookPage } from './book.page';

const routes: Routes = [
  {
    path: '',
    component: BookPage
  },
  {
    path: 'ph-booking',
    loadChildren: () => import('./ph-booking/ph-booking.module').then( m => m.PhBookingPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookPageRoutingModule {}

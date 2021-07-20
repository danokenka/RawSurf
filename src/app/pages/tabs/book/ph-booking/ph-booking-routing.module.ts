import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhBookingPage } from './ph-booking.page';

const routes: Routes = [
  {
    path: '',
    component: PhBookingPage
  },
  {
    path: 'create-booking',
    loadChildren: () => import('./create-booking/create-booking.module').then( m => m.CreateBookingPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PhBookingPageRoutingModule {}

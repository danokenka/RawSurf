import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhBookingPage } from './ph-booking.page';

const routes: Routes = [
  {
    path: '',
    component: PhBookingPage
  },
  {
    path: 'event-modal',
    loadChildren: () => import('./event-modal/event-modal.module').then( m => m.EventModalPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PhBookingPageRoutingModule {}

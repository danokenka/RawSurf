import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PhBookingPageRoutingModule } from './ph-booking-routing.module';

import { PhBookingPage } from './ph-booking.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PhBookingPageRoutingModule
  ],
  declarations: [PhBookingPage]
})
export class PhBookingPageModule {}

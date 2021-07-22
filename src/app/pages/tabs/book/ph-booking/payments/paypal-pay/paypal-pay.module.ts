import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaypalPayPageRoutingModule } from './paypal-pay-routing.module';

import { PaypalPayPage } from './paypal-pay.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaypalPayPageRoutingModule
  ],
  declarations: [PaypalPayPage]
})
export class PaypalPayPageModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaymentsPage } from './payments.page';

const routes: Routes = [
  {
    path: '',
    component: PaymentsPage
  },
  {
    path: 'paypal-pay',
    loadChildren: () => import('./paypal-pay/paypal-pay.module').then( m => m.PaypalPayPageModule)
  },
  {
    path: 'stripe-pay',
    loadChildren: () => import('./stripe-pay/stripe-pay.module').then( m => m.StripePayPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaymentsPageRoutingModule {}

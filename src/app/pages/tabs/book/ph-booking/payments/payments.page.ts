import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.page.html',
  styleUrls: ['./payments.page.scss'],
})
export class PaymentsPage implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  payPalPay() {
    // this.viewCtrl.dismiss(this.event);
    // this.router.navigateByUrl('/tabs/book/ph-booking/payments/accepted-payments/paypal-pay', { replaceUrl:true });
    this.router.navigateByUrl('tabs/book/ph-booking/payments/paypal-pay');
  }
  
stripePay() {
  this.router.navigateByUrl('tabs/book/ph-booking/payments/stripe-pay');
}

}
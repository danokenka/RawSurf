import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Payer,  } from "../../../../../../interfaces/photographer";

@Component({
  selector: 'app-paypal-pay',
  templateUrl: './paypal-pay.page.html',
  styleUrls: ['./paypal-pay.page.scss'],
})
export class PaypalPayPage implements OnInit {

  paymentAmount: string = '110.00';
  currency: string = 'USD';
  currencyIcon: string = '$';
  id: string;
  create_time: string
  status: string;
  update_time: string;
  intent: string;
 payer: {
  email_address: string,
  payer_id: string,
  name: {
    given_name: string,
    surname: string
  }
  
 }
 pD: Payer;
 value;
 email_address;
 merchant_id;
 address_line_1;
 admin_area_1;
 address_line_2;
 admin_area_2;
//  purchase_units: [

//  ]



  ngOnInit() {
  }


  constructor(public router: Router, public alertCtrl: AlertController) {
    let _this = this;
    var value = 0;
    var email_address = '';
    var merchant_id = '';
    // address_line_1;;
    // admin_area_1;
    // address_line_2;
    // admin_area_2;
    setTimeout(() => {
      // Render the PayPal button into #paypal-button-container
      <any>window['paypal'].Buttons({

        // Set up the transaction
        createOrder: function (data, actions) {
          return actions.order.create({
            purchase_units: [{
              amount: {
                value: _this.paymentAmount
              }
            }]
          });
        },

        // Finalize the transaction
        onApprove: function (data, actions) {
          return actions.order.capture()
            .then(function (details) {
              // Show a success message to the buyer
              console.log(details);
              alert('Transaction completed by ' + details.payer.name.given_name + '!');
              console.log(details.payer.name.given_name);
              console.log(details.payer.email_address);
              if(details.purchase_units[0]) {
                console.log(details.purchase_units[0].amount.value);
                console.log(details.purchase_units[0].payee.email_address);
                console.log(details.purchase_units[0].payee.merchant_id);
                console.log(details.purchase_units[0].shipping.address.address_line_1);
                console.log(details.purchase_units[0].shipping.address.admin_area_1);
                console.log(details.purchase_units[0].shipping.address.admin_area_2);
                console.log(details.purchase_units[0].shipping.address.postal_code);
                value = details.purchase_units[0].amount.value;
                _this.sendValue(value);
                email_address = details.purchase_units[0].payee.email_address;
                _this.sendEmail(email_address);
                console.log(email_address);
                _this.sendMerchId(merchant_id);
                console.log(merchant_id);
                _this.showPrompt(email_address, value);
              }
            
              // console.log(details.payer.payer_id);
              // console.log(details.payer.payer_id);
              // console.log(details.purchase_units[0].amount.currency_code);
              
              // console.log(details.payer.name.given_name);
              // console.log(details.payer.name.given_name);
              // console.log(details.payer.name.given_name);
              // let paySuccessPaypal = details;
              // this.pD = paySuccessPaypal;
              // console.log(JSON.stringify(this.pD));
              // this.payer.email_address;
              // console.log('pay accepted')
              // console.log(paySuccessPaypal)
              // console.log(JSON.stringify(paySuccessPaypal));
              // console.log(JSON.stringify(paySuccessPaypal.id));
              // console.log(JSON.stringify(paySuccessPaypal['id']));
              
            })
            .catch(err => {
              console.log(err);
            })
        }
      }).render('#paypal-button-container');
    }, 500)
  }


  
  sendValue(valueSending: number) {
this.value = valueSending;
console.log('value is ' + this.value)
}

sendEmail(valueSending: string) {
  this.email_address = valueSending;
  console.log('value is ' + this.email_address)
  }
  sendMerchId(valueSending: string) {
    this.merchant_id = valueSending;
    console.log('value is ' + this.merchant_id)
    }

// bookPaySuccess(payAceppted: any) {
// let paySuccessPaypal = payAceppted;
// console.log('pay accepted')
// console.log(payAceppted)
// console.log(JSON.stringify(payAceppted));
// }


async showPrompt(email: string, value: number) {  
  const prompt = await this.alertCtrl.create({  
    header: 'Payment Success', 
    message: 'Hello, '+ email + ' your payment has been successfully processed for the amount of $' + value + '',
    buttons: [  
      {  
        text: 'Cancel',  
        handler: data => {  
          console.log('Cancel clicked');  
        }  
      },  
      {  
        text: 'Yes',  
        handler: data => {  
          console.log('Saved clicked');  
          this.goHome();
        }  
      }  
    ]  
  });  
  await prompt.present();  
}  

goHome() {
  this.router.navigateByUrl('/tabs/book');
}


}

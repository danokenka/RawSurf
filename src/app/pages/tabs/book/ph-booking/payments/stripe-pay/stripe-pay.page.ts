import { Component, OnInit } from '@angular/core';
  // import { Stripe } from '@ionic-native/stripe/ngx';
 declare var Stripe;
import { HttpClient, HttpHeaders  } from "@angular/common/http";
import { AuthResponseData } from 'src/app/services/auth.service';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
// import { RequestOptions } from 'https';

// import { request } from 'http';
// import {loadStripe} from '@stripe/stripe-js';

@Component({
  selector: 'app-stripe-pay',
  templateUrl: './stripe-pay.page.html',
  styleUrls: ['./stripe-pay.page.scss'],
})
export class StripePayPage implements OnInit {
  paymentAmount = 110.00;
  currencyIcon = '$';
  currency = 'USD';
  stripe_key = 'pk_test_ACKmdOFOzhsbyBDFbdH6eWQD';
  // stripe = Stripe('pk_test_ACKmdOFOzhsbyBDFbdH6eWQD');
  card: any;
  cardDetails: any = {};
  paymentHandler:any = null;
  stripeTok;


  constructor(
    // public stripe: Stripe, 
    private http: HttpClient) {
  }

  ngOnInit() {
    // this.setupStripe();
    this.invokeStripe();
  }

  // payWithStripe() {
  //   // let stripe = Stripe('pk_test_ACKmdOFOzhsbyBDFbdH6eWQD');
  //   this.stripe.setPublishableKey(this.stripe_key);

  //   this.cardDetails = {
  //     number: '4242424242424242',
  //     expMonth: 12,
  //     expYear: 2025,
  //     cvc: '220'
  //   }
  //   this.stripe.createCardToken(this.cardDetails)
  //   .then(token => {
  //     console.log(token);
  //     this.createTheCharge(token.id);
  //   })
  //   .catch(error => console.error(error));
  // }

  // setupStripe() {
  //   // var Stripe;
  //   // let stripe = Stripe('pk_test_ACKmdOFOzhsbyBDFbdH6eWQD');
  //   let elements = this.stripe.elements();
  //   var style = {
  //     base: {
  //       color: '#32325d',
  //       lineHeight: '24px',
  //       fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
  //       fontSmoothing: 'antialiased',
  //       fontSize: '16px',
  //       '::placeholder': {
  //         color: '#aab7c4'
  //       }
  //     },
  //     invalid: {
  //       color: '#fa755a',
  //       iconColor: '#fa755a'
  //     }
  //   };

  //   this.card = elements.create('card', { style: style });
  //   console.log(this.card);
  //   this.card.mount('#card-element');

  //   this.card.addEventListener('change', event => {
  //     var displayError = document.getElementById('card-errors');
  //     if (event.error) {
  //       displayError.textContent = event.error.message;
  //     } else {
  //       displayError.textContent = '';
  //     }
  //   });

  //   var form = document.getElementById('payment-form');
  //   form.addEventListener('submit', event => {
  //     event.preventDefault();
  //     console.log(event)

  //     // this.stripe.createCardToken(this.card)
  //     // .then(token => {
  //     //   console.log(token);
  //     //   this.createTheCharge(token.id);
  //     // })
  //     // .catch(error => console.error(error));

  //     this.stripe.createSource(this.card).then(result => {
  //       if (result.error) {
  //         var errorElement = document.getElementById('card-errors');
  //         errorElement.textContent = result.error.message;
  //       } else {
  //         // const token = result.stripeToken;
  //         console.log(result);
  //         this.makePayment(result.id);
  //       }
  //     });
  //   });
  // }


// makePayment(result: any) {
//   console.log(result);
//   // const stripe = require('stripe')('sk_test_8E0up7Ww9NYXs3ZcJNPjESD0');

//   // Token is created using Stripe Checkout or Elements!
//   // Get the payment token ID submitted by the form:
//   // const token = result.stripeToken; // Using Express
//   // this.createTheCharge();

// }


// sendPostRequest() {
 
//     let token = this.stripeTok;
//     console.log(this.stripeTok);
//     console.log(this.stripeTok);


//   let YourHeaders = { "Accept": 'application/json', 'Authorization': token, 'Content-Type': 'application/json'};
  // var headers = new Headers();
  // headers.append("Accept", 'application/json');
  // headers.append('Content-Type', 'application/json' );
  // const requestOptions = new RequestOptions({ headers: headers });

//   let postData = {
//           "amount":110.00,
//           "currency": "USD",
//           "tel": "0000252525"
//   }

//   this.http.post("https://api.stripe.com/v1/payment_intents", postData, {headers: YourHeaders})
//     .subscribe(data => {
//       console.log(data['_body']);
//      }, error => {
//       console.log(error);
//     });
// }

// async createTheCharge(token) {
//   // const stripe = require('stripe')('sk_test_8E0up7Ww9NYXs3ZcJNPjESD0');
//   // const charge = this.stripe.({
//   //   amount: 999,
//   //   currency: 'usd',
//   //   description: 'Example charge',
//   //   source: token,
//   // });
// }



makePayment(amount) {
 var theToken;
 this.stripeTok
  const paymentHandler = (<any>window).StripeCheckout.configure({
    key: 'pk_test_ACKmdOFOzhsbyBDFbdH6eWQD',
    locale: 'auto',
    token: function (stripeToken: any) {``
      // theToken = stripeToken;
      // this.stripeTok = stripeToken;
      console.log(stripeToken)
      alert('Stripe token generated!');
    }
  
  });

  paymentHandler.open({
    name: 'Raw Surf',
    description: 'Test Cards Only https://stripe.com/docs/testing',
    amount: amount * 100
  });

 
  // this.stripeTok = theToken;
  // console.log(this.stripeTok);
  // console.log(theToken);

}

invokeStripe() {
  var theToken;
  if(!window.document.getElementById('stripe-script')) {
    const script = window.document.createElement("script");
    script.id = "stripe-script";
    script.type = "text/javascript";
    script.src = "https://checkout.stripe.com/checkout.js";
    script.onload = () => {
      this.paymentHandler = (<any>window).StripeCheckout.configure({
        key: 'pk_test_51H7bbSE2RcKvfXD4DZhu',
        locale: 'auto',
        token: function (stripeToken: any) {
          console.log(stripeToken)
          // theToken = stripeToken;
          alert('Payment has been successfull!');
        
        }
      });
    }
      
    window.document.body.appendChild(script);
  }
}

}

// setBookingData() {
  
// }

// getAuth() {
//   // https://api.stripe.com/v1/charges
// }
// paymentIntentTest() {
 

//   let url = 'https://api.stripe.com/v1/payment_intents';
//   let postData = {
//     "amount":110.00,
//     "currency": "usd",
// }
//   let YourHeaders = { 'Authorization': 'Bearer sk_test_8E0up7Ww9NYXs3ZcJNPjESD0', 'Content-Type':'application/x-www-form-urlencoded'};
//   this.http.post(url, postData, {headers: YourHeaders})
//     .subscribe(data => {
//     console.log(data)
//   },
//   (error) => {
//           console.log("Error" + error)
//   })

// //  var data: {};
// //       return this.http.post<>(
// //         `https://api.stripe.com/v1/payment_intents{
// //       }`, {email: email, password: password, returnSecureToken: true}, 
// //       ).pipe(tap(this.setBookingData.bind(this))
// //       );
    
     
// //       GET /v1/payment_intents HTTP/1.1
// //       Host: api.stripe.com
// //       Authorization: Bearer sk_test_8E0up7Ww9NYXs3ZcJNPjESD0
// //       Accept: application/json

//     }


    


    
// // curlExample() {

// //   curl https://api.stripe.com/v1/payment_intents \
// //   -u sk_test_8E0up7Ww9NYXs3ZcJNPjESD0: \
// //   -d amount=1000 \
// //   -d currency=usd \
// //   -d "payment_method_types[]"=card \
// //   -d receipt_email="jenny.rosen@example.com"



// // }



// }

// function sendPostRequest(stripeToken: any) {
//   throw new Error('Function not implemented.');
// }

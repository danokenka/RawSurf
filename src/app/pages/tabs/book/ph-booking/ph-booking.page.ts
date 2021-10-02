import { Component, Injectable, OnInit } from '@angular/core';
import {  FormGroup, FormControl, Validators, FormBuilder  } from '@angular/forms';
// import { EmailComposer } from '@ionic-native/email-composer';
import { AlertController, ModalController, NavController } from '@ionic/angular';
import { EmailService } from '../../../../services/email.service';
import { EmailComposer } from '@ionic-native/email-composer/ngx';
import photographerData from '../../../../data/Photographer-test-data.json';
//  import { PhotographerObject } from "/Users/dano/Hybrid Dev/IonicDev/RawSurf/src/app/interfaces/photographer";
 import { PhotographersArray, PhotographerObj } from "../../../../interfaces/photographer";
 import { Plugins } from '@capacitor/core';
import { Router } from '@angular/router';
import { EventModalPage } from './event-modal/event-modal.page';

 const { Browser } = Plugins;

 export enum RegionEnum {
  "CF" = "Central Florida",
  "NF" = "North Florida",
  "SF" = "South Florida",
  "WF" = "West Florida",
}

@Component({
  selector: 'app-ph-booking',
  templateUrl: './ph-booking.page.html',
  styleUrls: ['./ph-booking.page.scss'],
})
export class PhBookingPage{

  constructor(private emailComposer: EmailComposer, public alertCtrl: AlertController,  private router: Router, private modalCtrl: ModalController) { }


  ngOnInit() {
this.listPhotographers();

     }

   pO1: PhotographerObj;
  PhotographerObject = photographerData;
 //  photoPeeps = {};
   photoPeeps: any;
   regionPhotoPeeps: any;
   photoPeeple: any;
   selectedPhotographer: any;
  regions: any;
  cfRegion = "CF";
  regionFlag = false;
  showPhotographers = false;
  listPhotographersBool = false;
  singlePhotoBool  = false;
  photographerID: number;
  photographerName: string;
  photographerCompany: string;
  photographerPrice: number;
  photographerRegionCode: string;
  photographerRegion: string;
  photographerPhone: string;
  photographerUserName: string;
  photographerWebsite: string;
  photographerEmail: string;
  displayByRegion = false;
  selectedRegion: string;
  selectedRegionCode: string;
  photographerPic: string;

  // PhotographerPass : Array<{
  //   id: number,
  //   name: string,
  //   Company: string,
  //   Price: number,
  //   Image: string,
  //   RegionCode: string,
  //   Region: string,
  //   email: string,
  //   phone: string,
  //   username: string,
  //   website: string
  //                     }> = [];

 PhotographerPass = [
    0,
    "John Doe",
    "John Doe",
    0,
    "CF",
    "../../../../../assets/img/photographers/icon.png",
    "jDoe",
    "www.johndoe.surf",
    "johndoe234@gmail.com",
    "Florida"
  ]
  

  regionalArray : Array<{Company: string,
    id: string,
    Image: string,
    Price: number,
    Region: string,
    email: string,
    name: string,
    phone: string,
    username: string,
    website: string}> = [];
  restoreRegionalArray : Array<{Company: string,
      id: string,
      Image: string,
      Price: number,
      Region: string,
      email: string,
      name: string,
      phone: string,
      username: string,
      website: string}> = [];
    newRegArr: any;
    modelData: any;


  private showAlert(message: string) {
    this.alertCtrl
      .create({
        header: 'Authentication failed', 
        message: message, 
        buttons: ['Okay']
      }).then(alertEl => alertEl.present());
  }



  toggleSingleBool() {
this.singlePhotoBool = false;
this.showPhotographers = true;
  }
  
  async showPrompt(name: string, company: string) {  
    const prompt = await this.alertCtrl.create({  
      header: 'Book Photographer',  
      message: 'Are you sure you want to book ' + name + ' of ' + company,  
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
            this.bookPhotographer();
          }  
        }  
      ]  
    });  
    await prompt.present();  
  }  



  
  emailMe() {
    
  }

  sendEmail() {
    let email = {
      to: 'danokenka@gmail.com',
      cc: 'dano1626@hotmail.com',
      attachments: [
        // this.currentImage
      ],
      subject: 'Booking Surf Photography',
      body: 'I would like to book a session!',
      isHtml: true
    };
 
    this.emailComposer.open(email);
  }

  getObject() {
    console.log(this.PhotographerObject);
    console.log(this.PhotographerObject.Photographers);
    console.log(this.PhotographerObject.Photographers);
    this.photoPeeps = this.PhotographerObject.Photographers;
    console.log(this.photoPeeps[0]);
    console.log(this.photoPeeps[0].ID);
    console.log(this.photoPeeps[0].Company);
  //   console.log(this.photoPeeps[0]);
  //   console.log(this.photoPeeps[0]);
  //   console.log(this.photoPeeps[0]);
  }

  findPhotographers() {
    this.photoPeeps = this.PhotographerObject.Photographers;
    console.log(this.PhotographerObject.Photographers);

  }



  listPhotographers() {
    if (this.showPhotographers != true) {
      this.photoPeeps = this.PhotographerObject.Photographers;
      this.showPhotographers = true;
      // this.listPhotographersBool = true;
      console.log(this.showPhotographers);
    } else {
      this.showPhotographers = false;
      console.log(this.showPhotographers);
    } 
  }

    listSinglePhotographer(selectedID: any) {
    this.photoPeeple =  this.photoPeeps[selectedID];
      console.log(this.photoPeeps[selectedID]);
  }

  showPhotographer(selectedPhotographer: PhotographerObj) {
    if (this.showPhotographers != false && this.singlePhotoBool != true) {
      this.showPhotographers = false;
      this.singlePhotoBool = true;
 
      // this.PhotographerArray = selectedPhotographer;
      // this.photographerArr.id = selectedPhotographer.ID;
      // this.photographerArr.name = selectedPhotographer.name;
    }
    console.log(selectedPhotographer);
    console.log(selectedPhotographer['ID']);
    this.photographerID = selectedPhotographer['ID'];
    this.photographerName = selectedPhotographer['name'];
    this.photographerCompany = selectedPhotographer['Company'];
    this.photographerPrice = selectedPhotographer['Price'];
    this.photographerRegionCode = selectedPhotographer['Region'];
    this.photographerPic = selectedPhotographer['pic'];
    console.log(this.photographerRegionCode);
    // console.log(RegionEnum.CF);
    // console.log(RegionEnum["CF"]);
    this.photographerPhone = selectedPhotographer['phone'];
    this.photographerUserName = selectedPhotographer['username'];
    this.photographerWebsite = selectedPhotographer['website'];
    this.photographerEmail = selectedPhotographer['email'];
    this.photographerRegion = RegionEnum[this.photographerRegionCode];
    console.log(RegionEnum[this.photographerRegionCode]);
    // this.photographersArray.id = selectedPhotographer;
    // this.listSinglePhotographer(selectedPhotographer.id);
    // this.PhotographerObject.Photographers.photoPeeps[selectedID];



    if (this.photoPeeps.ID === 2) {
      console.log("this is bobby")
    }


  }

  listPhotographersRegionally() {
 this.regionalArray 
      this.showPhotographers = true;
      this.regionPhotoPeeps = this.PhotographerObject.Photographers;
      console.log( this.regionPhotoPeeps);
      // this.listPhotographers();
  }



  unListPhotographers() {
    this.showPhotographers = false;
  }

  listRegions() {
    if (this.regionFlag != true) {
      this.regionFlag = true;
      this.regions = this.PhotographerObject.Regions;

    } else {
      this.regionFlag = false;
    }
   
    console.log(this.PhotographerObject.Regions);
    console.log(this.PhotographerObject);
  }

  navigateToModal() {
    // this.router.navigateByUrl('/tabs/book/ph-booking/create-booking');
    this.openIonModal();
  }




  async openIonModal() {
    const modal = await this.modalCtrl.create({
      component: EventModalPage,
      componentProps: {
        pA: this.pO1
      }
    });
  
    modal.onDidDismiss().then((modelData) => {
      if (modelData !== null) {
        this.modelData = modelData.data;
        console.log('Modal Data : ' + modelData.data);
      }
    });
  
    return await modal.present();
  }





  bookPhotographer() {
    // this.router.navigateByUrl('/tabs/book/ph-booking/create-booking');
    var PhotographerPass2 = [
      this.photographerID, 
      this.photographerName, 
      this.photographerCompany,  
      this.photographerPrice, 
      this.photographerRegionCode,  
      this.photographerPic, 
      this.photographerUserName,
      this.photographerWebsite,
      this.photographerEmail,
      this.photographerRegion,
    ]
    console.log(this.PhotographerPass);

    this.PhotographerPass = [
      this.photographerID, 
      this.photographerName, 
      this.photographerCompany,  
      this.photographerPrice, 
      this.photographerRegionCode,  
      this.photographerPic, 
      this.photographerUserName,
      this.photographerWebsite,
      this.photographerEmail,
      this.photographerRegion,
    ]
    console.log(this.PhotographerPass);
    console.log(this.photographerID);
    var pO: PhotographerObj;
    pO = {
      id: this.photographerID,
      name: this.photographerName, 
      Company: this.photographerCompany,  
      Price: this.photographerPrice, 
      Image: this.photographerPic, 
      RegionCode: this.photographerRegionCode, 
      Region: this.photographerRegion, 
      email:  this.photographerEmail,
      phone: this.photographerPhone,
      username: this.photographerUserName,
      website: this.photographerWebsite,

    }
    console.log(pO);
  //   pO.id = this.photographerID;
  //   pO.name = this.photographerName;
  //   pO.Company = this.photographerCompany ;
  //   pO.Price = this.photographerPrice;
  //   pO.RegionCode = this.photographerRegionCode;
  //   pO.Image = this.photographerPic;
  //   pO.username = this.photographerUserName;
  //  pO.website = this.photographerWebsite;
  //   pO.email = this.photographerEmail;
  //   pO.Region =  this.photographerRegion;
    console.log(pO);
    this.pO1 = pO;
    // this.PhotographerPass.push( );
    console.log("bookPhotographer was clicked");
    this.regionFlag = false;
    this.showPhotographers = false;
    this.singlePhotoBool = false;
    this.navigateToModal();




    // this.photographerID = selectedPhotographer['ID'];
    // this.photographerName = selectedPhotographer['name'];
    // this.photographerCompany = selectedPhotographer['Company'];
    // this.photographerPrice = selectedPhotographer['Price'];
    // this.photographerRegionCode = selectedPhotographer['Region'];
    // this.photographerPic = selectedPhotographer['pic'];
    // console.log(this.photographerRegionCode);
    // // console.log(RegionEnum.CF);
    // // console.log(RegionEnum["CF"]);
    // this.photographerPhone = selectedPhotographer['phone'];
    // this.photographerUserName = selectedPhotographer['username'];
    // this.photographerWebsite = selectedPhotographer['website'];
    // this.photographerEmail = selectedPhotographer['email'];
    // this.photographerRegion = RegionEnum[this.photographerRegionCode];
    // console.log(RegionEnum[this.photographerRegionCode]);





  }

  removeItem(i: string) {
    this.regionPhotoPeeps.pop(i, 1);
  }

  showPhotographersInRegion(regionId: string) {
    // console.log(regionId);
   this.selectedRegionCode = regionId;
   this.regionPhotoPeeps = this.PhotographerObject.Photographers;
   console.log(this.selectedRegionCode);
   console.log(this.regionPhotoPeeps);
   console.log(this.regionPhotoPeeps.length);

   let arrLength = this.regionPhotoPeeps.length - 1;
   console.log(arrLength);

   for (var index in this.regionPhotoPeeps) {
    //  if (index < this.regionPhotoPeeps.length -1) {

  
    console.log(index); // prints indexes: 0, 1, 2, 3
    console.log(this.regionPhotoPeeps[index]);
    console.log(this.regionPhotoPeeps[index].Region);
      if (this.regionPhotoPeeps[index].Region === this.selectedRegionCode) {
        let myVar = this.regionPhotoPeeps[index];
        this.newRegionalArray(myVar);
        console.log(index);
        // this.removeItem(index);
        console.log(this.regionPhotoPeeps[index]); // prints elements: 10, 20, 30, 40
      }
      
  }

// }


  console.log(this.regionPhotoPeeps);
 
  }

  displayPhotographerInRegion() {

    this.newRegArr = this.regionalArray 
  }


  newRegionalArray(regArray: any) {
    this.displayByRegion = true;
    this.regionFlag = false;
    this.regionalArray.push(regArray);
    console.log(regArray);
    console.log(this.regionalArray);
    this.displayPhotographerInRegion();

  }

  removeRegions() {
    this.displayByRegion = false;
    this.newRegArr = this.restoreRegionalArray;
    console.log( this.regionalArray);
    console.log( this.restoreRegionalArray);
  }



  async openWebsite(websiteUrl: string) {
  
    // On iOS, for example, open the URL in SFSafariViewController (the in-app browser)
    await Browser.open({ url: websiteUrl });
  }


  async openBrowserInsta() {
  
    // On iOS, for example, open the URL in SFSafariViewController (the in-app browser)
    await Browser.open({ url: "https://www.instagram.com/raw.surf" });
  }
  async openFB() {
  
    // On iOS, for example, open the URL in SFSafariViewController (the in-app browser)
    await Browser.open({ url: "https://www.facebook.com/rawsurfingadventures/" });
  }
  async openInsta() {
  
    // On iOS, for example, open the URL in SFSafariViewController (the in-app browser)
    await Browser.open({ url: "https://www.instagram.com/raw.surf" });
  }
  async openTwit() {
  
    // On iOS, for example, open the URL in SFSafariViewController (the in-app browser)
    await Browser.open({ url: "https://twitter.com/rawsurfingadv" });
  }

  async openYoutu() {
  
    // On iOS, for example, open the URL in SFSafariViewController (the in-app browser)
    await Browser.open({ url: "https://www.youtube.com/c/Rawsurfingadventures" });
  }
  async venmo() {
  
    // On iOS, for example, open the URL in SFSafariViewController (the in-app browser)
    await Browser.open({ url: "https://venmo.com/RawSurf" });
  }


   socialMedia(type) {
    switch (type) {
      case 'FACEBOOK': {
        
        this.openFB();
        break;
      }
      case 'INSTAGRAM': {
        this.openInsta();
        break;
      }
      case 'TWITTER': {
        this.openTwit();
        break;
      }
      case 'YOUTUBE': {
        this.openYoutu();
        break;
      }
      case 'VENMO': {
        this.venmo();
        break;
      }
    }
  }



}

//    /**
//     * @public
//     * Property to assign a FormGroup object to
//     */
//     public form  : FormGroup;




//     /**
//      * @private
//      * Property to assign an image file reference to
//      */
//     private _attachment : any;
 
 
 
//     constructor(public navCtrl 		: NavController,
//                 private _ALERT       : AlertController,
//                 private _FORM	    : FormBuilder,
//               private _EMAIL       : EmailService) 
//     {
//        // Create a FormGroup object to implement validation 
//        // on the template fields
//        // VERY basic validation as you can see - I.e. NO empty fields!
//        this.form = this._FORM.group({
//           "to"            : ["", Validators.required],
//           "cc"            : ["", Validators.required],
//           "bcc"           : ["", Validators.required],
//           "subject"       : ["", Validators.required],
//           "message"       : ["", Validators.required]
//        });
//     }
 
 
 
 
//     /**
//      *
//      * @public
//      * @method retrieveAttachment
//      * @return {none}
//      */
//     retrieveAttachment() : void
//     {
//       //  this._IMAGE.selectPhotograph()
//       //  .then((attachment : any) => 
//       //  {
//       //     // Assign retrieved image to private property
//       //     // which we'll subsequently access within the 
//       //     // sendMessage method
//       //     this._attachment = attachment;
//       //  });
//     }
 
 
 
 
//     /**
//      *
//      * @public
//      * @method displayMessage
//      * @param title    	{string}      Heading for the alert window
//      * @param subTitle   {string}      Message for the alert window
//      * @return {none}
//      */
//     displayMessage(title : string, subTitle : string) : void
//     {
//        let alert : any 		=  this._ALERT.create({
//          header : title,
//           subHeader 	: subTitle,
//           buttons    : ['Got it']
//        });
//        alert.present();
//     }
 
 
 
 
//     /**
//      *
//      * @public
//      * @method sendMessage
//      * @return {none}
//      */
//     sendMessage() : void
//     {
//        // Retrieve the validated form fields
//        let to 		: string		= this.form.controls["to"].value,
//            cc 		: string		= this.form.controls["cc"].value,
//            bcc 		: string		= this.form.controls["cc"].value,          
//            subject 	: string		= this.form.controls["subject"].value,    
//            message 	: string		= this.form.controls["message"].value;
 
//        // Has the user selected an attachment?
//        if(this._attachment.length > 1)
//        {
//           // If so call the sendEmail method of the EmailProvider service, pass in
//           // the retrieved form data and watch the magic happen! :)
//           this._EMAIL.sendEmail(to, cc, bcc, this._attachment, subject, message);
//        }
//        else 
//        {
//           // Inform the user that they need to add an attachment
//           this.displayMessage('Error', 'You need to select an attachment');
//        }
//     }
 
//  }

import { Component, OnInit } from '@angular/core';
import { Photographer } from '../book-photo/photographer.model';
import { BookPhotoService } from 'src/app/pages/book-photo/book-photo.service';
import { ModalController, NavController,   ActionSheetController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { CreateBookingComponent } from '../bookings/create-booking/create-booking.component';

@Component({
  selector: 'app-hire-photographer',
  templateUrl: './hire-photographer.page.html',
  styleUrls: ['./hire-photographer.page.scss'],
})
export class HirePhotographerPage implements OnInit {
photographer: Photographer;


  constructor (private navCtrl: NavController,
  private route: ActivatedRoute,
  private photographerService: BookPhotoService,
  private modalCtrl: ModalController,
  private actionSheetCtrl: ActionSheetController) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      if (!paramMap.has('photographerId')) {
        this.navCtrl.navigateBack('/book-photo');
        return;
      }
      this.photographer = this.photographerService.getPhotographer(paramMap.get('photographerId'));
    });
  }
  onCancel() {
    this.modalCtrl.dismiss(null, 'cancel');
  }
  onBookPhotographer() {
    this.actionSheetCtrl
    .create({
      header: 'Choose an Action',
      buttons: [
        {
          text: 'Select Date',
          handler: () => {
            this.openBookingModal('select');
          }
        },
        {
          text: 'Random Date',
          handler: () => {
            this.openBookingModal('random');
          }
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    })
    .then(actionSheetEl => {
      actionSheetEl.present();
    });
    // // this.modalCtrl.dismiss({ message: 'This is a dummy message!' }, 'confirm');
    // this.modalCtrl
    // .create({
    //   component: CreateBookingComponent,
    //   componentProps: { selectedPlace: this.photographer }
    // })
    // .then(modalEl => {
    //   modalEl.present();
    //   return modalEl.onDidDismiss();
    // })
    // .then(resultData => {
    //   console.log(resultData.data, resultData.role);
    //   if (resultData.role === 'confirm') {
    //     console.log('BOOKED!');
    //   }
    // });

  }

  openBookingModal(mode: 'select' | 'random') {
    console.log(mode);
    this.modalCtrl
      .create({
        component: CreateBookingComponent,
        componentProps: { selectedPlace: this.photographer, selectedMode: mode }
      })
      .then(modalEl => {
        modalEl.present();
        return modalEl.onDidDismiss();
      })
      .then(resultData => {
        console.log(resultData.data, resultData.role);
        if (resultData.role === 'confirm') {
          console.log('BOOKED!');
        }
      });
  }
}

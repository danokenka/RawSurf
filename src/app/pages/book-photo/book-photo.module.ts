import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BookPhotoPageRoutingModule } from './book-photo-routing.module';

import { BookPhotoPage } from './book-photo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BookPhotoPageRoutingModule
  ],
  declarations: [BookPhotoPage]
})
export class BookPhotoPageModule {}

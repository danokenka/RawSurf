import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BookPhotographerPageRoutingModule } from './book-photographer-routing.module';

import { BookPhotographerPage } from './book-photographer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BookPhotographerPageRoutingModule
  ],
  declarations: [BookPhotographerPage]
})
export class BookPhotographerPageModule {}

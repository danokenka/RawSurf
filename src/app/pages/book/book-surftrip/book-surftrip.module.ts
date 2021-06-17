import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BookSurftripPageRoutingModule } from './book-surftrip-routing.module';

import { BookSurftripPage } from './book-surftrip.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BookSurftripPageRoutingModule
  ],
  declarations: [BookSurftripPage]
})
export class BookSurftripPageModule {}

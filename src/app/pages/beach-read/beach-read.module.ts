import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BeachReadPageRoutingModule } from './beach-read-routing.module';

import { BeachReadPage } from './beach-read.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BeachReadPageRoutingModule
  ],
  declarations: [BeachReadPage]
})
export class BeachReadPageModule {}

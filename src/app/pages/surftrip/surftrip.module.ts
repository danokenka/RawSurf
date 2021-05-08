import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SurftripPageRoutingModule } from './surftrip-routing.module';

import { SurftripPage } from './surftrip.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SurftripPageRoutingModule
  ],
  declarations: [SurftripPage]
})
export class SurftripPageModule {}

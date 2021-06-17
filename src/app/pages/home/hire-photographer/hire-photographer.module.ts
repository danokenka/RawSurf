import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HirePhotographerPageRoutingModule } from './hire-photographer-routing.module';

import { HirePhotographerPage } from './hire-photographer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HirePhotographerPageRoutingModule
  ],
  declarations: [HirePhotographerPage]
})
export class HirePhotographerPageModule {}

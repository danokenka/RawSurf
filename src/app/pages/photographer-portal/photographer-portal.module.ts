import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PhotographerPortalPageRoutingModule } from './photographer-portal-routing.module';

import { PhotographerPortalPage } from './photographer-portal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PhotographerPortalPageRoutingModule
  ],
  declarations: [PhotographerPortalPage]
})
export class PhotographerPortalPageModule {}

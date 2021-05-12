import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhotographerPortalPage } from './photographer-portal.page';

const routes: Routes = [
  {
    path: '',
    component: PhotographerPortalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PhotographerPortalPageRoutingModule {}

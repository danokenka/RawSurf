import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HirePhotographerPage } from './hire-photographer.page';

const routes: Routes = [
  {
    path: '',
    component: HirePhotographerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HirePhotographerPageRoutingModule {}

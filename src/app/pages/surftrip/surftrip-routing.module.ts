import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SurftripPage } from './surftrip.page';

const routes: Routes = [
  {
    path: '',
    component: SurftripPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SurftripPageRoutingModule {}

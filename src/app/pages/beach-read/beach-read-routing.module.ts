import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BeachReadPage } from './beach-read.page';

const routes: Routes = [
  {
    path: '',
    component: BeachReadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BeachReadPageRoutingModule {}

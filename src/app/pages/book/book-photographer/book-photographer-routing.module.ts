import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookPhotographerPage } from './book-photographer.page';

const routes: Routes = [
  {
    path: '',
    component: BookPhotographerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookPhotographerPageRoutingModule {}

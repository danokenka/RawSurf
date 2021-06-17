import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookSurftripPage } from './book-surftrip.page';

const routes: Routes = [
  {
    path: '',
    component: BookSurftripPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookSurftripPageRoutingModule {}

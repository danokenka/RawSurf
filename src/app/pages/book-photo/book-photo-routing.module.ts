import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookPhotoPage } from './book-photo.page';

const routes: Routes = [
  {
    path: '',
    component: BookPhotoPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookPhotoPageRoutingModule {}

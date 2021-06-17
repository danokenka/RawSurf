import { Component, OnInit } from '@angular/core';
import { BookPhotoService } from './book-photo.service';
import { Photographer } from './photographer.model';
import { SegmentChangeEventDetail } from '@ionic/core';

@Component({
  selector: 'app-book-photo',
  templateUrl: './book-photo.page.html',
  styleUrls: ['./book-photo.page.scss'],
})
export class BookPhotoPage implements OnInit {
  loadedPhotographers: Photographer[];
  listedLoadedPhotographers: Photographer[];

  constructor(private photographerServie: BookPhotoService) { }

  ngOnInit() {
    this.loadedPhotographers = this.photographerServie.photographers;
    this.listedLoadedPhotographers = this.loadedPhotographers.slice(1);
  }
  onFilterUpdate(event: CustomEvent<SegmentChangeEventDetail>) {
    console.log(event.detail);
  }
}

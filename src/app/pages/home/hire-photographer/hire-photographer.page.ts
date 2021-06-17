import { Component, OnInit } from '@angular/core';
import { Photographer } from 'src/app/models/photographer.model';
import { PhotographersService } from 'src/app/services/photographers.service';

@Component({
  selector: 'app-hire-photographer',
  templateUrl: './hire-photographer.page.html',
  styleUrls: ['./hire-photographer.page.scss'],
})
export class HirePhotographerPage implements OnInit {
  loadedPhotographers: Photographer[];
  constructor(private photographerService: PhotographersService, private photographer: Photographer) { }

  ngOnInit() {
    this.loadedPhotographers = this.photographerService.photographers;
  }

}

import { TestBed } from '@angular/core/testing';

import { PhotographersService } from './photographers.service';

describe('PhotographersService', () => {
  let service: PhotographersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhotographersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

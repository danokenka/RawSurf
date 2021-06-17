import { TestBed } from '@angular/core/testing';

import { BookPhotoService } from './book-photo.service';

describe('BookPhotoService', () => {
  let service: BookPhotoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookPhotoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

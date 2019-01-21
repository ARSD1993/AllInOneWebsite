import { TestBed } from '@angular/core/testing';

import { NewepisodeService } from './newepisode.service';

describe('NewepisodeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NewepisodeService = TestBed.get(NewepisodeService);
    expect(service).toBeTruthy();
  });
});

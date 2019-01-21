import { TestBed } from '@angular/core/testing';

import { GetscoreService } from './getscore.service';

describe('GetscoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetscoreService = TestBed.get(GetscoreService);
    expect(service).toBeTruthy();
  });
});

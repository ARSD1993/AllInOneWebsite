import { TestBed } from '@angular/core/testing';

import { GetarticlesService } from './getarticles.service';

describe('GetarticlesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetarticlesService = TestBed.get(GetarticlesService);
    expect(service).toBeTruthy();
  });
});

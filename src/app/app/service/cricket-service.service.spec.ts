import { TestBed } from '@angular/core/testing';

import { CricketServiceService } from './cricket-service.service';

describe('CricketServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CricketServiceService = TestBed.get(CricketServiceService);
    expect(service).toBeTruthy();
  });
});

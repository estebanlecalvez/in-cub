import { TestBed } from '@angular/core/testing';

import { StartupsServiceService } from './startups-service.service';

describe('StartupsServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StartupsServiceService = TestBed.get(StartupsServiceService);
    expect(service).toBeTruthy();
  });
});

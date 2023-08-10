import { TestBed } from '@angular/core/testing';

import { BabyServiceService } from './baby-service.service';

describe('BabyServiceService', () => {
  let service: BabyServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BabyServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

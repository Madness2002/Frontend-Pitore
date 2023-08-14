import { TestBed } from '@angular/core/testing';

import { IteracionService } from './iteracion.service';

describe('IteracionService', () => {
  let service: IteracionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IteracionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

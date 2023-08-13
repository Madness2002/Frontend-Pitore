import { TestBed } from '@angular/core/testing';

import { GrupoEvaluacionService } from './grupo-evaluacion.service';

describe('GrupoEvaluacionService', () => {
  let service: GrupoEvaluacionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GrupoEvaluacionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

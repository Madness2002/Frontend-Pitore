import { TestBed } from '@angular/core/testing';

import { DetallePreguntaService } from './detalle-pregunta.service';

describe('DetallePreguntaService', () => {
  let service: DetallePreguntaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetallePreguntaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

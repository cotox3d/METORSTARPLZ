import { TestBed } from '@angular/core/testing';

import { EncuestaalumnoService } from './encuestaalumno.service';

describe('EncuestaalumnoService', () => {
  let service: EncuestaalumnoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EncuestaalumnoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { vacantesService } from './vacante.service';

describe('vacantesService', () => {
  let service: vacantesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(vacantesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

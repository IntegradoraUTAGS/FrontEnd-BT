import { TestBed } from '@angular/core/testing';

import { satisfaccionService } from './satisfaccion.service';

describe('satisfaccionService', () => {
  let service: satisfaccionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(satisfaccionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
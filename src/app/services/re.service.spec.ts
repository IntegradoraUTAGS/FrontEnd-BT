import { TestBed } from '@angular/core/testing';

import { reService } from './re.service';

describe('reService', () => {
  let service: reService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(reService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
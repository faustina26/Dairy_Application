import { TestBed } from '@angular/core/testing';

import { HeloService } from './helo.service';

describe('HeloService', () => {
  let service: HeloService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeloService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

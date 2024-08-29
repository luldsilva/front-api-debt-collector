import { TestBed } from '@angular/core/testing';

import { DebitServiceService } from './debit-service.service';

describe('DebitServiceService', () => {
  let service: DebitServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DebitServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { DatafetchServiceService } from './datafetch-service.service';

describe('DatafetchServiceService', () => {
  let service: DatafetchServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatafetchServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

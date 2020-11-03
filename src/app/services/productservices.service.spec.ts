import { TestBed } from '@angular/core/testing';

import { ProductservicesService } from './productservices.service';

describe('ProductservicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductservicesService = TestBed.get(ProductservicesService);
    expect(service).toBeTruthy();
  });
});

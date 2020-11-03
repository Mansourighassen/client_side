import { TestBed } from '@angular/core/testing';

import { OrderservicesService } from './orderservices.service';

describe('OrderservicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OrderservicesService = TestBed.get(OrderservicesService);
    expect(service).toBeTruthy();
  });
});

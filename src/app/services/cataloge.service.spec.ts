import { TestBed } from '@angular/core/testing';

import { CatalogeService } from './cataloge.service';

describe('CatalogeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CatalogeService = TestBed.get(CatalogeService);
    expect(service).toBeTruthy();
  });
});

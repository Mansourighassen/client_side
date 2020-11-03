import { TestBed } from '@angular/core/testing';

import { ProcessHTTPMsgServiceService } from './process-httpmsg-service.service';

describe('ProcessHTTPMsgServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProcessHTTPMsgServiceService = TestBed.get(ProcessHTTPMsgServiceService);
    expect(service).toBeTruthy();
  });
});

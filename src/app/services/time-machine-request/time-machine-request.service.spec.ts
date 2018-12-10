import { TestBed, inject } from '@angular/core/testing';

import { TimeMachineRequestService } from './time-machine-request.service';

describe('TimeMachineRequestService', () => {
  let service: TimeMachineRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TimeMachineRequestService]
    });
    service = new TimeMachineRequestService(null);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('verify functionality of forecastRequest', () => {
    service.timeMachineRequest(12, 1234, 24);
    expect(service.httpGet).toHaveBeenCalled();
  });
});

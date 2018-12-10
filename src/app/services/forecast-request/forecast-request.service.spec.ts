import { TestBed } from '@angular/core/testing';
import { ForecastRequestService } from './forecast-request.service';

describe('ForecastRequestService', () => {
  let service: ForecastRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ForecastRequestService]
    });

    service = new ForecastRequestService(null);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('verify functionality of forecastRequest', () => {
    service.forecastRequest(12, 1234);
    expect(service.httpGet).toHaveBeenCalled();
  });
});

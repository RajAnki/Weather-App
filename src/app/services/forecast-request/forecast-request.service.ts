import { Injectable } from '@angular/core';
import { BaseService } from '../base-service/base.service';
import { HttpClient } from '@angular/common/http';
import { AppConstants} from '../../generic/app-constant';
import { Observable } from 'rxjs/Observable';

/**
 *  Provider for Fore cast API
 */
@Injectable()
export class ForecastRequestService extends BaseService {

  constructor(protected http: HttpClient) {
    super(http);
  }


  /**
   *  Method for Fore cast API
   *  @param { number } latitude of location
   *  @param { number } longitude of location
   *  @return { http } httpGet of Fore cast API
   */
  forecastRequest(latitude, longitude): Observable<any[]> {
    const url = AppConstants.forecastURL  + AppConstants.apiKey + '/' + latitude + ',' + longitude + '?units=si';
    return this.httpGet(url);
  }

}

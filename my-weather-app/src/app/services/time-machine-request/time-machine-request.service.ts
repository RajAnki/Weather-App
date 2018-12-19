import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {AppConstants} from '../../generic/app-constant';
import {BaseService} from '../base-service/base.service';

/**
 *  Provider for Time Machine API for getting weather fore cast for specified time
 */
@Injectable()
export class TimeMachineRequestService extends BaseService {

  constructor(protected http: HttpClient) {
    super(http);
  }

  /**
   *  Method for Time Machine API which returns weather fore ast for specified time
   *  @param { number } latitude of location
   *  @param { number } longitude of location
   *  @param { number } time to get weather fore cast
   *  @return { http } httpGet of Time Machine API
   */
  timeMachineRequest(latitude, longitude, time): Observable<any[]> {
    const dateToday = new Date();
    dateToday.setHours(time, 0, 0);
    const unixTime = Math.floor(dateToday.getTime() / 1000);
    const url = AppConstants.timeMachineURL  + AppConstants.apiKey + '/' + latitude + ',' + longitude + ',' + unixTime  + '?units='
      + AppConstants.units;
    return this.httpGet(url);
  }
}

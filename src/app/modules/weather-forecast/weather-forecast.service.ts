import { Injectable } from '@angular/core';
import {Validators} from '@angular/forms';

@Injectable()
export class WeatherForecastService {

  constructor() { }

  /**
   *  Creates user Input Form
   *  @return {Form} userInputFormGroup
   */
  createUserInputForm(fb) {
    const userInputFormGroup = fb.group({
      'latitude': ['', [Validators.required, Validators.pattern('^[1-9]\\d*(\\.\\d+)?$')]],
      'longitude': ['', [Validators.required, Validators.pattern('^[1-9]\\d*(\\.\\d+)?$')]],
      'time': '',
      'timeSpecific': false
    });
    return userInputFormGroup;
  }
}

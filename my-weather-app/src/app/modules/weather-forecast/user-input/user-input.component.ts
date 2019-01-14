import { Component, OnInit } from '@angular/core';
import { WeatherForecastService } from '../weather-forecast.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import { ForecastRequestService } from '../../../services/forecast-request/forecast-request.service';
import { TimeMachineRequestService } from '../../../services/time-machine-request/time-machine-request.service';

/**
 * component to take user input for weather forecast
 */
@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html'
})
export class UserInputComponent implements OnInit {

  constructor(public weatherForecastService: WeatherForecastService,
              private fb: FormBuilder,
              public forecastRequestService: ForecastRequestService,
              public timeMachineRequestService: TimeMachineRequestService) { }

  public userInputForms: FormGroup;
  public forecastResponse = {};
  public weatherCurrently = {};
  public apiErrorFlag = false;
  /**
   * Array of objects for time drop-down
   */
  public timeList = [{'twentyFourHr': '0', 'twelveHr': '12AM'},
    {'twentyFourHr': '1', 'twelveHr': '1AM'},
    {'twentyFourHr': '2', 'twelveHr': '2AM'},
    {'twentyFourHr': '3', 'twelveHr': '3AM'},
    {'twentyFourHr': '4', 'twelveHr': '4AM'},
    {'twentyFourHr': '5', 'twelveHr': '5AM'},
    {'twentyFourHr': '6', 'twelveHr': '6AM'},
    {'twentyFourHr': '7', 'twelveHr': '7AM'},
    {'twentyFourHr': '8', 'twelveHr': '8AM'},
    {'twentyFourHr': '9', 'twelveHr': '9AM'},
    {'twentyFourHr': '10', 'twelveHr': '10AM'},
    {'twentyFourHr': '11', 'twelveHr': '11AM'},
    {'twentyFourHr': '12', 'twelveHr': '12PM'},
    {'twentyFourHr': '13', 'twelveHr': '1PM'},
    {'twentyFourHr': '14', 'twelveHr': '2PM'},
    {'twentyFourHr': '15', 'twelveHr': '3PM'},
    {'twentyFourHr': '16', 'twelveHr': '4PM'},
    {'twentyFourHr': '17', 'twelveHr': '5PM'},
    {'twentyFourHr': '18', 'twelveHr': '6PM'},
    {'twentyFourHr': '19', 'twelveHr': '7PM'},
    {'twentyFourHr': '20', 'twelveHr': '8PM'},
    {'twentyFourHr': '21', 'twelveHr': '9PM'},
    {'twentyFourHr': '22', 'twelveHr': '10PM'},
    {'twentyFourHr': '23', 'twelveHr': '11PM'}];

  /**
   * get user form on component initialization
   */
  ngOnInit() {
    this.userInputForms = this.weatherForecastService.createUserInputForm(this.fb);
    const currentHr = new Date().getHours();
    this.userInputForms.controls['time'].setValue(currentHr);
  }


  /**
   *  Method for calling Fore cast API
   *  @param { number } latitude of location
   *  @param { number } longitude of location
   */
  getForecast(latitude, longitude) {
    this.forecastRequestService.forecastRequest(latitude, longitude).subscribe(response => {
      this.forecastResponse = response;
      this.weatherCurrently = response['currently'];
      this.apiErrorFlag = false;
    }, error => this.handleError());
  }

  /**
   *  Method for calling Time Machine API
   *  @param { number } latitude of location
   *  @param { number } longitude of location
   */
  onTimeChange(latitude, longitude) {
    const timeSelected = this.userInputForms.controls['time'].value;
    this.timeMachineRequestService.timeMachineRequest(latitude, longitude, timeSelected).subscribe(response => {
      this.forecastResponse = response;
      this.weatherCurrently = response['currently'];
      this.apiErrorFlag = false;
    }, error => this.handleError());
  }

  /**
   *  Method for handling API Error
   */
  handleError() {
    this.apiErrorFlag = true;
  }

  /**
   *  Method called on Forecast Button click which determines the API call
   */
  getWeatherForecast() {
    const latitude = this.userInputForms.controls['latitude'].value;
    const longitude = this.userInputForms.controls['longitude'].value;
      if (this.userInputForms.controls['timeSpecific'].value) {
        this.onTimeChange(latitude, longitude);
      } else {
        this.getForecast(latitude, longitude);
      }
  }

}

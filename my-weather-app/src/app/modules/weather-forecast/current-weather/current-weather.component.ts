import {Component, Input, OnInit} from '@angular/core';
import { AppConstants } from '../../../generic/app-constant';

/**
 * component to show current weather forecast
 */
@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css']
})
export class CurrentWeatherComponent implements OnInit {

  @Input() currentWeatherObj: object;
  public tempUnit = AppConstants.tempUnit;
  public windUnit = AppConstants.windUnit;
  public visibilityUnit = AppConstants.visibilityUnit;
  public pressureUnit = AppConstants.pressureUnit;
  constructor() { }

  ngOnInit() {
  }


  /**
   *  Method to get the weather icon name
   *  @return { string } iconName
   *
   */
  getWeatherIcon() {
    const weatherIcon = this.currentWeatherObj['icon'];
    let iconName = '';
    switch (weatherIcon) {

      case 'clear-day':
        iconName = 'clear-day';
        break;

      case 'clear-night':
        iconName = 'clear-night';
        break;

      case 'rain':
        iconName = 'rain';
        break;

      case 'snow':
        iconName = 'snow';
        break;

      case 'sleet':
        iconName = 'sleet';
        break;

      case 'wind':
        iconName = 'wind';
        break;

      case 'fog':
        iconName = 'fog';
        break;

      case 'cloudy':
        iconName = 'cloudy';
        break;

      case 'partly-cloudy-day':
        iconName = 'cloudy-sun';
        break;

      case 'partly-cloudy-night':
        iconName = 'Cloud-Moon';
        break;

      case 'hail':
        iconName = 'Cloud-Hail';
        break;

      case 'thunderstorm':
        iconName = 'rain';
        break;

      default:
        iconName = 'cloudy';
      break;
    }

    return iconName;
  }

}

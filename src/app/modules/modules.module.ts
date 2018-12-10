import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiLibraryModule } from '../generic/ui-library/ui-library.module';
import { UserInputComponent } from './weather-forecast/user-input/user-input.component';
import { ForecastViewComponent } from './weather-forecast/forecast-view/forecast-view.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WeatherForecastComponent } from './weather-forecast/weather-forecast.component';
import { WeatherForecastService } from './weather-forecast/weather-forecast.service';
import { CurrentWeatherComponent } from './weather-forecast/current-weather/current-weather.component';

@NgModule({
  imports: [
    CommonModule,
    UiLibraryModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    UserInputComponent,
    ForecastViewComponent,
    WeatherForecastComponent,
    CurrentWeatherComponent
  ],
  providers: [
    WeatherForecastService,
    FormBuilder
  ]
})
export class ModulesModule { }

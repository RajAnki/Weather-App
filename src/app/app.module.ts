import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { UserInputComponent } from './modules/weather-forecast/user-input/user-input.component';
import { ForecastViewComponent } from './modules/weather-forecast/forecast-view/forecast-view.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CurrentWeatherComponent } from './modules/weather-forecast/current-weather/current-weather.component';
import { WeatherForecastComponent} from './modules/weather-forecast/weather-forecast.component';
import { WeatherForecastService } from './modules/weather-forecast/weather-forecast.service';
import { UiLibraryModule } from './generic/ui-library/ui-library.module';
import { ServicesModule } from './services/services.module';
import { ForecastRequestService } from './services/forecast-request/forecast-request.service';
import { TimeMachineRequestService } from './services/time-machine-request/time-machine-request.service';

@NgModule({
  declarations: [
    AppComponent,
    UserInputComponent,
    ForecastViewComponent,
    CurrentWeatherComponent,
    WeatherForecastComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    UiLibraryModule,
    ServicesModule
  ],
  providers: [
    WeatherForecastService,
    FormBuilder,
    ForecastRequestService,
    TimeMachineRequestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

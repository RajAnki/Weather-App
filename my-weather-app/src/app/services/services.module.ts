import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseService } from './base-service/base.service';
import { ForecastRequestService } from './forecast-request/forecast-request.service';
import { TimeMachineRequestService } from './time-machine-request/time-machine-request.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    ForecastRequestService,
    TimeMachineRequestService,
    BaseService
  ]
})
export class ServicesModule { }

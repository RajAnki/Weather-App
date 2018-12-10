import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UserInputComponent } from './user-input.component';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ForecastRequestService } from '../../../services/forecast-request/forecast-request.service';
import { TimeMachineRequestService } from '../../../services/time-machine-request/time-machine-request.service';

describe('UserInputComponent', () => {
  let component: UserInputComponent;
  let fixture: ComponentFixture<UserInputComponent>;
  let _fb: FormBuilder;
  let userInputForms: FormGroup;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserInputComponent);
    component = fixture.componentInstance;
    component.forecastRequestService = new ForecastRequestService(null);
    component.timeMachineRequestService = new TimeMachineRequestService(null);
    fixture.detectChanges();
    _fb = new FormBuilder();
    userInputForms = _fb.group({
      'latitude': ['', Validators.required],
      'longitude': ['', Validators.required],
      'time': ''
    });
    component.userInputForms = userInputForms;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('validate functionality of onTimeChange', () => {
    component.userInputForms.controls['time'].setValue(12);
    spyOn(component.timeMachineRequestService, 'timeMachineRequest').and.returnValue(null);
    component.onTimeChange(52.311420, 4.870087);
    expect(component.timeMachineRequestService.timeMachineRequest).toHaveBeenCalled();
  });

  it('validate functionality of getForecast', () => {
    component.userInputForms.controls['latitude'].setValue(52.311420);
    component.userInputForms.controls['longitude'].setValue(4.870087);
    spyOn(component.forecastRequestService, 'forecastRequest').and.returnValue(null);
    component.getForecast(52.311420, 4.870087);
    expect(component.forecastRequestService.forecastRequest).toHaveBeenCalled();
  });

  it('validate functionality of getWeatherForecast when time not specified', () => {
    component.userInputForms.controls['latitude'].setValue(52.311420);
    component.userInputForms.controls['longitude'].setValue(4.870087);
    component.getWeatherForecast();
    expect(component.getForecast).toHaveBeenCalled();
  });

  it('validate functionality of getWeatherForecast when time specified', () => {
    component.userInputForms.controls['latitude'].setValue(52.311420);
    component.userInputForms.controls['longitude'].setValue(4.870087);
    component.userInputForms.controls['timeSpecific'].setValue(true);
    component.getWeatherForecast();
    expect(component.onTimeChange).toHaveBeenCalled();
  });
});

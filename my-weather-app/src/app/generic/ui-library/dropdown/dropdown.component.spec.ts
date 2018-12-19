import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DropDownComponent } from './dropdown.component';

describe('DropDownComponentComponent', () => {
  let component: DropDownComponent;
  let fixture: ComponentFixture<DropDownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropDownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit ulOnOptionChange event from onFocusInput', () => {
    spyOn(component.ulOnOptionChange, 'emit');
    const event = jasmine.createSpyObj('event', [ 'stopPropagation' ]);
    component.optionChange(event);
    expect(component.ulOnOptionChange.emit).toHaveBeenCalled();
  });
});

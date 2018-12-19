import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {BaseHandler} from './base-handler';

fdescribe('BaseHandler', () => {
  let component: BaseHandler;
  let fixture: ComponentFixture<BaseHandler>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaseHandler ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(BaseHandler);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit ulfocus event from onFocusInput', () => {
    spyOn(component.ulFocus, 'emit');
    const event = jasmine.createSpyObj('event', [ 'stopPropagation' ]);
    component.onFocusInput(event);
    expect(component.ulFocus.emit).toHaveBeenCalled();
  });

  it('should emit ulblur event from onBlurInput', () => {
    spyOn(component.ulBlur, 'emit');
    const event = jasmine.createSpyObj('event', [ 'stopPropagation' ]);
    component.onBlurInput(event);
    expect(component.ulBlur.emit).toHaveBeenCalled();
  });

  it('should emit ulkeydown event from onKeyDownInput', () => {
    spyOn(component.ulKeyDown, 'emit');
    const event = jasmine.createSpyObj('event', [ 'stopPropagation' ]);
    component.onKeyDownInput(event);
    expect(component.ulKeyDown.emit).toHaveBeenCalled();
  });

  it('should emit ulkeypress event from onKeyPressInput', () => {
    spyOn(component.ulKeyPress, 'emit');
    const event = jasmine.createSpyObj('event', [ 'stopPropagation' ]);
    component.onKeyPressInput(event);
    expect(component.ulKeyPress.emit).toHaveBeenCalled();
  });

  it('should emit ulkeyup event from onKeyUpInput', () => {
    spyOn(component.ulKeyUp, 'emit');
    const event = jasmine.createSpyObj('event', [ 'stopPropagation' ]);
    component.onKeyUpInput(event);
    expect(component.ulKeyUp.emit).toHaveBeenCalled();
  });

  it('should emit ulchange event from onChangeInput', () => {
    spyOn(component.ulChange, 'emit');
    const event = jasmine.createSpyObj('event', [ 'stopPropagation' ]);
    component.onChangeInput(event);
    expect(component.ulChange.emit).toHaveBeenCalled();
  });

});

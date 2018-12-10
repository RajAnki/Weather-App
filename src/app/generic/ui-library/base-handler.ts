/**
 * Base Handler
 * This service has all the common attributes and events for all the UI elements in UI Library
 */

import {EventEmitter, Injectable, Input, Output} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Injectable()
export class BaseHandler {

  /**
   * common attributes to set up ui elements
   */
  @Input() ulFormGroupNameLib: FormGroup;
  @Input() ulFormControlName: string;
  @Input() ulLabel: string;
  @Input() ulErrorMessage: string;
  @Input() ulAriaLabel: string;
  @Input() ulId: string;
  @Input() ulName: string;
  @Input() ulAriaRequired: boolean;
  @Input() ulDisabled: boolean;
  /**
   * event emitted on ui elements change action
   */
  @Output() ulChange = new EventEmitter<any>();
  /**
   * event emitted on ui elements click action
   */
  @Output() ulClick = new EventEmitter<any>();
  /**
   * event emitted on ui elements focus
   */
  @Output() ulFocus = new EventEmitter<any>();
  /**
   * event emitted on ui elements blur
   */
  @Output() ulBlur = new EventEmitter<any>();
  /**
   * event emitted on ui elements key down action
   */
  @Output() ulKeyDown = new EventEmitter<any>();
  /**
   * event emitted on ui elements key press action
   */
  @Output() ulKeyPress = new EventEmitter<any>();
  /**
   * event emitted on ui elements key up action
   */
  @Output() ulKeyUp = new EventEmitter<any>();

constructor() {
}

  /**
   *  Method called on ui element focus and emits focus event
   *  @param { event } event focus
   */
  onFocusInput(event) {
    event.stopPropagation();
    this.ulFocus.emit(event);
  }

  /**
   *  Method called on ui element blur and emits blur event
   *  @param { event } event blur
   */
  onBlurInput(event) {
    event.stopPropagation();
    this.ulBlur.emit(event);
  }

  /**
   *  Method called on ui element change and emits change event
   *  @param { event } event change
   */
  onChangeInput(event) {
    event.stopPropagation();
    this.ulChange.emit(event);
  }

  /**
   *  Method called on ui element key down and emits key down event
   *  @param { event } event key down
   */
  onKeyDownInput(event) {
    event.stopPropagation();
    this.ulKeyDown.emit(event);
  }

  /**
   *  Method called on ui element key press and emits key press event
   *  @param { event } event key press
   */
  onKeyPressInput(event) {
    event.stopPropagation();
    this.ulKeyPress.emit(event);
  }

  /**
   *  Method called on ui element key up and emits key up event
   *  @param { event } event key up
   */
  onKeyUpInput(event) {
    event.stopPropagation();
    this.ulKeyUp.emit(event);
  }

  /**
   *  Method called on ui element click and emits click event
   *  @param { event } event click
   */
  onClickInput(event) {
    event.stopPropagation();
    this.ulClick.emit(event);
  }
}

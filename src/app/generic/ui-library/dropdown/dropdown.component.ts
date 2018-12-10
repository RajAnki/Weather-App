import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {BaseHandler} from '../base-handler';

/**
 * Generic Drop-down component with ADA implementation
 * which can be reused in all the modules
 */
@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropDownComponent extends BaseHandler implements OnInit {

  /**
   * event emitted on drop-down option change
   */
  @Output() ulOnOptionChange = new EventEmitter<any>();
  /**
   * attributes to set up drop-down
   */
  @Input() ulListItem: any;
  @Input() ulValue: any;
  @Input() ulDisplay: any;
  @Input() ulAriaOptionLabel: any;

  constructor() {
    super();
  }

  ngOnInit() {
  }

  /**
   *  Method called on drop-down option change and emits change event
   *  @param { event } event change
   */
  optionChange(event) {
    event.stopPropagation();
    this.ulOnOptionChange.emit(event);
  }

}

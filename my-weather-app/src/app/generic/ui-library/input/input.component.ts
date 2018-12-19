import {Component, Input, OnInit} from '@angular/core';
import {BaseHandler} from '../base-handler';

/**
 * Generic Input component with ADA implementation
 * which can be reused in all the modules
 */
@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent extends BaseHandler implements OnInit {

  public inputFocused: boolean;

  constructor() {
    super();
  }

  ngOnInit() {
  }

}

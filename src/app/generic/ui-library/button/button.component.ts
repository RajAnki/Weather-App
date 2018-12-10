import { Component, OnInit } from '@angular/core';
import {BaseHandler} from '../base-handler';
/**
 * Generic Button component with ADA implementation
 * which can be reused in all the modules
 */
@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent extends BaseHandler implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

}

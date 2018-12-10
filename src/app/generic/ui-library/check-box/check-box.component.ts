import { Component, OnInit } from '@angular/core';
import {BaseHandler} from '../base-handler';

/**
 * Generic checkbox component with ADA implementation
 * which can be reused in all the modules
 */
@Component({
  selector: 'app-check-box',
  templateUrl: './check-box.component.html',
  styleUrls: ['./check-box.component.css']
})
export class CheckBoxComponent extends BaseHandler implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

}

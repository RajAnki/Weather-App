import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from './input/input.component';
import { ButtonComponent } from './button/button.component';
import { DropDownComponent } from './dropdown/dropdown.component';
import { CheckBoxComponent } from './check-box/check-box.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    InputComponent,
    ButtonComponent,
    DropDownComponent,
    CheckBoxComponent
  ],
  exports: [
    InputComponent,
    ButtonComponent,
    DropDownComponent,
    CheckBoxComponent
  ]
})
export class UiLibraryModule { }

import { Component, forwardRef, Input } from '@angular/core';
import { IFormInput } from '../../common/interfaces/forms';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { BaseControl } from '../../common/classes/base-control';

@Component({
  selector: 'app-test-checkbox',
  templateUrl: './test-checkbox.component.html',
  styleUrls: ['./test-checkbox.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TestCheckboxComponent),
      multi: true
    }
  ]
})
export class TestCheckboxComponent extends BaseControl {
  @Input()
  elementFormData?: IFormInput;

  constructor() {
    super();
  }
}

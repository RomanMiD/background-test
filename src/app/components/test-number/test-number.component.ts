import { Component, forwardRef, Input } from '@angular/core';
import { IFormInput } from '../../common/interfaces/forms';
import { FormBuilder, NG_VALUE_ACCESSOR } from '@angular/forms';
import { BaseControl } from '../../common/classes/base-control';

@Component({
  selector: 'app-test-number',
  templateUrl: './test-number.component.html',
  styleUrls: ['./test-number.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TestNumberComponent),
      multi: true
    }
  ]
})
export class TestNumberComponent extends BaseControl{
  @Input()
  elementFormData?: IFormInput;
  constructor(private fb: FormBuilder) {
    super();
  }

}

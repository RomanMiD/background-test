import { Component, forwardRef, Input } from '@angular/core';
import { IChoice, IFormInput } from '../../common/interfaces/forms';
import { FormBuilder, NG_VALUE_ACCESSOR } from '@angular/forms';
import { BaseControl } from '../../common/classes/base-control';

@Component({
  selector: 'app-test-select',
  templateUrl: './test-select.component.html',
  styleUrls: ['./test-select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TestSelectComponent),
      multi: true
    }
  ]
})
export class TestSelectComponent extends BaseControl {
  @Input()
  elementFormData?: IFormInput;
  constructor(public fb: FormBuilder) {
    super();
  }
  get choices(): IChoice[]{
    return this.elementFormData?.choices || [];
  }

}


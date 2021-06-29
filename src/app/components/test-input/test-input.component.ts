import { Component, forwardRef, Input } from '@angular/core';
import { IFormInput } from '../../common/interfaces/forms';
import { FormBuilder, NG_VALUE_ACCESSOR } from '@angular/forms';
import { BaseControl } from '../../common/classes/base-control';

@Component({
  selector: 'app-test-input',
  templateUrl: './test-input.component.html',
  styleUrls: ['./test-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TestInputComponent),
      multi: true
    }
  ]
})
export class TestInputComponent extends BaseControl {
  @Input()
  elementFormData?: IFormInput;

  constructor(private fb: FormBuilder) {
    super();
  }

  get description(){
    if (this.elementFormData?.description){
      return this.elementFormData.description
    }
    return ;
  }

}

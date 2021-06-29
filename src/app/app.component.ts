import { Component, OnInit } from '@angular/core';
import { FormService } from './services/form.service';
import { Observable } from 'rxjs';
import { IFormConfig } from './common/interfaces/form-config.interface';
import { FormFieldType } from './common/enums/form.enum';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { tap } from 'rxjs/operators';
import { NgSelectConfig } from '@ng-select/ng-select';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  public formTypes = FormFieldType;
  public formsData$: Observable<IFormConfig> | undefined;
  public testForm: FormGroup;

  constructor(private formService: FormService,
              private fb: FormBuilder,
              private config: NgSelectConfig) {
    this.testForm = this.fb.group({});

  };

  ngOnInit() {
    this.getForms();
    console.log( this.testForm.controls);
  }


  getForms() {
    this.formsData$ = this.formService.getForm().pipe(tap((formsData: IFormConfig) => {

      formsData.testForm.forEach((formElement) => {
        const validators = [];
        // Add validator if field required
        if (formElement.required) {
          validators.push(Validators.required);
        }

        this.testForm.addControl(formElement.name, this.fb.control('', validators))
      })
    }))
  }

  onSubmit() {
    this.formService.sendForm(this.testForm.value);
    console.log(this.testForm.value);
  }


}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TestInputComponent } from './components/test-input/test-input.component';
import { TestSelectComponent } from './components/test-select/test-select.component';
import { TestNumberComponent } from './components/test-number/test-number.component';
import { TestCheckboxComponent } from './components/test-checkbox/test-checkbox.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgSelectModule } from '@ng-select/ng-select';
import { AddButtonComponent } from './components/add-button/add-button.component';
import { RemoveButtonComponent } from './components/remove-button/remove-button.component';

@NgModule({
  declarations: [
    AppComponent,
    TestInputComponent,
    TestSelectComponent,
    TestNumberComponent,
    TestCheckboxComponent,
    AddButtonComponent,
    RemoveButtonComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

import { AfterViewInit, Injectable } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { IFormInput } from '../interfaces/forms';

@Injectable()
export abstract class BaseControl implements ControlValueAccessor, AfterViewInit{
  abstract elementFormData?: IFormInput;
  value: any;
  disabled = false;
  public onChange = (value:any) => {
  };
  public onTouched = () => {
  };


  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  writeValue(obj: any): void {
    this.value = obj;
  }

  setDisabledState(isDisabled: boolean) {
    this.disabled = isDisabled;
  }

  updateValue(value: any) {
    this.value = value;
    this.onChange(value);
    this.onTouched();
  }
  ngAfterViewInit(): void {
    if(this.elementFormData?.canExpand){
      //to avoid ExpressionChangedAfterItHasBeenCheckedError
      setTimeout(()=>{
        this.value = [null];
      })

    }
  }
  addItem(){
    this.value.push(null);
  }
  removeItem(){
    this.value.pop();
  }

  multipleItemChange(value:any, index: number){
    this.value[index]= value;
    this.onChange(this.value);
    this.onTouched();
  }
  get isMultiple(): boolean{
    return !!this.elementFormData?.canExpand;
  }
  get valueCount(){
    if (Array.isArray(this.value)){
      return this.value.length;
    }
    return;
  }

}

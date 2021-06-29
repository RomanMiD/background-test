import { FormFieldType } from '../../enums/form.enum';

export interface IChoice {
  required?: boolean;
  value: string;
  label: string;
  checked?: boolean;
}

/**
 * base form element
 */
export interface IBaseFormElement {
  name: string
  type: FormFieldType;
  label: string;
  description?: string;
  choices?: IChoice[];
  required?: boolean;
  /**
   * required to be able to add multiply input
   *
   * works only with inputForm
   */
  canExpand?: boolean;
}

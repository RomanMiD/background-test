
import {
  IFormCheckbox,
  IFormInput,
  IFormNumber,
  IFormSelect
} from './forms';
/**
 * Form Config
 */
export interface IFormConfig {
  /**
   *  Form fields config
   */
  testForm: (IFormInput | IFormCheckbox | IFormNumber | IFormSelect)[];
  /**
   * Form id
   */
  id?: string| number;
}

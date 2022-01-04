
import { AbstractControl, ValidatorFn } from '@angular/forms';

export function nameValidator(reg: RegExp): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    return reg.test(control.value)
      ? null : { nameInvalid: control.value };
  }

}

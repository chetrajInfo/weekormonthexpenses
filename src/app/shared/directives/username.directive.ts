
import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';

@Directive({
  selector: '[validUsername]',
  providers: [{provide: NG_VALIDATORS, useExisting: UsernameDirective, multi: true}]
})
export class UsernameDirective implements Validator {
  
  validate(control: AbstractControl): {[key: string]: any} | null {
    const value = control.value;
    const usernameRegex = /^[a-zA-Z0-9_]*$/;
    const valid = usernameRegex.test(value);
    return valid ? null : { 'invalidUsername': true };
  }
}
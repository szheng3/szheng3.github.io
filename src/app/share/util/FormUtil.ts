import {AbstractControl, NgForm} from '@angular/forms';
import {Observable} from 'rxjs';

export function isFieldValid(form: AbstractControl) {
  if (form) {
    return !form.valid && form.touched;
  }
  return false;

}

export function formValid(form: NgForm, action$: () => Observable<any>) {
  if (form.valid) {
    action$().subscribe(() => {
      form.reset();
    });
  } else {
    validateAllFormFields(form);
  }
}

function validateAllFormFields(formGroup: NgForm) {
  Object.keys(formGroup.controls).forEach(field => {
    const control = formGroup.controls[field];
    if (control instanceof AbstractControl) {
      control.markAsTouched({ onlySelf: true });
    }
  });
}

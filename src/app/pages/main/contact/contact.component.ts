import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {NgForm} from '@angular/forms';
import {formValid, isFieldValid} from 'src/app/share/util/FormUtil';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  isFieldValid = isFieldValid;

  constructor(private httpClient: HttpClient) {
  }

  submitForm(form: NgForm) {
    const lazyAction = () =>
      // loadingObs(this.store.dispatch(new EmailActionSend(form.value)), {
      //   htmlSelector: '#contactSubmit',
      //   successMessage: 'Thank you very much for contacting us!!!',
      //   errorMessage: 'Ops, there is a problem, please try again!'
      // });
      formValid(form, lazyAction);
  }
}

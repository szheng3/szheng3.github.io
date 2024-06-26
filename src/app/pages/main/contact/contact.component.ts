import {Component, Inject} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {NgForm} from '@angular/forms';
import {formValid, isFieldValid} from 'src/app/share/util/FormUtil';
import {loadingObs} from "~/share/util/WrapObsWithStatusWithoutValue";
import {EmailService} from "~/core/api/email.service";
import {DOCUMENT} from "@angular/common";


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  isFieldValid = isFieldValid;

  constructor(private httpClient: HttpClient, private emailService: EmailService,@Inject(DOCUMENT) private document: Document) {
  }


  submitForm(form: NgForm) {
    const lazyAction = () =>
      loadingObs(this.emailService.sendEmail(form.value), {
        htmlSelector: '#contactSubmit',
        successMessage: 'Thank you very much for contacting us!!!',
        errorMessage: 'Ops, there is a problem, please try again!'
      }, this.document);

    formValid(form, lazyAction);
  }
}

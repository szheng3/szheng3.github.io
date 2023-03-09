import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Router } from '@angular/router';
import { ILogin } from 'src/app/core/api/user.service';
import { loadingObs } from 'src/app/share/util/WrapObsWithStatusWithoutValue';
import { UserLogin } from 'src/store/user/user.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private store: Store, private router: Router) {}

  ngOnInit() {}

  submitForm(value: ILogin) {
    loadingObs(this.store.dispatch(new UserLogin(value)), {
      htmlSelector: '#loginSubmit',
      errorMessage: 'Username or password is not correct.'
    }).subscribe(() => {
      this.router.navigate(['/admin/portfolio']);
    });
  }
}

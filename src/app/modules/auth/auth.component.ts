import { Component, OnInit } from '@angular/core';
import { AuthService, LoginError } from '../../services/auth/auth.service';
import { MatSnackBar } from '@angular/material';
import { TranslateService } from '@ngx-translate/core';
import { trigger, state, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  animations: [
    trigger('flyInOut', [
      state('in', style({ opacity: 1 })),
      transition('void => *', [
        style({ opacity: 0 }),
        animate(400)
      ]),
      transition('* => void', [
        animate(400, style({ opacity: 1 }))
      ])
    ])
  ]
})
export class AuthComponent implements OnInit {

  private email: string
  private password: string
  private loading: Boolean = false
  constructor(
    private authService: AuthService,
    public snackBar: MatSnackBar,
    private translateService: TranslateService
  ) { }

  ngOnInit() {
  }

  showToast(msg: string, action: string = '') {
    this.snackBar.open(msg, action, {
      duration: 3000,
    });
  }

  login() {
    this.loading = true;
    this.authService.login(this.email, this.password)
      .then(() => this.loading = false)
      .catch(async (reason) => {
        this.loading = false;
        console.log(reason);
        let msg: string = 'UNKNOWN_ERROR';
        if (reason.error && reason.error.error) {
          const loginError: LoginError = reason.error.error;
          msg = loginError.code;
        } else if (reason.statusText) {
          msg = (reason.name || msg).toUpperCase();
        }
        msg = await this.translateService.get(msg).toPromise();
        this.showToast(msg);
      });
  }

}
 
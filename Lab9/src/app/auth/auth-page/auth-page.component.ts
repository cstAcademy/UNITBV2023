import { AuthService } from '../../services/auth.service';
import { LogInPayload } from '../../interfaces/login.payload';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.scss'],
})
export class AuthPageComponent implements OnInit {
  rememberMe: boolean = false;
  userToken: string = '';

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  onSuccessRequest(): void {
    const payload: LogInPayload = {
      email: 'eve.holt@reqres.in',
      password: 'cityslicka',
    };
    this.authService.successLogIn(payload).subscribe((response) => {
      console.log(response);
      this.authService.setToken(response.token);
      this.userToken = this.authService.getToken();
    });
  }

  onErrorRequest(): void {
    this.authService
      .errorLogIn({ email: 'peter@klaven' })
      .subscribe((response) => {
        console.log(response);
      });
  }

  onRememberMeRequest(): void {
    this.onSuccessRequest();

    if (this.rememberMe) {
      window.localStorage.setItem('userToken', this.userToken);
      return;
    } else {
      window.sessionStorage.setItem('userToken', this.userToken);
    }
  }
}

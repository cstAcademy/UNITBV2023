import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LogInPayload } from '../../interfaces/login.payload';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.scss'],
})
export class AuthPageComponent implements OnInit {
  rememberMe: boolean = false;
  userToken: string | null = '';

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.userToken = this.authService.getToken();
  }

  onSuccessRequest(): void {
    const payload: LogInPayload = {
      email: 'eve.holt@reqres.in',
      password: 'cityslicka',
    };
    this.authService.successLogIn(payload).subscribe((response) => {
      console.log(response);
      this.authService.setToken(response.token);
      this.userToken = this.authService.getToken();
      sessionStorage.setItem('userToken', response.token);
      this.router.navigateByUrl('/dashboard');
    });
  }

  onErrorRequest(): void {
    this.authService.errorLogIn({ email: 'peter@klaven' }).subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (err) => {
        console.error(err);
        this.userToken = null;
        this.authService.logOut();
      },
    });
  }

  onRememberMeRequest(): void {
    const payload: LogInPayload = {
      email: 'eve.holt@reqres.in',
      password: 'cityslicka',
    };
    this.authService.successLogIn(payload).subscribe({
      next: (response) => {
        console.log(response);
        this.authService.setToken(response.token);
        this.userToken = this.authService.getToken();

        if (this.rememberMe) {
          localStorage.setItem('userToken', response.token);
        } else {
          sessionStorage.setItem('userToken', response.token);
        }

        this.router.navigateByUrl('/dashboard');
      },
      error: (err) => {
        console.error(err);
      },
    });
  }
}

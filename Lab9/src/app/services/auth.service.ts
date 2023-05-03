import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LogInPayload } from '../interfaces/login.payload';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private token: string = '';

  constructor(private httpClient: HttpClient) {}

  getToken(): string {
    return this.token;
  }

  setToken(value: string): void {
    this.token = value;
  }

  successLogIn(payload: LogInPayload): Observable<any> {
    return this.httpClient.post('https://reqres.in/api/login', payload);
  }

  errorLogIn(payload: any): Observable<any> {
    return this.httpClient.post('https://reqres.in/api/login', payload);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, delay, filter, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private httpClient: HttpClient) {}

  getListOfUsers(): Observable<any> {
    return this.httpClient
      .get('https://reqres.in/api/users?page=1&per_page=11')
      .pipe(
        map((res: any) => {
          return res.data;
        }),
        filter((res) => {
          console.log(res);

          return res.length > 10;
        }),
        delay(2000)
      );
  }

  createNewUser(name: string, job: string): Observable<any> {
    return this.httpClient.post('https://reqres.in/api/users', {
      name: name,
      job: job,
    });
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class LoggingService {
  public logged: boolean = false;
  public loggedUser: string = 'default';

  constructor(private http: HttpClient) {}

  public amIRegistered2(username: string, password: string) {
    this.http
      .post(
        'http://35.210.178.12:3004/loggin',
        {
          username: username,
          password: password,
        },
        { headers: { 'Content-Type': 'application/json;charset=UTF-8' } }
      )
      .toPromise()
      .then((data: string) => {
        if (data === 'false') {
          this.logged = false;
          console.log('not registered, sorry');
        } else {
          this.logged = true;
          console.log('logged correctly');
          localStorage.setItem('token', data);
        }
      });
  }

  public amILoggedIn() {
    console.log(localStorage);
    if (localStorage.token) {
      this.http
        .get('http://35.210.178.12:3004/checkToken?token=' + localStorage.token)
        .toPromise()
        .then((data: any) => {
          console.log(data);
          if (data === true) {
            this.logged = true;
          } else {
            this.logged = false;
            localStorage.removeItem('token');
          }
        });
    } else {
      this.logged = false;
    }
  }
}

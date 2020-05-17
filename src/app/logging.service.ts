import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class LoggingService {
  public logged = false;
  public loggedUser = 'default';
  private currentEndpoint = 'https://domi.yasmany.dev';

  constructor(private http: HttpClient) {}

  public amIRegistered2(username: string, password: string) {
    this.http
      .post(
        `${this.currentEndpoint}/loggin`,
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
        .get(`${this.currentEndpoint}/checkToken?token=` + localStorage.token)
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

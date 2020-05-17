import { Component, OnInit, DoCheck } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoggingService } from 'src/app/logging.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
})
export class WelcomeComponent implements OnInit, DoCheck {
  public wantTologin: boolean = false;
  public logged: boolean;
  public loggedUser: string;
  constructor(
    private http: HttpClient,
    private loggingService: LoggingService
  ) {}

  ngOnInit(): void {
    this.logged = this.loggingService.logged;
  }

  ngDoCheck() {
    this.logged = this.loggingService.logged;
    this.loggedUser = this.loggingService.loggedUser;
  }

  th() {
    console.log(localStorage.token);
    this.http
      .get('http://35.210.178.12:3004/')
      .toPromise()
      .then((data) => {
        console.log(data);
      });
  }
}

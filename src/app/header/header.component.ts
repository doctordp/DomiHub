import { Component, OnInit, OnChanges, DoCheck } from '@angular/core';
import { LoggingService } from '../logging.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, DoCheck {
  public isMenuCollapsed = true;
  public loggedIn: boolean;

  constructor(private logginService: LoggingService, private http: HttpClient) {
    this.loggedIn = logginService.logged;
    console.log(this.loggedIn);
  }

  ngOnInit(): void {}

  ngDoCheck() {
    this.loggedIn = this.logginService.logged;
    console.log(this.loggedIn);
  }

  local() {
    console.log(localStorage);
  }
  logOut() {
    localStorage.removeItem('token');
    this.logginService.amILoggedIn();
  }

  p() {
    this.http
      .get('https://domi.yasmany.dev')
      .toPromise()
      .then((data) => {
        console.log(data);
      });
  }
}

import { Component, OnInit, OnChanges, DoCheck } from '@angular/core';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, DoCheck {
  public isMenuCollapsed = true;
  public loggedIn: boolean;

  constructor(private logginService: LoggingService) {
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
}

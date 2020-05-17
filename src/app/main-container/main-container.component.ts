import { Component, OnInit } from '@angular/core';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.css'],
})
export class MainContainerComponent implements OnInit {
  constructor(private logginService: LoggingService) {}

  ngOnInit(): void {
    this.logginService.amILoggedIn();
  }
}

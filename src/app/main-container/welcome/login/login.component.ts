import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { LoggingService } from 'src/app/logging.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public loggingForm: FormGroup;

  constructor(private loggingService: LoggingService) {}

  ngOnInit(): void {
    this.loggingForm = new FormGroup({
      userData: new FormGroup({
        username: new FormControl(),
        password: new FormControl(),
      }),
    });
  }

  onSubmit() {
    console.log('Submited!');
    this.loggingService.amIRegistered2(
      this.loggingForm.value.userData.username,
      this.loggingForm.value.userData.password
    );
    localStorage.setItem(
      'loggedUser',
      this.loggingForm.value.userData.username
    );
  }
}

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

  constructor(private logging: LoggingService) {}

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
    console.log(this.loggingForm);
    console.log(this.loggingForm.value.userData.password);
    this.logging.amIRegistered(
      this.loggingForm.value.userData.username,
      this.loggingForm.value.userData.password
    ).then( data =>{
      console.log(data);
    }
    )
  }
}

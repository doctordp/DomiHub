import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
})
export class WelcomeComponent implements OnInit {
  public wantTologin: boolean = false;
  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  th() {
    let h = this.http.get('http://35.210.178.12:3004/').subscribe((data) => {
      console.log(data);
    });
  }
}

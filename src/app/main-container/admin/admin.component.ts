import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  public goDomiNotes() {
    window.location.href = `https://dominnotes.dev/?token=${localStorage.token}`;

    //window.location.href = `http://localhost:4200/?token=${localStorage.token}`;
  }
}

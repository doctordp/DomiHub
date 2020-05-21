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
    window.location.href = `https://master.d14g6sukj7cmzo.amplifyapp.com/logged?token=${localStorage.token}`;
  }
}

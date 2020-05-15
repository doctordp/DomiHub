import { Injectable } from '@angular/core';
import { stringify } from 'querystring';

@Injectable({
  providedIn: 'root',
})
export class LoggingService {
  constructor() {}

  public amIRegistered(username: string, password: string) {
    return new Promise((resolve) =>{
      const http = new XMLHttpRequest();
      http.open('POST', 'http://35.210.178.12:3004/loggin');
      http.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
  
      http.send(JSON.stringify({username, password }));

      http.onreadystatechange = function () {
        if (http.readyState == 4 && http.status == 200) {
          resolve(JSON.parse(http.responseText));
          console.log(JSON.parse(http.responseText));
        } else {
          console.log(http.readyState + '-----' + http.status);
        }
      };
    })
    
  }
}

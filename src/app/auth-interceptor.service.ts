import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthInterceptorService implements HttpInterceptor {
  constructor() {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.log('INTERCEPTOR');

    var authReq = req.clone({ setHeaders: { la: 'la' } });
    if (localStorage.token) {
      authReq = authReq.clone({ setHeaders: { token: localStorage.token } });
    }

    return next.handle(authReq);
  }
}

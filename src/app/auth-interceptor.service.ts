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

    if (localStorage.token) {
      const authReq = req.clone({ setHeaders: { token: localStorage.token } });
      return next.handle(authReq);
    }

    const authReq = req.clone({
      setHeaders: {
        'Content-Type': 'application/json;charset=UTF-8',
      },
    });

    return next.handle(authReq);
  }
}

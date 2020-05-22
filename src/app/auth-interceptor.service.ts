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

    const authReq = req.clone({
      setHeaders: {
        miHeader: 'funcionamiheader',
        token: localStorage.token ? localStorage.token : 'default',
      },
    });

    return next.handle(authReq);
  }
}

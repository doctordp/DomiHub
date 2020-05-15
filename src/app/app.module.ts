import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbdModalBasicComponent } from './ngbd-modal-basic/ngbd-modal-basic.component';
import { MainContainerComponent } from './main-container/main-container.component';
import { WelcomeComponent } from './main-container/welcome/welcome.component';
import { AdminComponent } from './main-container/admin/admin.component';
import { GuestComponent } from './main-container/guest/guest.component';
import { LoginComponent } from './main-container/welcome/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';

import { AuthInterceptorService } from './auth-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NgbdModalBasicComponent,
    MainContainerComponent,
    WelcomeComponent,
    AdminComponent,
    GuestComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

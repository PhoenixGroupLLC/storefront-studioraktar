import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { i18n } from './app-i18n.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RequestInterceptor } from './interceptors/request-interceptor';
import { MatSnackBarModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    i18n,
    MatSnackBarModule,
    AppRoutingModule,
  ],
  providers: [
    { 
      provide: HTTP_INTERCEPTORS, 
      useClass: RequestInterceptor, 
      multi: true 
    } 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

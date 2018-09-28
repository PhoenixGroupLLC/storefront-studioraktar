import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';


@Injectable()
export class RequestInterceptor implements HttpInterceptor {
    constructor(private router: Router, private authService: AuthService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        console.log("intercepted request ... ");

        let authReq;
        if (this.authService.hasValidSession) {
            authReq = req.clone({
                setHeaders: {
                    Authorization: this.authService.session.id 
                }
            });
        }

        //send the newly created request
        return next.handle(authReq || req);
    }
}
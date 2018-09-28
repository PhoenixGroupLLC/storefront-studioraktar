import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Router } from '@angular/router';
import { ConfigService } from '../config/config.service';

export interface Session {
    id: string,
    ttl: number,
    created: string, // ISO date string
    userId: number
}

export enum LoginErrorCode {
    USERNAME_EMAIL_REQUIRED = "USERNAME_EMAIL_REQUIRED",
    LOGIN_FAILED = "LOGIN_FAILED"
}

export interface LoginError {
    code: LoginErrorCode
    message: string
    name: string
    stack: string
    statusCode: Number
}

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    get session(): Session {
        const sessionJson: string = localStorage.getItem('session');
        if (sessionJson) {
            return JSON.parse(sessionJson);
        }
        return undefined;
    }

    get hasValidSession(): boolean {
        const session = this.session;
        if (session) {
            const expires = (new Date(session.created).getTime() + session.ttl);
            return expires > Date.now();
        }
        return false;
    }

    private saveSession(val: Session) {
        localStorage.setItem('session', JSON.stringify(val));
    }

    private deleteSession(): Session {
        const session = this.session;
        localStorage.removeItem('session');
        return session;
    }

    constructor(
        private config: ConfigService,
        private http: HttpClient,
        private router: Router
    ) { }

    // { "email": "laszlo.simon@phoenixgroup.hu", "password": "SMNadmin88" }

    login(email: string, password: string): Promise<Session> {
        const url: string = this.config.getAPIEndPoint('Users/login');
        return this.http
            .post<Session>(url, { email, password })
            .toPromise()
            .then((session) => {
                this.saveSession(session);
                this.router.navigate(['browse'])
                return session;
            });
    }

    logout(): Promise<Session> {
        if (this.session) {
            const url = this.config.getAPIEndPoint('Users/logout');
            const params = new HttpParams().set('access_token', this.session.id);
            const action = () => this.deleteSession();
            return this.http
                .post(url, {}, { params })
                .toPromise()
                .then(action, action)
                .then((session) => {
                    this.router.navigate(['auth']);
                    return session;
                });
        } else {
            this.router.navigate(['auth']);
            // Promise.reject(new Error('There is no session'));
        }
    }
}

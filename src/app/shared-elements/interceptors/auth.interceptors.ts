import { Injectable } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import {
    HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { TokenStorageService } from '../services/token-storage.service';

/** Pass untouched request through to the next request handler. */
@Injectable()
export class TokenInterceptor implements HttpInterceptor {

    constructor(private authService: AuthService, private tokenService:TokenStorageService , private router: Router) {

    }

    intercept(req: HttpRequest<any>, next: HttpHandler):
        Observable<HttpEvent<any>> {
        return next.handle(req).pipe(
            catchError(e => {
                if(e.status == 401 || e.status == 403){
                    if (this.authService.isAuthenticated()) {
                        this.authService.signOut();
                        this.tokenService.closeSessionView();
                    }
                    this.router.navigate(['/login']);
                }
                return throwError(e);
            })
        );
    }
}

export const tokenInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }
];

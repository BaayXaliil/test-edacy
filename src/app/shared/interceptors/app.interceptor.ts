import { Injectable, Injector } from "@angular/core";
import {
    HttpEvent,
    HttpInterceptor,
    HttpResponse,
    HttpHandler,
    HttpRequest,
    HttpHeaders,
    HttpErrorResponse
} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { Router } from "@angular/router";
import { AuthService } from 'src/app/auth/service/auth.service';
import { environment } from 'src/environments/environment';

@Injectable()
export class AppInterceptor implements HttpInterceptor {
    private headers: HttpHeaders;

    constructor(private readonly authService: AuthService, private readonly router: Router) { }

    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        if (req.url.startsWith("/assets")) {
            // serve assets directly
            return next.handle(req);
        }
        let token = this.authService.getToken();
        req = req.clone({
            setHeaders: { Authorization: `Bearer ${token}` }
        });
        return next.handle(req).pipe(
            catchError((error: HttpErrorResponse) => {
                if (error.status == 401 || error.status == 403) {
                    this.authService.logout();
                    this.router.navigate(["/auth/login"]);
                }
                return throwError(error);
            })
        );
    }
}

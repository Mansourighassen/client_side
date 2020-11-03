import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse,
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AuthentificationService } from "./services/authentification.service";
import { Observable, throwError, BehaviorSubject } from "rxjs";
import { catchError, switchMap, filter, take } from "rxjs/operators";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(public authService: AuthentificationService) {}
  private isRefreshing = false;
  private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(
    null
  );

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.log(request);

    if (this.authService.getJwtToken()) {
      if (request.headers.get("skip")) {
        return next.handle(request);
      }
      request = this.addToken(request, this.authService.getJwtToken());
      console.log("token");
      console.log(request.body);

      console.log(request);
    }

    return next.handle(request).pipe(
      catchError((error) => {
        if (error instanceof HttpErrorResponse && error.status === 500) {
          return this.handle401Error(request, next);
        } else {
          return throwError(error);
        }
      })
    );
  }

  handle401Error(request: HttpRequest<any>, next: HttpHandler) {
    console.log(this.isRefreshing);
    if (!this.isRefreshing) {
      this.isRefreshing = true;
      this.refreshTokenSubject.next(null);
      console.log("refreshhh");
      return this.authService.refreshToken().pipe(
        switchMap((token: any) => {
          this.isRefreshing = false;
          this.refreshTokenSubject.next(token.jwt);
          console.log(request);
          return next.handle(
            this.addToken(request, localStorage.getItem("authenticationToken"))
          );
        })
      );
    } else {
      return this.refreshTokenSubject.pipe(
        filter((token) => token != null),
        take(1),
        switchMap((jwt) => {
          return next.handle(this.addToken(request, jwt));
        })
      );
    }
  }

  private addToken(request: HttpRequest<any>, token: string) {
    return request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
}

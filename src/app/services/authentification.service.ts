import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User } from "../shared/User";
import { client } from "../shared/Client";
import { Observable } from "rxjs";
import { catchError, tap } from "rxjs/operators";
import { ProcessHTTPMsgService } from "./process-httpmsg-service.service";
import { logincr } from "../shared/logincrr";

@Injectable({
  providedIn: "root",
})
export class AuthentificationService {
  private host: String = "http://localhost:8080";
  private user: User;

  constructor(private http: HttpClient) {}

  isUserLoggedIn() {
    let user = localStorage.getItem("authenticationToken");
    return !(user === null);
  }
  logOut() {
    localStorage.removeItem("authenticationToken");

    localStorage.removeItem("email");
  }

  public signupuser(c: client): Observable<any> {
    console.log(this.host + "​/api/auth/signup");
    return this.http.post("http://localhost:8080/api/auth/signup", c, {
      responseType: "text",
    });
  }

  public loginuser(login: logincr) {
    return this.http.post<logincr>(
      "http://127.0.0.1:8080/api/auth/login",
      login,
      { headers: { skip: "true" } }
    );
  }

  refreshToken() {
    console.log("refreshing");
    const refreshTokenPayload = {
      refreshToken: this.getRefreshToken(),
      username: this.getUserName(),
    };
    return this.http
      .post<logincr>(
        "http://localhost:8080/api/auth/refresh/token",
        refreshTokenPayload,
        { headers: { skip: "true" } }
      )
      .pipe(
        tap((response) => {
          console.log(response);

          localStorage.setItem(
            "authenticationToken",
            response.authenticationToken
          );
          localStorage.setItem("expiresAt", JSON.stringify(response.expiresAt));
        })
      );
  }

  getJwtToken() {
    return localStorage.getItem("authenticationToken");
  }

  getRefreshToken() {
    return localStorage.getItem("refreshToken");
  }

  getUserName() {
    return localStorage.getItem("email");
  }

  getExpirationTime() {
    return JSON.parse(localStorage.getItem("expiresAt"));
  }
}

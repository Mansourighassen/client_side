import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ordersreq } from "../shared/Ordersrequest";
import { Observable } from "rxjs";
import { Route, Router } from "@angular/router";
import { Item } from "../shared/Item";
import { AuthentificationService } from "../services/authentification.service";

@Injectable({
  providedIn: "root",
})
export class OrderservicesService {
  private host: String = "http://localhost:8080";

  constructor(
    private http: HttpClient,
    private route: Router,
    private auths: AuthentificationService
  ) {}

  submitorder(order: ordersreq) {
    console.log(order.clientid);
    return (
      this.http
        .post<ordersreq>(this.host + "/api/subreddit", order)
        .subscribe((data) => {
          localStorage.setItem("itemsnumb", "0");
          let items: Item[] = [];
          localStorage.setItem("items", JSON.stringify(items));
          this.route.navigateByUrl("/espace-client/" + "true");
        }),
      (err) => {
        console.log(err);
      }
    );
  }

  getorders(email: string): Observable<ordersreq[]> {
    return this.http.get<ordersreq[]>(
      this.host + "/api/subreddit?email=" + email
    );
  }
}

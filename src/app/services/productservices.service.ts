import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { products } from "../shared/products";
import { ProcessHTTPMsgService } from "./process-httpmsg-service.service";
import { map, catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class ProductservicesService {
  private host: String = "http://localhost:8080";

  constructor(
    private http: HttpClient,
    private processHTTPMsgService: ProcessHTTPMsgService
  ) {}

  public getProduct(id: String): Observable<products> {
    return this.http
      .get<products>(this.host + "/products/" + id, {
        headers: { skip: "true" },
      })
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }
}

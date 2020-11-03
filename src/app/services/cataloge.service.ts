import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class CatalogeService {
  private host: String = "http://localhost:8080";
  constructor(private http: HttpClient) {}

  public getResource(url) {
    return this.http.get(this.host + url, { headers: { skip: "true" } });
  }
}

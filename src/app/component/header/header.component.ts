import { Component, OnInit } from "@angular/core";
import { AuthentificationService } from "src/app/services/authentification.service";
import { Router } from "@angular/router";
import { ShopcartserviceService } from "src/app/services/shopcartservice.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit {
  constructor(
    private authservice: AuthentificationService,
    private shopcartservice: ShopcartserviceService,
    private router: Router
  ) {}
  ngOnInit() {
    if (localStorage.getItem("itemsnumb") == null) {
      localStorage.setItem("itemsnumb", JSON.stringify(0));
    }
  }

  public ccartint() {
    console.log(localStorage.getItem("itemsnumb"));
  }

  public logout() {
    this.authservice.logOut();
    localStorage.setItem("itemsnumb", JSON.stringify(0));
    this.shopcartservice.clearcart();
    this.router.navigateByUrl("/home");
  }
}

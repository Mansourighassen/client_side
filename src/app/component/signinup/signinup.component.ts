import { Component, OnInit } from "@angular/core";
import { AuthentificationService } from "src/app/services/authentification.service";
import { Router } from "@angular/router";
import { logincr } from "src/app/shared/logincrr";

@Component({
  selector: "app-signinup",
  templateUrl: "./signinup.component.html",
  styleUrls: ["./signinup.component.css"],
})
export class SigninupComponent implements OnInit {
  username: string;
  password: string;

  logina = new logincr();
  err: String;
  checkauth: boolean;
  constructor(
    private authservice: AuthentificationService,
    private router: Router
  ) {}

  dologin() {
    this.logina.email = this.username;
    this.logina.password = this.password;
    console.log(this.logina);
    if (this.username.length < 1 || this.password.length < 1) {
      this.err = "les champs sont obligatoires";
      this.username = "";
      this.password = "";
      return;
    } else {
      this.authservice.loginuser(this.logina).subscribe(
        (data) => {
          console.log(data.username);
          localStorage.getItem("email");
          localStorage.setItem("email", data.username);
          localStorage.setItem("authenticationToken", data.authenticationToken);
          localStorage.setItem("expiresAt", JSON.stringify(data.expiresAt));
          localStorage.setItem("refreshToken", data.refreshToken);
          console.log(localStorage.getItem("authenticationToken"));
          console.log(this.authservice.isUserLoggedIn());
          this.router.navigateByUrl("products");
        },
        (err) => {
          this.username = "";
          this.password = "";
          this.err = "les informations d'identification invalides ";

          console.log(err);
        }
      );
      // this.checkauth = this.authservice.isUserLoggedIn();
      // this.authservice.loginuser(this.logina);

      // if (this.authservice.isUserLoggedIn()) {
      // } else if (this.checkauth == false) {
    }
  }

  ngOnInit() {
    this.checkauth = false;

    this.username = "";
    this.password = "";
  }
}

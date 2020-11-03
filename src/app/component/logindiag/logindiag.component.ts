import { Component, OnInit, Inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { AuthentificationService } from "src/app/services/authentification.service";

@Component({
  selector: "app-logindiag",
  templateUrl: "./logindiag.component.html",
  styleUrls: ["./logindiag.component.css"],
})
export class LogindiagComponent implements OnInit {
  username: String;
  password: String;
  err: String;
  checkauth: boolean;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: String,
    private authservice: AuthentificationService,
    public dialogRef: MatDialogRef<LogindiagComponent>
  ) {}

  dologin() {
    if (this.username === null && this.password === null) {
      this.err = "les champs sont obligatoires";
      return;
    } else {
      // this.authservice.checklogin(this.username, this.password);
      this.checkauth = this.authservice.isUserLoggedIn();
    }
    if ((this.checkauth = false)) {
      this.err = "les informations d'identification invalides ";
    } else if ((this.checkauth = true)) {
      setTimeout(() => {
        //<<<---using ()=> syntax
        this.onNoClick();
      }, 2000);
      console.log("Valid");
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    this.checkauth = false;

    this.username = null;
    this.password = null;
  }
}

import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { govs } from "src/app/shared/govs";
import { Observable } from "rxjs";
import { startWith, map } from "rxjs/operators";
import { client } from "src/app/shared/Client";
import { AuthentificationService } from "src/app/services/authentification.service";
import { respo } from "src/app/shared/Response";
import swal from "sweetalert";

@Component({
  selector: "app-signupform",
  templateUrl: "./signupform.component.html",
  styleUrls: ["./signupform.component.css"],
})
export class SignupformComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  filteredOptions: Observable<string[]>;
  gov = govs;
  clients: client;
  validresp: respo;
  userexist: Boolean;

  constructor(
    private formBuilder: FormBuilder,
    private authserv: AuthentificationService
  ) {}

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      lastname: ["", Validators.required],
      firstname: ["", Validators.required],
      phonenumber: ["", [Validators.required, Validators.pattern]],
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(8)]],
      address: ["", Validators.required],
      zipcode: ["", [Validators.required, Validators.pattern]],
      gouvernorat: ["", Validators.required],
      raisonsocial: ["", Validators.required],
    });
    this.filteredOptions = this.registerForm.controls.gouvernorat.valueChanges.pipe(
      startWith(""),
      map((value) => this._filter(value))
    );
  }

  get f() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.registerForm.invalid) {
      return;
    } else {
      this.clients = this.registerForm.getRawValue();
      this.authserv.signupuser(this.clients).subscribe(
        () => {
          this._validatesubmited(true);
        },
        (err) => {
          console.log(err);
          this._validatesubmited(false);
        }
      );
    }
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.gov.filter((option) =>
      option.toLowerCase().includes(filterValue)
    );
  }

  private _validatesubmited(response: Boolean) {
    if (response == false) {
      swal("Oops", "Email exist deja ", "error");
      this.registerForm.controls["email"].setValue("");
      this.userexist = true;
    } else {
      swal("Congrats!", ", Your account is created!", "success");
      console.log("inscription succes");
      this.userexist = false;

      this.registerForm.reset({
        lastname: "",
        firstname: "",
        phonenumber: "",
        email: "",
        password: "",
        address: "",
        zipcode: "",
        gouvernorat: "",
        raisonsocial: "",
      });
      this.submitted = false;
    }
  }
}

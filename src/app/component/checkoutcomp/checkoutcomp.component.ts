import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { NavigationEnd, Router, ActivatedRoute } from "@angular/router";
import { products } from "src/app/shared/products";
import { ordersreq } from "src/app/shared/Ordersrequest";
import { Item } from "src/app/shared/Item";
import { orderprods } from "src/app/shared/orderprods";
import { OrderservicesService } from "src/app/services/orderservices.service";
import { from, Observable } from "rxjs";
import { govs } from "src/app/shared/govs";
import { map, startWith } from "rxjs/operators";

@Component({
  selector: "app-checkoutcomp",
  templateUrl: "./checkoutcomp.component.html",
  styleUrls: ["./checkoutcomp.component.css"],
})
export class CheckoutcompComponent implements OnInit {
  orderform: FormGroup;
  gov = govs;
  submitted = false;

  isEditable = false;
  products: Item[];
  orderpords = new orderprods();
  order = new ordersreq();
  pagenumb;
  filteredOptions: Observable<string[]>;

  constructor(
    private _formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private orderserv: OrderservicesService
  ) {
    this.pagenumb = 0;
    this.products = JSON.parse(localStorage.getItem("order"));
    console.log(this.products);
    localStorage.removeItem("order");
    this.order.orderItems = [];

    this.products.forEach((item) => {
      this.orderpords.productid = item.product.id;
      this.orderpords.quantity = item.quantity;

      this.order.orderItems.push(this.orderpords);
    });

    console.log(this.order);
  }

  postorder() {
    this.orderserv.submitorder(this.order);
  }

  get f() {
    return this.orderform.controls;
  }

  ngOnInit() {
    this.orderform = this._formBuilder.group({
      Company: ["", Validators.required],
      Telephone: ["", [Validators.required, Validators.pattern]],
      email: ["", [Validators.required, Validators.email]],
      address: ["", Validators.required],
      zipcode: ["", [Validators.required, Validators.pattern]],
      gouvernorat: ["", Validators.required],
    });
    this.filteredOptions = this.orderform.controls.gouvernorat.valueChanges.pipe(
      startWith(""),
      map((value) => this._filter(value))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.gov.filter((option) =>
      option.toLowerCase().includes(filterValue)
    );
  }

  gotonext() {
    this.pagenumb = +1;
  }
  gotoprevpage() {
    this.pagenumb = -1;
  }

  onSubmit() {
    this.submitted = true;

    if (this.orderform.invalid) {
      return;
    } else {
      this.order.email = this.orderform.controls["email"].value;
      this.order.shipToAddress = this.orderform.controls["address"].value;
      this.order.telephone = this.orderform.controls["Telephone"].value;
      this.order.zipcode = this.orderform.controls["zipcode"].value;
      this.order.gouvernorat = this.orderform.controls["gouvernorat"].value;
      this.order.company = this.orderform.controls["Company"].value;
      this.order.clientid = localStorage.getItem("email");
      console.log(this.order);
      this.gotonext();
    }
  }
}

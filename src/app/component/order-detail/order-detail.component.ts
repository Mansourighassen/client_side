import { Component, OnInit } from "@angular/core";
import { ordersreq } from "src/app/shared/Ordersrequest";

@Component({
  selector: "app-order-detail",
  templateUrl: "./order-detail.component.html",
  styleUrls: ["./order-detail.component.css"],
})
export class OrderDetailComponent implements OnInit {
  order: ordersreq;
  constructor() {}

  ngOnInit() {
    this.order = JSON.parse(localStorage.getItem("orderdetail"));
    console.log(this.order);
  }
}

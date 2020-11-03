import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { OrderservicesService } from "src/app/services/orderservices.service";
import { ordersreq } from "src/app/shared/Ordersrequest";

@Component({
  selector: "app-orderhistory",
  templateUrl: "./orderhistory.component.html",
  styleUrls: ["./orderhistory.component.css"],
})
export class OrderhistoryComponent implements OnInit {
  Orders: ordersreq[] = [];

  constructor(
    private orderservice: OrderservicesService,
    private route: Router
  ) {}

  ngOnInit() {
    this.getorders();
  }

  displayedColumns: string[] = [
    "id",
    "createdate",
    "status",
    "telephone",
    "company",
    "shipToAddress",
    "gouvernorat",
  ];

  getorders() {
    let email = localStorage.getItem("email");
    console.log(email);
    this.orderservice.getorders(email).subscribe((data) => {
      this.Orders = data;

      console.log(this.Orders);
    });
  }
  getorderdetail(order) {
    console.log(order);
    localStorage.setItem("orderdetail", JSON.stringify(order));
    this.route.navigateByUrl("/espace-client/orderDetail");
  }
}

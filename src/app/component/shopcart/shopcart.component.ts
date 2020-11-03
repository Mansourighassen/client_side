import { Component, OnInit } from "@angular/core";
import { products } from "src/app/shared/products";
import { ShopcartserviceService } from "src/app/services/shopcartservice.service";
import { CatalogeService } from "src/app/services/cataloge.service";
import { Item } from "src/app/shared/Item";
import { Router } from "@angular/router";

@Component({
  selector: "app-shopcart",
  templateUrl: "./shopcart.component.html",
  styleUrls: ["./shopcart.component.css"],
})
export class ShopcartComponent implements OnInit {
  Products: Item[];
  constructor(
    private catservice: CatalogeService,
    private shopser: ShopcartserviceService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getproducts();
  }

  getproducts() {
    console.log(JSON.parse(localStorage.getItem("items")));
    this.Products = JSON.parse(localStorage.getItem("items"));
    console.log(this.Products);
  }
  checkitem(item) {
    console.log(item.product.id);
  }

  removeproduct(item) {
    this.shopser.removeitem(item.product);
    this.getproducts();
  }

  gotocheckout() {
    if (this.Products.length == 0) {
      console.log("panier vide");
    } else {
      console.log(this.Products);
      localStorage.setItem("order", JSON.stringify(this.Products));
      this.router.navigateByUrl("/panier/checkout");
    }
  }
}

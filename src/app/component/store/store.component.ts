import { Component, OnInit } from "@angular/core";
import { CatalogeService } from "src/app/services/cataloge.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-store",
  templateUrl: "./store.component.html",
  styleUrls: ["./store.component.css"],
})
export class StoreComponent implements OnInit {
  private categories;
  private prodtypes;
  private currentcat;
  private produits;
  private selectedtype;

  constructor(private catservice: CatalogeService, private router: Router) {}

  ngOnInit() {
    this.getCategories();
    this.gettypes();
    this.getproduct("/products/search/selectedProducts");
  }

  private getCategories() {
    this.catservice.getResource("/categories").subscribe(
      (data) => {
        this.categories = data;
        console.log(this.categories);
      },
      (err) => {
        console.log(err);
      }
    );
  }
  private gettypes() {
    this.catservice.getResource("/typeproduits").subscribe(
      (data) => {
        this.prodtypes = data;
        console.log("i'm here");
        console.log(this.prodtypes);
      },
      (err) => {
        console.log(err);
      }
    );
  }
  private getproductsbycat(cat) {
    this.currentcat = cat;
    this.selectedtype = null;

    this.getproduct("/categories/" + cat.id + "/products");
  }
  private filterproduits(filtercrit) {
    this.getproduct(
      "/products/search/selectedProductsBycat?cat=" +
        this.currentcat.name +
        "&type=" +
        filtercrit
    );
  }

  private gotodetails(product) {
    this.router.navigateByUrl("products/productDetail/" + product.id);
  }
  private resetfilter() {
    this.getproductsbycat(this.currentcat);
  }

  private getproduct(url) {
    this.catservice.getResource(url).subscribe(
      (data) => {
        this.produits = data;
        console.log(this.produits);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}

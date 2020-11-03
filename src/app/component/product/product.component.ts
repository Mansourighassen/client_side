import { Component, OnInit, NgModule } from "@angular/core";
import { ActivatedRoute, Router, NavigationEnd } from "@angular/router";
import { CatalogeService } from "src/app/services/cataloge.service";
import { ShopcartserviceService } from "src/app/services/shopcartservice.service";
import { AuthentificationService } from "src/app/services/authentification.service";
import { MatDialog, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { LogindiagComponent } from "../logindiag/logindiag.component";
import { products } from "src/app/shared/products";
import { ProductservicesService } from "src/app/services/productservices.service";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.css"],
})
export class ProductComponent implements OnInit {
  private product: products;
  private quantite;
  private errquantite: String;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private catservice: CatalogeService,
    private authservice: AuthentificationService,
    private ShopcartserviceService: ShopcartserviceService,
    private productservice: ProductservicesService,

    public dialog: MatDialog
  ) {
    this.router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        let url = val.url;
        console.log(url);
        let p1 = this.route.snapshot.params.id;

        if (p1) {
          console.log(p1);
          this.getproduct(p1);
          console.log(this.product);
        }
      }
    });
  }

  ///////////////////////////////////////////////////////

  private getproduct(id) {
    this.productservice.getProduct(id).subscribe(
      (data) => {
        this.product = data;
        console.log(this.product.currentprice);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  public addtocart() {
    // if (this.ShopcartserviceService.finditem(this.product) != 0) {
    //   console.log(this.ShopcartserviceService.finditem(this.product));
    //   window.alert("le produit deja dans la carte");
    // } else
    console.log(this.product.id);
    this.ShopcartserviceService.addToCart(this.product, this.quantite);
    this.quantite = 0;
    // // if (this.quantite != 0) {
    // //   console.log(this.quantite);
    // //   this.ShopcartserviceService.addToCart(this.product, this.quantite);
    // //   console.log(this.ShopcartserviceService.getItems().length);
    // // } else {
    // //   // this.dialog.open(LogindiagComponent, {
    // //   //   // data: {
    // //   //   //   animal: "panda",
    // //   //   // },
    // //   // });
    // //   this.errquantite = "la quantite ne doit pas etre 0";
    // // }
  }

  ngOnInit() {
    this.quantite = 0;
  }
}

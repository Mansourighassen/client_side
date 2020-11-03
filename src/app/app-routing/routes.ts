import { Routes } from "@angular/router";

import { HomeComponent } from "../component/home/home.component";
import { CheckoutcompComponent } from "../component/checkoutcomp/checkoutcomp.component";
import { OrderDetailComponent } from "../component/order-detail/order-detail.component";

import { StoreComponent } from "../component/store/store.component";
import { ProductComponent } from "../component/product/product.component";
import { SigninupComponent } from "../component/signinup/signinup.component";
import { EspaceclientComponent } from "../component/espaceclient/espaceclient.component";
import { ShopcartComponent } from "../component/shopcart/shopcart.component";
import { OrderhistoryComponent } from "../component/orderhistory/orderhistory.component";

export const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "panier/checkout", component: CheckoutcompComponent },
  { path: "espace-client", component: EspaceclientComponent },
  { path: "espace-client/orderDetail", component: OrderDetailComponent },

  { path: "products", component: StoreComponent },
  { path: "signin", component: SigninupComponent },
  { path: "espace-client/:validation", component: EspaceclientComponent },
  { path: "panier", component: ShopcartComponent },

  { path: "products/productDetail/:id", component: ProductComponent },

  { path: "", redirectTo: "/home", pathMatch: "full" },
];

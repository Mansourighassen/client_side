import { Injectable } from "@angular/core";
import { Item } from "../shared/Item";
import { products } from "../shared/products";

@Injectable({
  providedIn: "root",
})
export class ShopcartserviceService {
  private items: Item[] = [];
  private total: number = 0;

  addToCart(product, quantity) {
    var item: Item = {
      product: product,
      quantity: quantity,
    };
    console.log(product);
    if (this.finditem(product).length == 1) {
      this.updatequantity(product, quantity);
      console.log(this.finditem(product));
      console.log("done");
    } else {
      if (localStorage.getItem("items")) {
        this.items = JSON.parse(localStorage.getItem("items"));
      }
      this.items.push(item);
      localStorage.setItem("items", JSON.stringify(this.items));

      if (localStorage.getItem("itemsnumb")) {
        let a = JSON.parse(localStorage.getItem("itemsnumb"));
        console.log(a);
        localStorage.setItem("itemsnumb", a + 1);
        console.log(localStorage.getItem("itemsnumb"));
      }
    }
  }

  getItems() {
    console.log("d5al");
    console.log(this.items);
    return this.items;
  }

  showitems() {
    console.log(this.items);
  }

  removeitem(product) {
    let storageProducts = JSON.parse(localStorage.getItem("items"));
    let itemss = storageProducts.filter(
      (item) => item.product.id !== product.id
    );
    localStorage.setItem("items", JSON.stringify(itemss));
    let a = JSON.parse(localStorage.getItem("itemsnumb"));
    console.log(a);

    localStorage.setItem("itemsnumb", a + -1);
  }

  clearcart() {
    let items: Item[] = [];
    localStorage.setItem("items", JSON.stringify(items));
  }

  countitems() {
    return localStorage.getItem("itemsnumb");
  }
  updatequantity(product, quantitys: string) {
    let storageProducts: Item[];
    let item: Item;

    item = this.finditem(product).find((it) => it.product.id == product.id);
    this.removeitem(product);
    let a = JSON.parse(localStorage.getItem("itemsnumb"));
    item.quantity = String(parseInt(quantitys) + parseInt(item.quantity));
    localStorage.setItem("itemsnumb", a + 1);
    storageProducts = JSON.parse(localStorage.getItem("items"));
    storageProducts.push(item);
    localStorage.setItem("items", JSON.stringify(storageProducts));

    //localStorage.setItem("items", JSON.stringify(storageProducts));
  }
  finditem(product) {
    let itemss: Item[] = [];
    let storageProducts = JSON.parse(localStorage.getItem("items"));
    if (storageProducts == null) {
      return itemss;
    }
    itemss = storageProducts.filter((item) => item.product.id == product.id);
    return itemss;
  }
  constructor() {}
}

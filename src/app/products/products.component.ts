import { Component, inject } from "@angular/core";
import {
  BehaviorSubject,
  Observable,
  concatMap,
  map,
  takeWhile,
  scan,
} from "rxjs";
import { Product } from "./dto/product.dto";
import { ProductService } from "./services/product.service";
import { Settings } from "./dto/product-settings.dto";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.css"],
})
export class ProductsComponent {
  /* Todo : Faire le nécessaire pour créer le flux des produits à afficher */
  /* Tips : vous pouvez voir les différents imports non utilisés et vous en inspirer */
  setting: Settings = { skip: 0, limit: 12 };
  settings$ = new BehaviorSubject<Settings>(this.setting);
  productService = inject(ProductService);
  // Les settings un fulx de settings (chaud), initialValue BehaviouSubject  0-12 12-12, 24-12 ...
  products$: Observable<Product[]> = this.settings$.pipe(
    // => Afficher les settingsProduits (avec l'api)
    concatMap((settings) => this.productService.getProducts(settings)),
    // Je récupére juste mes produits
    map((productApiResponse) => productApiResponse.products),
    // Je concatene tant que j'ai des produits
    takeWhile((products) => products.length > 0),
    // je les concaténes avec les anciens produits
    scan((oldProducts, newProducts) => [...oldProducts, ...newProducts])
  );
  constructor() {}
  moreProducts() {
    this.setting.skip += this.setting.limit;
    this.settings$.next(this.setting);
  }
}

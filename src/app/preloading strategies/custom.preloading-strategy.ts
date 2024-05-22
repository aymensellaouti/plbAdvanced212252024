import { Injectable } from "@angular/core";
import { PreloadingStrategy, Route } from "@angular/router";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class CustomPreloadingStrategy implements PreloadingStrategy {
  preload(route: Route, load: () => Observable<any>): Observable<any> {
    /* Si on veut qu'il preload on doit retourner load() */
    if (route.data && route.data["preload"]) {
      return load();
    }
    /* sinon on return of(null) */
    return of(null);
  }
}

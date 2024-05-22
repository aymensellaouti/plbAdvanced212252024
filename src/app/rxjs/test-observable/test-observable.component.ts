import { Component, OnDestroy } from "@angular/core";
import { Observable, Subscription, filter, map, take } from "rxjs";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-test-observable",
  templateUrl: "./test-observable.component.html",
  styleUrls: ["./test-observable.component.css"],
})
export class TestObservableComponent implements OnDestroy {
  firstObservable$: Observable<number>;
  subscription = new Subscription();
  constructor(private toaster: ToastrService) {
    /* Notre publication */
    this.firstObservable$ = new Observable((observer) => {
      let i = 5;
      setInterval(() => {
        if (!i) {
          observer.complete();
        }
        observer.next(i--);
      }, 1000);
    });
    /* Observable : 1*  */
    /* Moi */
    this.subscription.add(
      this.firstObservable$.subscribe((data) => {
        console.log(data);
      })
    );
    /* Ophélie */
    this.subscription.add(
      this.firstObservable$
        /* 5 4 3 2 1 */
        .pipe(
          map((valeur) => valeur * 3),
          /* 15 12 9 6 3 */
          filter((x) => x % 2 == 0),
          /* 12 6 */
          take(1)
          /* 12 */
        )
        .subscribe({
          next: (donnes) => {
            this.toaster.info("" + donnes);
          },
          complete: () => {
            this.toaster.error("Fin du flux");
          },
          error: (e) => {
            console.log({ e });
          },
        })
    );
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

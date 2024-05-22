import { Component, inject } from "@angular/core";
import { FormBuilder, AbstractControl } from "@angular/forms";
import {
  debounceTime,
  distinctUntilChanged,
  Observable,
  switchMap,
  tap,
} from "rxjs";
import { CvService } from "../services/cv.service";
import { Cv } from "../model/cv";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
@Component({
  selector: "app-autocomplete",
  templateUrl: "./autocomplete.component.html",
  styleUrls: ["./autocomplete.component.css"],
})
export class AutocompleteComponent {
  formBuilder = inject(FormBuilder);
  cvService = inject(CvService);
  get search(): AbstractControl {
    return this.form.get("search")!;
  }
  cvs$: Observable<Cv[]>;
  form = this.formBuilder.group({ search: [""] });
  constructor() {
    this.cvs$ = this.search.valueChanges.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      tap((chaine) => console.log({ chaine })),
      switchMap((search) => this.cvService.selectByName(search)),
      takeUntilDestroyed()
    );
  }
}

import { Component, Input } from "@angular/core";
import { Observable, map, startWith, tap, timer } from "rxjs";

@Component({
  selector: "app-slider",
  templateUrl: "./slider.component.html",
  styleUrls: ["./slider.component.css"],
})
export class SliderComponent {
  @Input() timeIntervalle = 1500;
  @Input() imagePaths = [
    "as.jpg",
    "cv.png",
    "rotating_card_profile.png",
    "rotating_card_profile2.png",
    "rotating_card_profile3.png",
  ];
  /* Todo : Créer le flux permettant de générer les images à afficher dans le slider */
  paths$: Observable<string> = timer(0, this.timeIntervalle).pipe(
    /* 0 1       5 ....*/
    map((element) => this.imagePaths[element % this.imagePaths.length]),
    /* as.jpeg cv.png      as.jpeg ....*/
    startWith(this.imagePaths[0])
  );
}

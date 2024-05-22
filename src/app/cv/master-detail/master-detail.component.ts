import { Component, inject, OnDestroy } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { CvService } from "../services/cv.service";
import { Cv } from "../model/cv";
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs";

@Component({
  selector: "app-master-detail",
  templateUrl: "./master-detail.component.html",
  styleUrls: ["./master-detail.component.css"],
})
export class MasterDetailComponent implements OnDestroy {
  cvs: Cv[] = [];
  subscription: Subscription;
  constructor(
    /*     private logger: LoggerService, */
    private toastr: ToastrService,
    private cvService: CvService,
    private router: Router,
    private acr: ActivatedRoute
  ) {
    this.cvs = this.acr.snapshot.data["cvs"];
    /* this.cvService.getCvs().subscribe({
      next: (cvs) => {
        this.cvs = cvs;
      },
      error: () => {
        this.cvs = this.cvService.getFakeCvs();
        this.toastr.error(`
          Attention!! Les données sont fictives, problème avec le serveur.
          Veuillez contacter l'admin.`);
      },
    }); */
    /* this.logger.logger("je suis le cvComponent"); */
    this.toastr.info("Bienvenu dans notre CvTech");
    /* Je m'inscris */
    this.subscription = this.cvService.selectCv$.subscribe((cv) =>
      this.router.navigate([cv.id], { relativeTo: this.acr })
    );
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

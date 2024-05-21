import { Component, inject } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { CvService } from "../services/cv.service";
import { Cv } from "../model/cv";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-master-detail",
  templateUrl: "./master-detail.component.html",
  styleUrls: ["./master-detail.component.css"],
})
export class MasterDetailComponent {
  cvs: Cv[] = [];

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
  }
  onForwardCv(cv: Cv) {
    this.router.navigate([cv.id], { relativeTo: this.acr });
  }
}

import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { authGuard } from "../auth/guards/auth.guard";
import { AddCvComponent } from "./add-cv/add-cv.component";
import { CvComponent } from "./cv/cv.component";
import { DetailsCvComponent } from "./details-cv/details-cv.component";
import { listCvsResolver } from "./list-cvs.resolver";
import { MasterDetailComponent } from "./master-detail/master-detail.component";

export const CV_MODULE = [
  {
    path: "",
    component: CvComponent,
  } /* todo/add */,
  {
    path: "add",
    component: AddCvComponent,
    canActivate: [authGuard],
  },
  {
    path: "list",
    component: MasterDetailComponent,
    children: [{ path: ":id", component: DetailsCvComponent }],
    resolve: {
      cvs: listCvsResolver,
    },
  },
  { path: ":id", component: DetailsCvComponent, data: { name: "ophélie" } },
];

@NgModule({
  imports: [RouterModule.forChild(CV_MODULE)],
  exports: [RouterModule],
})
export class CvRoutingModule {}

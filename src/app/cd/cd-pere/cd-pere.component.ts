import { Component } from "@angular/core";

@Component({
  selector: "app-cd-pere",
  templateUrl: "./cd-pere.component.html",
  styleUrls: ["./cd-pere.component.css"],
})
export class CdPereComponent {
  user: { id: number; email: string } = { id: 1, email: "test" };
  name = "ophélie";
}
